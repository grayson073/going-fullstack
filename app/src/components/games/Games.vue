/<template>
  <section>
    <p>Games Component</p>
    <GamesList :games="games"/>
  </section>
</template>

<script>
import gamesApi from '../../services/api';
import GamesList from './GamesList';

export default {
  data() {
    return {
      games: null
    };
  },
  components: {
    GamesList
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
