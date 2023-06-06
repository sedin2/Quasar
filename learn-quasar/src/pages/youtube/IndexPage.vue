<template>
  <q-page padding>
    <div class="row q-col-gutter-x-md q-col-gutter-y-xl">
      <div v-for="n in 16" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <article>
          <q-img
            :ratio="16 / 9"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <div class="row q-col-gutter-x-sm q-mt-md">
            <div class="col-auto">
              <q-avatar size="md">
                <q-img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
            </div>
            <div class="col">
              <div
                class="text-subtitle1 text-weight-bold"
                :style="{ lineHeight: '1.1em' }"
              >
                퀘이사 강의
              </div>
              <div class="text-caption text-grey-9 q-mt-xs">세진 sedin</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>
