<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <p class="text-h4">Change Quasar Language Pack at Runtime</p>
      <q-separator class="q-my-md" />
      <q-select
        v-model="lang"
        :options="langOptions"
        label="퀘이사 언어"
        outlined
        emit-value
        map-options
      />
      {{ $q.lang }}
    </section>
  </q-page>
</template>

<script>
import languages from 'quasar/lang/index.json';
const appLanguages = languages.filter(lang =>
  ['ko-KR', 'en-US'].includes(lang.isoName),
);

const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

console.log(appLanguages);
console.log(langOptions);
</script>
<script setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

console.log($q.lang.isoName);
const lang = ref($q.lang.isoName);

watch(lang, val => {
  console.log('val:', val);
  import('../../node_modules/quasar/lang/' + val).then(lang => {
    $q.lang.set(lang.default);
    $q.localStorage.set('lang', val);
  });
});
</script>

<style lang="scss" scoped></style>
