<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs";
import { renderMarkdown } from "~/utils/markdown";

const props = defineProps<{ page: typeof import("~/data/portfolio").portfolioData.index }>();
const activeCategory = ref(props.page.faq.categories[0]?.title);
</script>

<template>
  <section class="mx-auto max-w-4xl px-4 py-12">
    <h2 class="text-left text-xl font-medium tracking-tight lg:text-2xl">
      {{ page.faq.title }}
    </h2>
    <p class="text-muted-foreground mt-2 text-left text-sm">
      {{ page.faq.description }}
    </p>
    <Tabs
      v-if="activeCategory"
      v-model="activeCategory"
      class="mt-5"
    >
      <TabsList class="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
        <TabsTrigger
          v-for="category in page.faq.categories"
          :key="category.title"
          :value="category.title"
          class="data-[state=active]:bg-muted hover:bg-muted/50 h-auto flex-none rounded-lg border-0 bg-transparent px-3 py-2 text-muted-foreground shadow-none data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          {{ category.title }}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        v-for="category in page.faq.categories"
        :key="category.title"
        :value="category.title"
        class="mt-4"
      >
        <Accordion
          type="multiple"
          class="space-y-2"
        >
          <AccordionItem
            v-for="question in category.questions"
            :key="question.label"
            :value="question.label"
            class="bg-muted/60 rounded-lg border-0 px-4"
          >
            <AccordionTrigger class="py-3 text-base hover:no-underline">
              {{ question.label }}
            </AccordionTrigger>
            <AccordionContent>
              <div
                class="prose-portfolio text-sm"
                v-html="renderMarkdown(question.content)"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
    </Tabs>
  </section>
</template>
