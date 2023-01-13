<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Headings</div>
      <q-separator class="q-my-md" />
      <div class="bg-primary">primary</div>
      <div class="bg-secondary">secondary</div>
      <div class="bg-accent">accent</div>
      <div class="bg-dark">dark</div>
      <div class="bg-positive">positive</div>
      <div class="bg-negative">negative</div>
      <div class="bg-info">info</div>
      <div
        class="bg-warning text-h4 text-weight-bolder text-strike text-center"
      >
        warning
      </div>
      <div class="bg-cyan-12 text-accent">cyan</div>
      <div class="bg-teal-12 text-negative">teal</div>
      <div class="bg-green-12">green</div>
      <p>Variables</p>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
p {
  color: $cyan-12;
  background-color: $grey-5;
}
</style>
