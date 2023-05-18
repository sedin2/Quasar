<template>
  <q-page class="q-pa-xl">
    <section>
      <p class="text-h4">QForm Component</p>
      <q-separator class="q-my-md" />

      <q-form
        ref="myForm"
        class="q-gutter-y-md q-mt-lg"
        autofocus
        greedy
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          outlined
          v-model="form.title"
          label="제목"
          :rules="[val => !!val || 'Field is required']"
          lazy-rules
        />
        <q-input
          outlined
          v-model="form.content"
          label="내용"
          type="textarea"
          counter
          :rules="[
            val => !!val || 'Field is required',
            val => val.length <= 50 || '최대 50자 이내로 입력하세요',
          ]"
        />
        <q-select
          outlined
          v-model="form.tags"
          :options="tagOptions"
          label="태그"
          emit-value
          multiple
          :rules="[
            val => val.length > 0 || '필수 항목입니다',
            val => val.length <= 2 || '최대 2개까지 선택 가능합니다',
          ]"
        />
        <q-toggle :label="`동의 하시겠습니까?`" v-model="form.accept" />
        <div class="q-gutter-x-sm">
          <q-btn label="validate" color="secondary" @click="validate" />
          <q-btn label="resetValidation" color="warning" @click="reset" />
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const myForm = ref(null);
const form = ref({
  title: '',
  content: '',
  tags: [],
  accept: false,
});

const tagOptions = ref([
  { label: '구글', value: 'Google' },
  { label: '페이스북', value: 'Facebook' },
  { label: '트위터', value: 'Twitter' },
  { label: '애플', value: 'Apple' },
  { label: '오라클', value: 'Oracle' },
]);

const validate = () => {
  myForm.value.validate().then(success => {
    if (success) {
      alert('성공입니다!');
    } else {
      alert('실패입니다!');
    }
  });
};

const reset = () => {
  myForm.value.resetValidation();
};

const onSubmit = () => {
  if (form.value.accept !== true) {
    alert('동의 해 주세요!');
  } else {
    alert('성공~!');
  }
};

const onReset = () => {
  form.value.title = '';
  form.value.content = '';
  form.value.tags = [];
  form.value.accept = false;
};
</script>

<style lang="scss" scoped></style>
