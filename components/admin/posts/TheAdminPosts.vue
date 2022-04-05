<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex">
          <h2 class="d-flex align-center">{{$t('posts')}}
            <v-progress-circular
              :size="24"
              v-if="loading"
              :width="4"
              color="primary"
              indeterminate
              class="ml-10"
            ></v-progress-circular>
          </h2>
          <v-spacer></v-spacer>
          <v-btn
            to="/admin/posts/new"
            color="success"
            elevation="0"
          >
            <v-icon class="mr-4">mdi-plus</v-icon>
            {{$t('create')}}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <client-only>
              <v-data-table
                :no-data-text="$t('noPosts')"
                :loading="loading"
                :headers="headers"
                :items="posts"
                hide-default-footer
              >
                <template v-slot:item.title="{ item }">
                  <n-link :to="'/admin/posts/edit/' + item.id">{{item.title}}</n-link>
                </template>
                <template v-slot:item.description="{ item }">
                  <div v-html="item.description"></div>
                </template>
                <template v-slot:item.published="{ item }">
                  <v-checkbox
                    v-model="item.published"
                    readonly
                  ></v-checkbox>
                </template>
              </v-data-table>
            </client-only>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        loading: true,
        headers: [
          {
            text: this.$t('title'),
            align: 'start',
            value: 'title',
          },
          {text: this.$t('description'), value: 'description'},
          {text: this.$t('published'), value: 'published'},
          {text: this.$t('created'), value: 'created'},
          {text: this.$t('actions'), value: 'action'},
        ]
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
</style>
