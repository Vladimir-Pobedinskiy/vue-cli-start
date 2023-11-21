<template>

  <AppHeader />

  <main class="main offset">
    <router-view />
  </main>

  <AppFooter />

  <div v-if="showIcons" class="img-wrapper visually-hidden">
    <img src="@/assets/icons/icon-error-404.svg" alt="">
    <img src="@/assets/icons/icon-vk.svg" alt="">
  </div>

</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue'
import AppFooter from '@/components/App/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader, AppFooter
  },
  data() {
    return {
      showIcons: false
    }
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
