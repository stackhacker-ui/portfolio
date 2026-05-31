<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { portfolioData } from "~/data/portfolio";

defineProps<{ page: typeof import("~/data/portfolio").portfolioData.index }>();
const posts = portfolioData.posts.slice(0, 3);
</script>

<template>
  <section class="mx-auto max-w-4xl px-4 py-12">
    <h2 class="text-left text-xl font-medium tracking-tight lg:text-2xl">
      {{ page.blog.title }}
    </h2>
    <p class="text-muted-foreground mt-2 text-left text-sm">
      {{ page.blog.description }}
    </p>
    <div class="mt-6 grid gap-4">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="group grid gap-4 rounded-lg py-3 transition-colors sm:grid-cols-[160px_1fr]"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="h-28 w-full rounded-lg object-cover sm:h-full"
        >
        <div>
          <p class="text-muted-foreground text-xs">
            {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }} · {{ post.minRead }} MIN READ
          </p>
          <h3 class="mt-1 font-medium">
            {{ post.title }}
          </h3>
          <p class="text-muted-foreground mt-2 line-clamp-2 text-sm">
            {{ post.description }}
          </p>
          <Button
            variant="link"
            size="sm"
            class="mt-2 px-0 gap-0"
          >
            Read Article
            <ArrowRight
              class="size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
            />
          </Button>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
