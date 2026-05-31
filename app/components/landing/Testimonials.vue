<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

defineProps<{ page: typeof import("~/data/portfolio").portfolioData.index }>();
</script>

<template>
  <section class="mx-auto max-w-4xl px-4 py-12">
    <div class="bg-muted/50 -mx-4 overflow-x-auto rounded-none py-10 [contain:paint] sm:-mx-12 lg:-mx-16">
      <div class="flex snap-x gap-4 px-4">
        <article
          v-for="item in page.testimonials"
          :key="item.author.name"
          class="min-w-full snap-center px-6 text-center sm:px-12"
        >
          <p class="text-balance text-base leading-relaxed before:absolute before:-ml-6 before:-mt-2 before:text-5xl before:text-muted-foreground before:content-[open-quote] after:absolute after:ml-1 after:mt-1 after:text-5xl after:text-muted-foreground after:content-[close-quote]">
            {{ item.quote }}
          </p>
          <div class="mt-8 flex flex-col items-center justify-center gap-2">
            <Avatar class="size-12">
              <AvatarImage
                :src="item.author.avatar.src"
                :alt="item.author.name"
              />
              <AvatarFallback>{{ item.author.name.slice(0, 2) }}</AvatarFallback>
            </Avatar>
            <div>
              <p class="font-medium">
                {{ item.author.name }}
              </p>
              <p class="text-muted-foreground text-sm">
                {{ item.author.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
