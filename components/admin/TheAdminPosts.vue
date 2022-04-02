<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
          {{posts}}
        </v-row>
        <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        loading: false
      };
    },
    computed: {
      posts() {
        return this.$store.state.post.posts
      }
    },
    mounted() {
      this.getPosts()
    },
    methods: {
      async getPosts() {
        this.loading = true
        try {
          await this.$store.dispatch('post/getPosts')
        } catch (e) {
          console.error(e)
        }
        this.loading = false
      }
    },
  };
</script>
<style lang="scss" scoped>
  .mini-spacer {
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
  }

  .lang {
    margin-top: 50px;

    .d-flex {
      cursor: pointer;
      transition: .2s;

      &:hover {
        color: #3d5aa6;
      }
    }
  }
</style>
