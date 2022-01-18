<template>
  <component :is="layout + '-layout'" v-if="layout"></component>
<!--  <main-layout></main-layout>-->
<!--  <auth-layout></auth-layout>-->
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";

export default {
  setup() {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {AuthLayout, MainLayout}
}
</script>
