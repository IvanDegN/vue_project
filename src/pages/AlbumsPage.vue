<template>
  <div>
    <div>
      <div  class="container mr-auto">
        <div class="d-flex flex-row justify-content-between">
          <div class="block"><CarouselContainer /></div>
          <div class="block"><CarouselContainer /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselContainer from "@/components/СarouselContainer";

export default {
  name: "AlbumsPage",
  components: {CarouselContainer},
}
</script>

<style scoped lang="scss">
.container{
  gap: 1rem;

  .block{
    flex-grow: 1;
    gap: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: calc((100% / 3) - (2rem / 3));
    &:nth-child(3){
      margin-left: 0;
    }
  }

}
</style>