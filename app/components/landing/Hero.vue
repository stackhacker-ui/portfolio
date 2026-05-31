<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { profile, socialLinks } from "~/data/navigation";

const props = defineProps<{ page: typeof import("~/data/portfolio").portfolioData.index }>();
const images = computed(() => [...props.page.hero.images, ...props.page.hero.images]);
</script>

<template>
  <section class="w-full max-w-full overflow-x-clip py-24 [contain:paint] sm:py-28 lg:py-32">
    <div class="mx-auto max-w-4xl px-4 text-center">
      <img
        :src="profile.picture.light"
        :alt="profile.picture.alt"
        class="ring-border mx-auto size-18 rounded-full object-cover ring ring-offset-3 ring-offset-background"
      >
      <h1 class="mx-auto mt-6 max-w-lg text-3xl font-medium tracking-tight text-balance text-shadow-md sm:text-4xl lg:text-5xl">
        {{ page.title }}
      </h1>
      <p class="text-muted-foreground mx-auto mt-2 max-w-2xl text-pretty">
        {{ page.description }}
      </p>
      <div class="mt-6 flex flex-col items-center justify-center gap-4">
        <div class="flex flex-wrap items-center justify-center gap-2">
          <Button
            as="a"
            :href="page.hero.links[0]?.to"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            {{ page.hero.links[0]?.label }}
          </Button>
          <Button
            as="a"
            :href="profile.available ? profile.meetingLink : undefined"
            variant="ghost"
            class="gap-2"
          >
            <span class="relative flex size-2">
              <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span class="relative inline-flex size-2 scale-90 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </Button>
        </div>
        <div class="inline-flex gap-x-4">
          <Button
            v-for="link in socialLinks"
            :key="link.to"
            as="a"
            :href="link.to"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.label"
            variant="ghost"
            size="icon"
            class="rounded-full"
          >
            <component
              :is="link.icon"
              class="size-5"
            />
          </Button>
        </div>
      </div>
    </div>
    <div class="group mt-12 flex w-max gap-4 py-2 [animation:marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
      <img
        v-for="(img, index) in images"
        :key="`${img.src}-${index}`"
        :src="img.src"
        :alt="img.alt"
        class="aspect-square h-[234px] w-[234px] rounded-lg object-cover"
        :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
      >
    </div>
  </section>
</template>
