<template>
    <div class="list">
        <ul v-if="singers">
            <li v-for="singer in singers" :key="singer.id">
            <RouterLink :to="`/singers/${singer.id}`">
                <p class="singer-name">{{singer.name}}</p> 
            </RouterLink>
                <p class="singer-genre">{{singer.genre}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    singers: Array
  }
};
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

ul {
    margin-top: 30px;
    padding: 0;
    font-family: 'PT Sans Narrow', sans-serif;
}

li {
    list-style-type: none;
    margin: 20px;
}

.list {
}

.singer-name {
    font-size: 1.1em;
    font-weight: 600;
    margin: 0;
}

.singer-genre {
    font-size: .8em;
    margin: 0;
}

</style>

