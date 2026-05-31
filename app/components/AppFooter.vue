<script setup lang="ts">
import { Button } from "~/components/ui/button";
import TemplateMenu from "~/components/TemplateMenu.vue";
import { socialLinks } from "~/data/navigation";
</script>

<template>
  <footer class="bg-background py-4">
    <div class="mx-auto flex min-h-14 max-w-4xl flex-wrap items-center justify-between gap-4 px-4">
      <div class="flex items-center gap-3">
        <TemplateMenu />
        <p class="text-muted-foreground text-xs">
          Built with Stackhacker UI • © {{ new Date().getFullYear() }}
        </p>
      </div>
      <div class="flex items-center gap-1">
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
          class="text-muted-foreground size-8 rounded-full"
        >
          <component
            :is="link.icon"
            class="size-4"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  </footer>
</template>
