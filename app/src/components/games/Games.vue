/<template>
  <section>
    <AddGame :onAdd="handleAdd"/>
    <GamesList
    :games="games"
    :onAdd="handleAdd"/>
  </section>
</template>

<script>
import gamesApi from '../../services/api';
import AddGame from './AddGame';
import GamesList from './GamesList';

export default {
  data() {
    return {
      games: null,
      error: null
    };
  },
  components: {
    AddGame,
    GamesList
  },
  created() {
    gamesApi.getGames()
      .then(games => {
        this.games = games;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(game) {
      gamesApi.addGame(game)
        .then(saved => {
          this.games.push(saved);
        });
    }
  }
};
</script>

<style>

</style>
