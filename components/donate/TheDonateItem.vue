<template>
  <div
    v-if="data"
    class="fill-height"
  >
    <v-card
      class="fill-height"
      min-height="400px"
    >
      <v-card-title class=" justify-space-between">
        <span class="font-18 primary--text">{{ $t(data.title) }}</span>
        <div v-if="Array.isArray(data.icon)">
          <img
            v-for="icon in data.icon"
            :key="icon"
            width="32"
            class="ml-5"
            :src="require('@/assets/images/lang/' + icon + '.svg')"
          >
        </div>
        <div v-else>
          <img
            width="32"
            :src="require('@/assets/images/lang/' + data.icon + '.svg')"
          >
        </div>
      </v-card-title>
      <v-card-text>
        <v-list class="pt-0">
          <v-list-item-group>
            <v-list-item
              v-for="(value, key) of data.bank"
              v-if="typeof value === 'string'"
              :id="key + value + data.title"
              :key="key"
              :two-line="value.length < 50"
              :three-line="value.length > 50"
              @click="copy(value, key)"
            >
              <v-list-item-content>
                <v-list-item-title>{{ $t(key) }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ value }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text class="primary--text">
                  {{ $t('copied') }}
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-list-group v-if="data.correspondentBanks">
              <template #activator>
                <v-list-item-title>{{ $t('correspondentBanks') }}</v-list-item-title>
              </template>
              <template v-for="(bank, index) in data.correspondentBanks">
                <v-list-item
                  v-for="(value, key) of bank"
                  :id="key + value + data.title"
                  :key="key + index"
                  :two-line="value.length < 50"
                  :three-line="value.length > 50"
                  @click="copy(value, key)"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ $t(key) }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ value }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text class="primary--text">
                      {{ $t('copied') }}
                    </v-list-item-action-text>
                  </v-list-item-action>
                </v-list-item>
                <v-divider v-if="index < data.correspondentBanks.length - 1" />
              </template>
            </v-list-group>
          </v-list-item-group>
        </v-list>
        <div
          v-if="data.title === 'crypto'"
          class="btn-crypto"
        >
          <v-btn
            v-if="data.bank.BTCpay"
            nuxt
            target="_blank"
            href="https://link.trustwallet.com/send?asset=c0&address=bc1qknuqhz4deyupgz7qmxl4vphgs8yp62dpqa8uz8"
            color="default"
            class="mb-10 d-flex justify-space-between align-center"
            block
            elevation="0"
          >
            <img
              width="22"
              :src="require('@/assets/images/lang/btc.svg')"
            >
            {{ $t('BTCpay') }}
            <img
              width="100"
              :src="require('@/assets/images/lang/trust_wallet.svg')"
            >
          </v-btn>
          <v-btn
            v-if="data.bank.ETHpay"
            nuxt
            target="_blank"
            href="https://link.trustwallet.com/send?address=0xcF9640e3d0779451AcaF1656B2C9B29a507306E6&asset=c60"
            color="default"
            class="d-flex justify-space-between align-center"
            block
            elevation="0"
          >
            <img
              width="22"
              :src="require('@/assets/images/lang/eth.svg')"
            >
            {{ $t('ETHpay') }}
            <img
              width="100"
              :src="require('@/assets/images/lang/trust_wallet.svg')"
            >
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
    <input
      id="input_copy"
      type="text"
      readonly
    >
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
				document.getElementById(key + value + this.data.title).classList.remove('v-item--active')
			}, 2000)
		}
	}
}
</script>

<style lang="scss">
  #input_copy {
    opacity: 0;
  }

  .v-card {
    position: relative;
  }

  .btn-crypto {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 20px;
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
