<script setup lang="ts">
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: { lang: "en" },
});

const title = "Emma Thompson - UX/UI Designer";
const description = "Welcome to my portfolio! I'm Emma Thompson, a UX/UI designer and front-end developer based in Boston.";
const ogImage = "https://portfolio-template.stackhacker.io/screenshots/portfolio-light.png";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="mx-auto max-w-4xl border-border/60 sm:border-x">
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </div>
  </div>
</template>
