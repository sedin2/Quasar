<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Utils</div>
      <q-separator class="q-my-md" />
      <div class="text-h6">
        formatDate - {{ formatDate(new Date(), FORMAT) }}
      </div>
      <div class="text-h6">
        addToDate - {{ formatDate(addToDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
      <div class="text-h6">
        subtractFromDate - {{ formatDate(subtractFromDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Type Checking Utils</div>
      <q-separator class="q-my-md" />
      <div class="text-h6">
        origin checking - {{ objA == objB }}
      </div>
      <div class="text-h6">
        type checking utils - {{ deepEqual(objA, objB) }}
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { date, is } from 'quasar';

const FORMAT = 'YYYY-MM-DD HH:mm:ss';
const { formatDate, addToDate, subtractFromDate } = date;
const { deepEqual } = is;

const objA = { name: 'abc', age: 10 }
const objB = { name: 'abc', age: 10 }
</script>

<style lang="scss" scoped></style>
