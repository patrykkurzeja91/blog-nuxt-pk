<template>
  <div :data-wio-id= documentId>
    <div class="outer-container">
      <div class="back">
        <nuxt-link to="/blog">back to list</nuxt-link>
      </div>
      <!-- Button to edit document in dashboard -->
      <prismic-edit-button :documentId="documentId"/>
      <!-- Template for page title -->
      <h1 class="blog-title">{{ $prismic.richTextAsPlain(document.title) }}</h1>
      <!-- Template for published date -->
      <p class="blog-post-meta"><span class="created-at">{{ formattedDate }}</span></p>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices"/>
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
//Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'post',
  components: {
    SlicesBlock
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Blog'
    }
  },
  async asyncData({ params, error, req }) {
    try{
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get post content
      const post = await api.getByUID("post", params.uid)

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      // Returns data to be used in template
      return {
        document: post.data,
        documentId: post.id,
        slices: post.data.body,
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(post.data.date)),
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

}
</script>
