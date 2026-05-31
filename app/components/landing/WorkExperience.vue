<script setup lang="ts">
import { Separator } from "~/components/ui/separator";

defineProps<{ page: typeof import("~/data/portfolio").portfolioData.index }>();
</script>

<template>
  <section>
    <h2 class="text-xl font-medium tracking-tight lg:text-2xl">
      {{ page.experience.title }}
    </h2>
    <div class="mt-3 flex flex-col gap-2">
      <div
        v-for="experience in page.experience.items"
        :key="`${experience.date}-${experience.company.name}`"
        class="text-muted-foreground flex items-center gap-2 text-nowrap"
      >
        <p class="text-sm">
          {{ experience.date }}
        </p>
        <Separator class="min-w-6 flex-1" />
        <a
          :href="experience.company.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 text-sm"
        >
          <span>{{ experience.position }}</span>
          <span
            class="inline-flex items-center gap-1 font-medium"
            :style="{ color: experience.company.color }"
          >
            {{ experience.company.name }}
            <Icon
              :name="experience.company.logo"
              size="16"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
