<script setup lang="ts">
import { LockKeyhole } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { portfolioData } from "~/data/portfolio";
import { profile } from "~/data/navigation";

const page = portfolioData.projectsPage;
const projects = portfolioData.projects;
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
      <div class="mt-6 flex items-center gap-2">
        <Button
          as="a"
          :href="profile.meetingLink"
          variant="secondary"
        >
          {{ page.links[0]?.label }}
        </Button>
        <Button
          as="a"
          :href="`mailto:${profile.email}`"
        >
          {{ page.links[1]?.label }}
        </Button>
      </div>
    </section>
    <section class="space-y-10 px-4 pb-16">
      <article
        v-for="(project, index) in projects"
        :key="project.title"
        class="rounded-lg"
      >
        <Card class="border-0 bg-transparent p-0 shadow-none">
          <CardContent class="grid gap-6 p-0 md:grid-cols-2 md:items-start">
            <div :class="index % 2 === 1 ? 'md:order-2' : ''">
              <span class="text-muted-foreground text-sm">{{ new Date(project.date).getFullYear() }}</span>
              <h2 class="mt-2 text-xl font-medium">
                {{ project.title }}
              </h2>
              <p class="text-muted-foreground mt-2 text-sm leading-relaxed">
                {{ project.description }}
              </p>
              <p class="text-muted-foreground mt-4 flex items-center text-sm">
                Case study available on request
                <LockKeyhole
                  class="ml-1 size-4"
                />
              </p>
            </div>
            <img
              :src="project.image"
              :alt="project.title"
              class="h-48 w-full rounded-lg object-cover"
            >
          </CardContent>
        </Card>
      </article>
    </section>
  </main>
</template>
