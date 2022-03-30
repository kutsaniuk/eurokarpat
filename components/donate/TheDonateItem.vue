<template>
  <div v-if="data">
    <v-card>
      <v-card-title class=" justify-space-between">
        <span class="font-18 primary--text">{{data.title}}</span>
        <img width="32" :src="require('@/assets/images/lang/' + data.icon + '.svg')" />
      </v-card-title>
      <v-card-text>
        <v-list class="pt-0">
          <v-list-item-group>
            <v-list-item :two-line="value.length < 50"
                         :three-line="value.length > 50"
                         :key="key"
                         :id="key + value"
                         @click="copy(value, key)"
                         v-for="(value, key) of data.bank">
              <v-list-item-content>
                <v-list-item-title>{{$t(key)}}</v-list-item-title>
                <v-list-item-subtitle>
                  {{value}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text class="primary--text">
                  Copied!
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-list-group>
              <template v-slot:activator>
                <v-list-item-title>{{$t('correspondentBanks')}}</v-list-item-title>
              </template>
              <template v-for="(bank, index) in data.correspondentBanks">
                <v-list-item :two-line="value.length < 50"
                             :three-line="value.length > 50"
                             :key="key + index"
                             :id="key + value"
                             @click="copy(value, key)"
                             v-for="(value, key) of bank">
                  <v-list-item-content>
                    <v-list-item-title>{{$t(key)}}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{value}}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text class="primary--text">
                      Copied!
                    </v-list-item-action-text>
                  </v-list-item-action>
                </v-list-item>
                <v-divider v-if="index < data.correspondentBanks.length - 1"></v-divider>
              </template>
            </v-list-group>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
    <input id="input_copy" type="text">
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => null
      }
    },
    methods: {
      copy(value, key) {
        const copyText = document.getElementById('input_copy')
        copyText.value = value
        copyText.select()
        copyText.setSelectionRange(0, 99999) /* For mobile devices */
        document.execCommand('copy')
        setTimeout(() => {
          document.getElementById(key + value).classList.remove('v-item--active')
        }, 2000)
      }
    }
  }
</script>

<style lang="scss">
  #input_copy {
    opacity: 0;
  }

  .v-list-item__action {
    transition: .3s;
    opacity: 0;
  }

  .v-item--active {
    .v-list-item__action {
      opacity: 1;
    }
  }
</style>
