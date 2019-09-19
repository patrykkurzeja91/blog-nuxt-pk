<template>
  <section class="home">
    <article>
      <h1 class="blog-title">{{ $prismic.richTextAsPlain(contentFR.data.title) }}</h1>
      <!-- Template for page description -->
      <p class="blog-description">{{ $prismic.richTextAsPlain(contentFR.data.subtitle) }}</p>
    </article>
    <section-explore :exploreTitle="exploreTitle" :exploreSubtitle="exploreSubtitle" />
  </section>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
// Importing blog posts widget
import SectionExplore from "~/components/SectionExplore";
export default {
  name: "Home",
  components: {
    SectionExplore
  },
  head() {
    return {
      title: "Nuxt.js"
    };
  },
  async asyncData({ context, error, req }) {
    // Query to get API object
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

    const langFR = await api.query(
      Prismic.Predicates.at("document.type", "homepage"),
      { lang: "fr-fr" }
    );
    let contentFR = langFR.results[0];
    let { explore_title, explore_subtitle } = contentFR.data;
    // Load the edit button
    if (process.client) window.prismic.setupEditButton();

    // Returns data to be used in template
    return {
        contentFR,
      exploreTitle: explore_title,
      exploreSubtitle: explore_subtitle
    };
  }
};
</script>

<style lang="sass" scoped>
.home
  max-width: 700px
  margin: auto
  text-align: center
  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 1em auto
  .blog-description
    font-size: 18px
    color: #9A9A9A
    line-height: 30px
    margin-bottom: 3rem
    padding-bottom: 3rem
    font-family: 'Lato', sans-serif
    border-bottom: 1px solid #DADADA

.blog-main
  max-width: 700px
  margin: auto
  text-align: left
  &.single img
    width: 100%
    height: auto
  &.single a
    text-decoration: none
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background-repeat: repeat-x
    background-size: 2px 2px
    background-position: 0 23px

.blog-post
  margin: 0
  margin-bottom: 3rem

@media (max-width: 767px)
  .home
    padding: 0 20px
  .blog-main
    padding: 0
    font-size: 18px
</style>
