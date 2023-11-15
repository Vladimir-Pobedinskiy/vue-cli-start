<template>

  <AppHeader />

  <main class="main offset">
    <router-view />
  </main>

  <AppFooter />

</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue'
import AppFooter from '@/components/App/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader, AppFooter
  }
}
</script>

<style lang="scss">
.title-line-clamp {
  width: 100%;
  max-width: 300px;
  color: $color-vue;
  @include line-clamp(3);
}
</style>
