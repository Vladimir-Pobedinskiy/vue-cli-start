<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__top">
          <ul class="nav-list">
            <li v-for="(item, i) in navLinks" :key="i" class="nav-item">
              <router-link class="nav-link" :to="`${item.url}`">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__bottom">
          <p class="footer__title">© {{ currentYear }} Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppFooter',
  computed: {
    ...mapGetters({
      navLinks: 'navLinks'
    }),
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
  padding: 20px 0;
  background-color: $color-vue;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__top {
    margin-bottom: 16px;
  }

  &__title {
    font-size: 16px;
  }
}
</style>
