<script setup lang="ts">
import type { AvatarFallbackProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { AvatarFallback } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<AvatarFallbackProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    v-bind="props"
    :class="cn('bg-muted flex size-full items-center justify-center rounded-full', props.class)"
  >
    <slot />
  </AvatarFallback>
</template>
