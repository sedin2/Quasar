<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-12 col-sm-auto q-py-md flex flex-center">
        <q-avatar size="100px">
          <q-img src="/favicon.ico" />
        </q-avatar>
      </div>
      <div class="col-12 col-sm-grow column justify-between">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold">sedin_2</span>
          <q-space />
          <div class="q-gutter-x-sm">
            <q-btn outline color="secondary" label="프로필 편집" />
            <q-btn flat color="secondary" icon="more_horiz" />
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 0</span>
          <span>팔로워 53</span>
          <span>팔로우 76</span>
        </div>
        <div>
          <div>SEJIN</div>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="n in 15" :key="n">
          <article>
            <q-avatar size="70px">
              <q-img src="/favicon.ico" />
            </q-avatar>
            <div class="text-center q-mt-sm">제목</div>
          </article>
        </div>
      </div>
    </section>
    <section class="q-my-xl">
      <q-tabs
      class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="n in 16" :key="n">
          <q-card class="my-card">
            <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div
                class="absolute-bottom text-subtitle2 flex flex-center full-height"
              >
                Title
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('mails');
</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
