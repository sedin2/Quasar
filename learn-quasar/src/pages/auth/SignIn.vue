<template>
  <!-- class="flex flex-center" -->
  <q-page>
    <div class="row window-height">
      <div class="col" :class="leftColStyle">
        <q-img height="100vh" src="/sunflower.jpg" />
      </div>
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '400px' }">
          <q-card-section>
            <div class="text-h6 text-weight-bold">로그인 하기</div>
            <div class="text-sub-tilte2 text-grey">
              방문 해 주셔서 감사합니다.
            </div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <div class="q-gutter-y-lg">
                <q-input
                  filled
                  label="이메일"
                  hint="example@email.com"
                ></q-input>
                <q-input
                  filled
                  type="password"
                  label="비밀번호"
                  hint="영문 대/소문자 포함 8자 이상"
                ></q-input>
              </div>
              <q-btn
                class="q-mt-lg full-width"
                unelevated
                color="primary"
                size="lg"
                label="로그인 하기"
              />
              <q-btn
                class="q-mt-md full-width"
                unelevated
                color="primary"
                size="lg"
                label="회원가입"
                to="/auth/sign-up"
              />
              <q-btn
                class="q-mt-sm full-width"
                unelevated
                color="primary"
                size="lg"
                label="홈으로"
                to="/"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const leftColStyle = computed(() => ({ hidden: $q.screen.lt.md }));
</script>
