<template>
      <v-container>
        <v-row v-if="loading">
          <v-col cols="4" v-for="i in 9">
            <v-skeleton-loader
              :key="i"
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else justify="center">
          {{posts}}
        </v-row>
      </v-container>
</template>
<script>
  export default {
    data() {
      return {
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
