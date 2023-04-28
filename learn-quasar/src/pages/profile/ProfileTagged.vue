<template>
    <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="n in 16" :key="n">
            <q-card class="my-card">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">

                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>