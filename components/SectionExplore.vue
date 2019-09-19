<template>
  <div class="explore">
      <span>adsasdsa</span>
      <h2>{{ $prismic.richTextAsPlain(exploreTitle) }}</h2>
      <h2>{{ $prismic.richTextAsPlain(exploreSubtitle) }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    exploreTitle: {
      type: Array
    },
    exploreSubtitle: {
      type: Array
    }
  },
  name: "SectionExplore"
};
</script>

<style lang="sass" scoped>
.explore
  padding: 40px 0
  max-width: 700px
  margin: 0 auto
  text-align: center
  border-top: 1px solid #DADADA

.logo
  width: 100px
</style>
