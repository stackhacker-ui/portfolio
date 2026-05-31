<script setup lang="ts">
import { portfolioData } from "~/data/portfolio";

const page = portfolioData.blogPage;
const posts = portfolioData.posts;
useSeoMeta({ title: page.title, ogTitle: page.title, description: page.description, ogDescription: page.description });
</script>

<template>
  <main>
    <section class="px-4 py-24 sm:py-28 lg:py-32">
      <h1 class="max-w-3xl text-left text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {{ page.title }}
      </h1>
      <p class="text-muted-foreground mt-2 max-w-2xl text-left text-pretty">
        {{ page.description }}
      </p>
    </section>
    <section class="space-y-10 px-4 pb-16">
      <NuxtLink
        v-for="(post, index) in posts"
        :key="post.path"
        :to="post.path"
        class="group grid gap-6 transition-all md:grid-cols-2 md:items-center"
      >
        <div
          class="overflow-visible"
          :class="index % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-1'"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="border-muted ring-border h-64 w-full rounded-lg border-4 object-cover shadow-lg ring-2 transition-transform group-hover:scale-105"
          >
        </div>
        <div>
          <p class="text-muted-foreground text-xs">
            {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }} · {{ post.minRead }} MIN READ
          </p>
          <h2 class="mt-2 text-xl font-medium">
            {{ post.title }}
          </h2>
          <p class="text-muted-foreground mt-2 text-sm leading-relaxed">
            {{ post.description }}
          </p>
        </div>
      </NuxtLink>
    </section>
  </main>
</template>
