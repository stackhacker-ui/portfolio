<script setup lang="ts">
import type { AccordionContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { AccordionContent } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="props"
    class="overflow-hidden text-sm"
  >
    <div :class="cn('pt-0 pb-4', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
