<template>
  <header class="header">
    <div class="container">
      <ul class="nav-list">
        <li v-for="(item, i) in navLinks" :key="i" class="nav-item">
          <router-link class="nav-link" :to="`${item.url}`">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters({
      navLinks: 'navLinks'
    })
  }
}
</script>

<style lang="scss">
.header {
  padding: 20px 0;
  background-color: $color-vue;
}
.nav-list {
  display: flex;
  align-items: center;
}

.nav-item {
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}

.nav-link {

  @media (min-width:$desktop) {
    cursor: pointer;
  }
}

.router-link-active.router-link-exact-active.nav-link {
  border-bottom: 2px solid $color-black;
}

</style>
