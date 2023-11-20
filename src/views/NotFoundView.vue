<template>
  <div class="container">
    <h2 class="title h2">{{ title }}</h2>

    <router-link class="btn" :to="{ name: 'HomeView' }">На главную</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
  data() {
    return {
      title: 'Page Not Found'
    }
  }
}
</script>

<style lang="scss">
</style>
