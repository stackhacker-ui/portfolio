<script setup lang="ts">
import type { NuxtError } from "#app";
import { Button } from "~/components/ui/button";

const props = defineProps<{ error: NuxtError }>();

useHead({ htmlAttrs: { lang: "en" } });
useSeoMeta({ title: "Page not found", description: "We are sorry but this page could not be found." });
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="mx-auto max-w-4xl border-border/60 sm:border-x">
      <AppHeader />
      <main class="flex min-h-screen items-center justify-center px-4 py-24">
        <section class="text-center">
          <p class="text-muted-foreground text-sm">
            {{ props.error.statusCode || 404 }}
          </p>
          <h1 class="mt-3 text-4xl font-medium tracking-tight">
            Page not found
          </h1>
          <p class="text-muted-foreground mx-auto mt-3 max-w-md">
            We are sorry but this page could not be found.
          </p>
          <Button
            as="a"
            href="/"
            class="mt-6"
          >
            Back to home
          </Button>
        </section>
      </main>
      <AppFooter />
    </div>
  </div>
</template>
