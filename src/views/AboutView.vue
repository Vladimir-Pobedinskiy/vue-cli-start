<template>
  <div class="container">
    <template v-if="loading">
      <loading :loading="loading" />
    </template>
    <template v-else>
      <h2 class="title h2">{{ title }}</h2>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import loading from '@/components/App/AppLoading'
export default {
  components: { loading },
  name: 'AboutView',
  data() {
    return {
      title: 'About-page'
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  mounted() {
    this.startLoading()
    setTimeout(() => {
      this.endLoading()
    }, 1500)
  },
  methods: {
    ...mapActions({
      startLoading: 'startLoading',
      endLoading: 'endLoading'
    })
  }
}
</script>

<style lang="scss">
</style>
