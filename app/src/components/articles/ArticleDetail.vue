<template>
  <section v-if="article">

    <h2>{{article.title}}</h2>
    <p>
      By {{article.author}}
    </p>
    <p>
      Views:{{article.views}}
    </p>
    <p>
      Clickbait: {{article.isClickbait}}
    </p>
  </section>
</template>

<script>
import api from '../../services/api.js';

export default {
  data() {
    return {
      article: null
    };
  },
  created() {
    api.getArticle(this.$route.params.id)
      .then(article => {
        this.article = article;
      });
  }
};
</script>

<style scoped>

</style>
