/<template>
  <p>Games Component</p>
</template>

<script>
import gamesApi from '../../services/api';

export default {
  data() {
    return {
      games: null
    };
  },

  created() {
    gamesApi.getGames()
      .then(games => {
        this.games = games;
      });
  }
};
</script>

<style>

</style>
