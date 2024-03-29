/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return '/'
  }

  if (doc.type === 'blog_home') {
    return '/blog/'
  }

  if (doc.type === 'post') {
    return '/blog/my-blog/' + doc.uid
  }

  return '/'
}
