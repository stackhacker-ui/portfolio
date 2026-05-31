export function renderMarkdown(value = "") {
  const escapeHtml = (input: string) => input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  const escapeAttribute = (input: string) => escapeHtml(input)
    .replaceAll("\"", "&quot;");

  const isSafeHref = (href: string) => {
    const trimmed = href.trim();
    return trimmed.startsWith("/")
      || trimmed.startsWith("#")
      || /^https?:\/\//i.test(trimmed)
      || /^mailto:/i.test(trimmed);
  };

  const formatText = (input: string) => escapeHtml(input)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  const inline = (input: string) => {
    const linkPattern = /\[([^\]]+)\]\(([^\s()]+(?:\([^)]*\))?[^\s)]*)\)/g;
    let html = "";
    let lastIndex = 0;

    for (const match of input.matchAll(linkPattern)) {
      const fullMatch = match[0];
      const label = match[1] ?? "";
      const href = match[2] ?? "";
      const index = match.index ?? 0;
      html += formatText(input.slice(lastIndex, index));
      html += isSafeHref(href)
        ? `<a class="text-primary underline underline-offset-4" href="${escapeAttribute(href.trim())}">${formatText(label)}</a>`
        : formatText(label);
      lastIndex = index + fullMatch.length;
    }

    return html + formatText(input.slice(lastIndex));
  };

  const lines = value.trim().split(/\n/);
  const html: string[] = [];
  let list: string[] = [];
  let listTag: "ol" | "ul" | undefined;

  const flushList = () => {
    if (list.length) {
      html.push(`<${listTag}>${list.join("")}</${listTag}>`);
      list = [];
      listTag = undefined;
    }
  };

  const pushListItem = (tag: "ol" | "ul", content: string) => {
    if (listTag && listTag !== tag) flushList();
    listTag = tag;
    list.push(`<li>${inline(content)}</li>`);
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      html.push(`<h3>${inline(line.slice(4))}</h3>`);
    }
    else if (line.startsWith("## ")) {
      flushList();
      html.push(`<h2>${inline(line.slice(3))}</h2>`);
    }
    else if (line.startsWith("- ")) {
      pushListItem("ul", line.slice(2));
    }
    else if (/^\d+\. /.test(line)) {
      pushListItem("ol", line.replace(/^\d+\. /, ""));
    }
    else if (line.startsWith("> ")) {
      flushList();
      html.push(`<blockquote>${inline(line.slice(2))}</blockquote>`);
    }
    else {
      flushList();
      html.push(`<p>${inline(line)}</p>`);
    }
  }
  flushList();
  return html.join("\n");
}
