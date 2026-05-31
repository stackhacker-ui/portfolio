<script setup lang="ts">
import { portfolioData } from "~/data/portfolio";

const page = portfolioData.index;
useSeoMeta({
  title: page.seo.title,
  ogTitle: page.seo.title,
  description: page.seo.description,
  ogDescription: page.seo.description,
  ogImage: "https://portfolio-template.stackhacker.io/screenshots/portfolio-light.png",
});
</script>

<template>
  <main>
    <LandingHero :page="page" />
    <section class="mx-auto grid max-w-4xl gap-8 px-4 pb-12 lg:grid-cols-2">
      <LandingAbout :page="page" />
      <LandingWorkExperience :page="page" />
    </section>
    <LandingBlog :page="page" />
    <LandingTestimonials :page="page" />
    <LandingFAQ :page="page" />
  </main>
</template>
