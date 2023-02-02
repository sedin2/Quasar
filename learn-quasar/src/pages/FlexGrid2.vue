<template>
  <q-page padding>
    <section class="bg-red row">
      <div class="bg-primary">
        <q-avatar size="150px">
          <q-img src="/favicon.ico" />
        </q-avatar>
      </div>
      <div class="bg-secondary">
        프로필 정보
        <div class="bg-red">
          <span>sedin_2</span>
          <q-btn label="프로필 편집" />
          <q-btn label="설정 버튼" />
        </div>
        <div class="bg-green">
          <span>게시물 0</span>
          <span>팔로워 53</span>
          <span>팔로우 76</span>
        </div>
        <div class="bg-blue">
          <div>SEJIN</div>
        </div>
      </div>
    </section>
    <section class="bg-yellow"></section>
    <section class="bg-green"></section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
