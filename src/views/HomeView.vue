<template>
  <div class="container">
    <h2 class="title h2">{{ title }}</h2>
    <p class="title title-line-clamp p1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum voluptatibus ex eius maxime quidem illum fugiat totam. Beatae vitae, illum eum excepturi quaerat amet illo voluptates eveniet. Ullam, harum iure!</p>
    <p class="mb">Тест Блок:</p>
    <input class="mb" v-model="inputValue" type="text" style="border: 1px solid #000;">
    <button class="btn mb" @click="changeData">Изменить Store</button>
    <p class="mb color">Данные из data(inputValue): {{ inputValue === null ? 'null' : inputValue }}</p>
    <p class="mb color">Данные из Store: {{ getData }}</p>
    <br />
    <p class="h3 mb">Sprite Svg:</p>
    <div class="vk-wrapper">
      <svg class="vk-icon" width="40px" height="40px">
        <use xlink:href="#icon-vk"></use>
      </svg>
    </div>
    <p class="h3 mb">Изображение Img:</p>
    <div class="img-wrapper">
      <img src="/img/index/index-showcase-img-1.png" alt="image">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      inputValue: null,
      title: 'Home-page'
    }
  },
  computed: {
    ...mapGetters({
      getData: 'data'
    })
  },
  methods: {
    ...mapActions({
      changeDataStore: 'changeData'
    }),
    changeData() {
      this.changeDataStore(this.inputValue)
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

.mb {
  margin-bottom: 12px;
}

.img-wrapper {
  width: 100px;
  height: 100px;
}
.img-wrapper img {
  object-fit: contain;
}
.vk-wrapper {
  width: fit-content;
  transition: color 0.2s ease;

  @media (min-width:$desktop) {
    &:hover {
      color: $color-vk;
      cursor: pointer;
      transition: color 0.3s ease;
    }
  }
}
</style>
