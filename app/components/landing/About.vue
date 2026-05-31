<script setup lang="ts">
defineProps<{ page: typeof import("~/data/portfolio").portfolioData.index }>();
</script>

<template>
  <section>
    <h2 class="text-xl font-medium tracking-tight lg:text-2xl">
      {{ page.about.title }}
    </h2>
    <p class="text-muted-foreground mt-3 whitespace-pre-line text-sm leading-relaxed">
      {{ page.about.description }}
    </p>
  </section>
</template>
