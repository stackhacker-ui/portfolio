<script setup lang="ts">
import { portfolioData } from "~/data/portfolio";
import { profile } from "~/data/navigation";
import { renderMarkdown } from "~/utils/markdown";

const page = portfolioData.about;
useSeoMeta({ title: page.title, ogTitle: page.title, description: page.description, ogDescription: page.description });
</script>

<template>
  <main>
    <section class="grid items-center gap-8 px-4 py-24 sm:grid-cols-[1fr_auto] sm:py-28 lg:py-32">
      <div>
        <h1 class="text-left text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {{ page.title }}
        </h1>
        <p class="text-muted-foreground mt-2 max-w-2xl text-left text-pretty">
          {{ page.description }}
        </p>
      </div>
      <img
        :src="profile.picture.light"
        :alt="profile.picture.alt"
        class="ring-border size-36 rounded-lg object-cover ring ring-offset-3 ring-offset-background sm:rotate-4"
      >
    </section>
    <section class="px-4 pb-16">
      <div
        class="prose-portfolio"
        v-html="renderMarkdown(page.content)"
      />
      <div class="flex flex-row items-center justify-center -space-x-8 py-10">
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="image.src"
          :image="image"
          :index="index"
        />
      </div>
    </section>
  </main>
</template>
