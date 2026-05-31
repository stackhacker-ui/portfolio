<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { portfolioData } from "~/data/portfolio";
import { profile } from "~/data/navigation";

type SpeakingEvent = {
  category: "Conference" | "Live talk" | "Podcast";
  title: string;
  date: string;
  location: string;
  url?: string;
};

const page = portfolioData.speaking;
const groupedEvents = computed(() => {
  const grouped: Record<SpeakingEvent["category"], SpeakingEvent[]> = { "Conference": [], "Live talk": [], "Podcast": [] };
  for (const event of page.events as readonly SpeakingEvent[]) grouped[event.category].push(event);
  return grouped;
});
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long" });
}
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
      <Button
        v-if="page.links"
        as="a"
        :href="`mailto:${profile.email}`"
        class="mt-6"
      >
        {{ page.links[0]?.label }}
      </Button>
    </section>
    <section class="px-4 pb-16">
      <div
        v-for="(eventsInCategory, category) in groupedEvents"
        :key="category"
        class="mb-16 grid grid-cols-1 lg:grid-cols-3 lg:gap-8 last:mb-0"
      >
        <div class="mb-4 lg:col-span-1 lg:mb-0">
          <h2 class="text-xl font-semibold tracking-tight lg:sticky lg:top-16">
            {{ category }}s
          </h2>
        </div>
        <div class="space-y-8 lg:col-span-2">
          <div
            v-for="(event, index) in eventsInCategory"
            :key="`${category}-${index}`"
            class="group relative border-l border-border pl-6"
          >
            <NuxtLink
              v-if="event.url"
              :to="event.url"
              class="absolute inset-0"
            />
            <div class="text-muted-foreground mb-1 text-sm font-medium">
              <span>{{ event.location }}</span><span class="mx-1">·</span><span>{{ formatDate(event.date) }}</span>
            </div>
            <h3 class="text-lg font-semibold">
              {{ event.title }}
            </h3>
            <p
              v-if="event.url"
              class="flex items-center pt-2 text-sm text-primary"
            >
              {{ event.category === 'Podcast' ? 'Listen' : 'Watch' }}
              <ArrowRight
                class="size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
