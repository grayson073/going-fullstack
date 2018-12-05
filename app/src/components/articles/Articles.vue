<template>
  <section class="articles">
    <h2>Articles</h2>

    <AddArticle :onAdd="handleAdd"/>

    <ul v-if="articles">
      <li v-for="article in articles" :key="article.id">
        {{article.title}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api.js';
import AddArticle from './AddArticle';


export default {
  data() {
    return {
      articles: null,
      error: null
    };
  },
  components: {
    AddArticle
  },
  created() {
    api.getArticles()
      .then(articles => {
        this.articles = articles;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(article) {
      return api.addArticle(article)
        .then(saved => {
          this.articles.push(saved);
        });
    }
  }
};
</script>

<style scoped>

</style>
