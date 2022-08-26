<template>
  <div>
    <div v-for="photo in getAlbum" :key="photo.id">
      <b-carousel fade indicators >
        <b-carousel-slide class="img"
        :img-src="photo.url"
        img-alt="photo"
        >
        </b-carousel-slide>
        <b-carousel-slide class="img"
            :img-src="photo.thumbnailUrl"
            img-alt="photo"
        >
        </b-carousel-slide>
        <b-carousel-slide class="img"
            :img-src="photo.url"
            img-alt="photo"
        >
        </b-carousel-slide>
        <b-carousel-slide class="img"
            :img-src="photo.thumbnailUrl"
            img-alt="photo"
        >
        </b-carousel-slide>
        <b-carousel-slide class="img"
            :img-src="photo.url"
            img-alt="photo"
        >
        </b-carousel-slide>
      </b-carousel>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CarouselContainer",
  computed:mapGetters(['getAlbum']),
  methods: mapActions(['fetchAlbum']),
  mounted() {
    this.fetchAlbum()
  }

}
</script>

<style scoped lang="scss">

.img{
  margin-top: 1rem;
}

</style>