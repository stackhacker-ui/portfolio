<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { portfolioData } from "~/data/portfolio";
import { renderMarkdown } from "~/utils/markdown";

const route = useRoute();
const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug.join("/") : route.params.slug);
const page = computed(() => portfolioData.posts.find(post => post.slug === slug.value));

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const surrounding = computed(() => {
  const index = portfolioData.posts.findIndex(post => post.slug === page.value?.slug);
  return {
    previous: portfolioData.posts[index - 1],
    next: portfolioData.posts[index + 1],
  };
});

const title = computed(() => page.value?.title || "Blog");
const description = computed(() => page.value?.description || "");
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogImage: () => page.value?.image });

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
async function copyLink() {
  await navigator.clipboard?.writeText(window.location.href);
}
</script>

<template>
  <main class="mt-20 px-2">
    <article
      v-if="page"
      class="min-h-screen px-2 pb-16"
    >
      <NuxtLink
        to="/blog"
        class="flex items-center gap-1 text-sm"
      >
        <ChevronLeft
          class="size-4"
        />
        Blog
      </NuxtLink>
      <div class="mt-8 flex flex-col gap-3">
        <div class="text-muted-foreground flex items-center justify-center gap-2 text-xs">
          <span>{{ formatDate(page.date) }}</span><span>-</span><span>{{ page.minRead }} MIN READ</span>
        </div>
        <img
          :src="page.image"
          :alt="page.title"
          class="h-[300px] w-full rounded-lg object-cover object-center"
        >
        <h1 class="mx-auto mt-4 max-w-3xl text-center text-4xl font-medium">
          {{ page.title }}
        </h1>
        <p class="text-muted-foreground mx-auto max-w-2xl text-center">
          {{ page.description }}
        </p>
        <div class="mt-2 flex items-center justify-center gap-2">
          <div class="flex flex-col items-center justify-center text-center">
            <Avatar class="size-12">
              <AvatarImage
                :src="page.author.avatar.src"
                :alt="page.author.avatar.alt"
              />
              <AvatarFallback>{{ page.author.name.slice(0, 2) }}</AvatarFallback>
            </Avatar>
            <p class="mt-2 text-sm font-medium">
              {{ page.author.name }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="prose-portfolio mx-auto mt-10 max-w-3xl"
        v-html="renderMarkdown(page.body)"
      />
      <div class="mx-auto mt-8 flex max-w-3xl items-center justify-end gap-2 text-sm text-muted-foreground">
        <Button
          size="sm"
          variant="link"
          @click="copyLink"
        >
          Copy link
        </Button>
      </div>
      <nav class="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
        <NuxtLink
          v-if="surrounding.previous"
          :to="surrounding.previous.path"
          class="block rounded-lg text-sm"
        >
          <Card class="py-4">
            <CardContent class="px-4">
              <span class="text-muted-foreground">Previous</span>
              <p class="font-medium">{{ surrounding.previous.title }}</p>
            </CardContent>
          </Card>
        </NuxtLink>
        <NuxtLink
          v-if="surrounding.next"
          :to="surrounding.next.path"
          class="block rounded-lg text-sm sm:text-right"
        >
          <Card class="py-4">
            <CardContent class="px-4">
              <span class="text-muted-foreground">Next</span>
              <p class="font-medium">{{ surrounding.next.title }}</p>
            </CardContent>
          </Card>
        </NuxtLink>
      </nav>
    </article>
  </main>
</template>
