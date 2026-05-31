<script setup lang="ts">
import { navLinks } from "~/data/navigation";

const route = useRoute();
</script>

<template>
  <div class="fixed top-2 left-1/2 z-50 -translate-x-1/2 sm:top-4">
    <nav class="bg-muted/80 border-muted/50 shadow-neutral-950/5 flex items-center gap-1 rounded-full border px-2 py-1 shadow-lg backdrop-blur-sm sm:px-4">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="hover:text-foreground flex items-center gap-1 rounded-full px-2 py-1 text-sm transition-colors"
        :class="route.path === link.to ? 'text-foreground' : 'text-muted-foreground'"
      >
        <component
          :is="link.icon"
          class="hidden size-4"
          aria-hidden="true"
        />
        <span>{{ link.label }}</span>
      </NuxtLink>
      <ModeSwitcher />
    </nav>
  </div>
</template>
