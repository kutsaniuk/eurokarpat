<template>
  <client-only>
    <tiptap-vuetify
      class="editor"
      :card-props="{ flat: true, outlined: true }"
      :extensions="extensions"
      :value="value"
      @input="input"
      :placeholder="placeholder"
    />
    <template #placeholder>
      <v-progress-circular
        :size="24"
        :width="4"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </template>
  </client-only>
</template>

<script>
  import {
    TiptapVuetify,
    Heading,
    Bold,
    Italic,
    Strike,
    Underline,
    Image,
    BulletList,
    OrderedList,
    ListItem,
    Link,
    Blockquote,
    HardBreak,
    History
  } from 'tiptap-vuetify'

  export default {
    components: {
      TiptapVuetify
    },
    props: {
      value: {
        type: String,
        required: true,
        default: () => ''
      },
      placeholder: {
        type: String,
        required: false,
        default: () => ''
      },
    },
    data() {
      return {
        extensions: [
          Bold,
          Underline,
          Italic,
          Strike,
          Blockquote,
          Link,
          ListItem,
          BulletList,
          OrderedList,
          [
            Heading,
            {
              options: {
                levels: [1, 2, 3]
              }
            }
          ],
          HardBreak,
          History,
        ],
      };
    },
    methods: {
      input(e) {
        this.touched = true
        this.$emit('input', e)
      }
    }
  }
</script>

<style lang="scss">
  .editor {
    .v-card {
      overflow: hidden;
    }
  }
</style>
