<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex">
          <h2 class="d-flex align-center">
            {{ $t('posts') }}
            <v-progress-circular
              v-if="loading"
              :size="24"
              :width="4"
              color="primary"
              indeterminate
              class="ml-10"
            />
          </h2>
          <v-spacer />
          <v-btn
            to="/admin/posts/new"
            color="success"
            elevation="0"
          >
            <v-icon class="mr-4">
              mdi-plus
            </v-icon>
            {{ $t('create') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                md="4"
                offset-md="8"
              >
                <v-text-field
                  v-model="search"
                  outlined
                  dense
                  prepend-inner-icon="mdi-magnify"
                  :placeholder="$t('search')"
                  @keyup="getPosts"
                />
              </v-col>
            </v-row>
            <client-only>
              <v-data-table
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :no-data-text="$t('noPosts')"
                :loading-text="$t('loading')"
                :loading="loading"
                :headers="headers"
                :items="posts"
                hide-default-footer
              >
                <template #item.title="{ item }">
                  <n-link
                    class="py-5 d-block"
                    :to="'/admin/posts/edit/' + item.id"
                  >
                    {{ truncateHtml(item.title, 5, {
                      byWords: true }) }}
                  </n-link>
                </template>
                <template #item.description="{ item }">
                  <div class="py-5">
                    {{ truncateHtml(item.description, 10, { byWords: true, stripTags: true }) }}
                  </div>
                </template>
                <template #item.published="{ item }">
                  <v-chip
                    v-if="item.published"
                    small
                    color="accent"
                  >
                    <v-icon class="mr-3">
                      mdi-earth
                    </v-icon>
                    {{ $t('published') }}
                  </v-chip>
                  <v-chip
                    v-else
                    small
                  >
                    {{ $t('notPublished') }}
                  </v-chip>
                </template>
                <template #item.created="{ item }">
                  {{ getDate(item.created) }}
                </template>
                <template #item.actions="{ item }">
                  <v-btn
                    icon
                    small
                    :to="'/admin/posts/edit/' + item.id"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    small
                    @click="deletePost(item)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
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
import truncateHtml from 'truncate-html'

export default {
	data() {
		return {
			loading: true,
			sortBy: 'created',
			sortDesc: true,
			search: '',
			headers: [
				{
					text: this.$t('title'),
					align: 'start',
					value: 'title',
				},
				{text: this.$t('description'), value: 'description'},
				{text: this.$t('status'), value: 'published'},
				{text: this.$t('created'), value: 'created', width: 170},
				{text: this.$t('actions'), value: 'actions', width: 120, sortable: false, align: 'center'},
			]
		}
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
		truncateHtml,
		async getPosts() {
			this.loading = true
			try {
				await this.$store.dispatch('post/getPosts', {title: this.search})
			} catch (e) {
				this.$swal.fire({
					icon: 'error',
					title: this.$t('error')
				})
			}
			this.loading = false
		},
		async deletePost(post) {
			this.$swal.fire({
				html: `<h3>${this.$t('removeWarning')}</h3>`,
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: this.$t('remove'),
				cancelButtonText: this.$t('cancel'),
				confirmButtonColor: this.$vuetify.theme.themes.light.error,
				cancelButtonColor: ''
			}).then(async (result) => {
				if (result.isConfirmed) {
					try {
						await this.$store.dispatch('post/deletePost', post)
						this.getPosts()
					} catch (e) {
						this.$swal.fire({
							icon: 'error',
							title: this.$t('error')
						})
					}
				}
			})
		},
		getDate(date) {
			let locale = this.$i18n.locale === 'en' ? 'en-gb' : 'uk'

			this.$moment.locale(locale)
			const localeData = this.$moment.localeData()

			return this.$moment(date).format(localeData.longDateFormat('LL'))
		}
	},
}
</script>
<style lang="scss" scoped>
</style>
