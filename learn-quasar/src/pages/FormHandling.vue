<template>
  <q-page class="q-pa-xl">
    <section>
      <p class="text-h4">QForm Component</p>
      <q-separator class="q-my-md" />
      
      <q-form class="q-gutter-y-md q-mt-lg">
        <q-input outlined v-model="form.title" label="제목"></q-input>
        <q-input outlined v-model="form.title" label="내용" type="textarea"></q-input>
        <q-select outlined v-model="form.tags" :options="tagOptions" label="태그" emit-value multiple></q-select>
        {{ form.tags }}
      </q-form>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  title: '',
  content: '',
  tags: []
})

const tagOptions = ref([
  { label: '구글', value: 'Google'},
  { label: '페이스북', value: 'Facebook'},
  { label: '트위터', value: 'Twitter'},
  { label: '애플', value: 'Apple'},
  { label: '오라클', value: 'Oracle'},
])
</script>

<style lang="scss" scoped></style>
