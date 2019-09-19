<template>
  <div class="post-part single container">
    <prismic-rich-text class="textslice" :field="slice.primary.videotitle" />
    <!-- <h2>{{ $prismic.richTextAsPlain(slice.primary.videotitle) }}</h2> -->
    <div v-for="item in slice.items" :key="'slice-' + item.id ">
      <prismic-embed class="textslice" :field="item.video" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "video-slice"
};
</script>

<style lang="sass">
.textslice
  a
    text-decoration: underline
</style>
