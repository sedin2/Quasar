<template>
  <q-page class="q-pa-xl">
    <section>
      <p class="text-h4">QForm Component</p>
      <q-separator class="q-my-md" />
      
      <q-form class="q-gutter-y-md q-mt-lg">
        <q-input outlined v-model="form.title" label="제목" :rules="[val => !!val || 'Field is required']" />
        <q-input 
          outlined 
          v-model="form.content" 
          label="내용" 
          type="textarea" 
          :rules="[
            val => !!val || 'Field is required', 
            (val) => val.length <= 50 || '최대 50자 이내로 입력하세요'
          ]" 
        />
        <q-select outlined v-model="form.tags" :options="tagOptions" label="태그" emit-value multiple />
        {{ form.tags }}
      </q-form>
      <q-toggle :label="`동의 하시겠습니까?`" v-model="form.accept" />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
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
