<template>
  <q-page class="q-pa-sm q-pa-md-xl">
    <section class="q-mb-xl">
      <div class="text-h4">BreakPoint</div>
      <q-separator class="q-my-md" />
      <div class="target"></div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.screen</div>
      <q-separator class="q-my-md" />
      <div>
        {{ $q.screen }}
      </div>
    </section>
  </q-page>
</template>
<script>
export default {
  mounted() {
    console.log('this.$q.screen: ', this.$q.screen);
  },
};
</script>
<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar();
console.log('$q.screen: ', $q.screen);
</script>
<style lang="scss" scoped>
.target {
  height: 200px;
  background-color: $dark;
}
@media (max-width: $breakpoint-xs-max) {
  .target {
    background-color: $red;
  }
}
.target {
  body.screen--sm & {
    background-color: $orange;
  }
}
</style>
