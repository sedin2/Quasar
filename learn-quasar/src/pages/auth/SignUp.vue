<template>
  <q-page class="flex flex-center">
    <q-card flat :style="{ minWidth: '400px' }">
      <q-card-section>
        <div class="text-h6 text-weight-bold">회원 가입</div>
        <div class="text-sub-tilte2 text-grey">감사합니다.</div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <div class="q-gutter-y-lg">
            <q-input filled label="이메일" hint="example@email.com"></q-input>
            <q-input
              filled
              type="password"
              label="비밀번호"
              hint="영문 대/소문자 포함 8자 이상"
            ></q-input>
            <q-input
              filled
              type="password"
              label="비밀번호 확인"
              hint=""
            ></q-input>
          </div>
          <q-btn
            class="q-mt-lg full-width"
            unelevated
            color="primary"
            size="lg"
            label="가입 하기"
          />
          <q-btn
            class="q-mt-md full-width"
            unelevated
            color="primary"
            size="lg"
            label="로그인 하기"
            to="/auth/sign-in"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup></script>
