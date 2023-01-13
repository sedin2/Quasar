<template>
  <q-page class="q-pa-xl">
    <section>
      <p class="text-h1">Headline 1</p>
      <p class="text-h2">Headline 2</p>
      <p class="text-h3">Headline 3</p>
      <p class="text-h4">Headline 4</p>
      <p class="text-h5">Headline 5</p>
      <p class="text-h6">Headline 6</p>
      <p class="text-subtitle1">Subtitle 1</p>
      <p class="text-subtitle2">Subtitle 2</p>
      <p class="text-body1">
        Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </p>
      <p class="text-body2">
        Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
        possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
        soluta id accusantium voluptas beatae.
      </p>
      <p class="text-caption">Caption text</p>
      <p class="text-overline">Overline</p>
    </section>

    <q-separator class="q-my-md" />

    <section>
      <p class="text-h1">Font Weight</p>
      <p class="text-weight-thin">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-regular">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-bolder">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </section>

    <q-separator class="q-my-md" />

    <section>
      <p class="text-h1">CSS Helper class</p>
      <p class="text-weight-thin text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-regular text-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-bolder text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-bolder text-strike">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </section>
    <section>
      <div v-if="$q.platform.is.ios">Gets rendered only on iOS platform.</div>
      <div v-if="$q.platform.is.android">
        Gets rendered only on Android platform.
      </div>
      <div v-if="$q.platform.is.chrome">
        Gets rendered only on Chrome platform.
      </div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped></style>
