<template>
  <div class="donate">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          align="center"
        >
          <v-btn
            class="font-weight-bold cta my-16"
            href="https://eci.diaka.ua/eci-eng"
            x-large
            color="primary"
            elevation="0"
          >
            {{ $t('fastDonate') }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center">
            <v-divider
              class="d-inline-block"
              :style="{width: '50%'}"
            />
            <h2 class="ui-title mt-16 font-weight-bold">
              {{ $t('requisites') }}
            </h2>
            <p>
              {{ $t('requisitesDesc') }}
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :key="i"
          v-for="(item, i) in banks"
          cols="12"
          lg="6"
        >
          <TheDonateItem :data="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TheDonateItem from '@/components/donate/TheDonateItem.vue'

export default {
	components: {
		TheDonateItem
	},
	data() {
		return {
			banks: [
				{
					title: 'uah',
					icon: 'ua',
					bank: {
						org: 'ГО ЄВРОКАРПАТСЬКА ІНІЦІАТИВА',
						orgEDRPOY: '44367028',
						iban: 'UA573366770000026005052564352',
						bankName: 'АТ КБ "ПРИВАТБАНК"',
						bankEDRPOY: '14360570'
					}
				},
				{
					title: 'crypto',
					icon: ['btc', 'eth'],
					bank: {
						BTC: 'bc1qknuqhz4deyupgz7qmxl4vphgs8yp62dpqa8uz8',
						ETH: '0xcF9640e3d0779451AcaF1656B2C9B29a507306E6',
						BTCpay: true,
						ETHpay: true
					}
				},
				{
					title: 'usd',
					icon: 'us',
					bank: {
						companyName: 'NGO EUROCARPATHIAN INITIATIVE',
						iban: 'UA033366770000026002052575902',
						swift: 'PBANUA2XXXX',
						bankName: 'JSC CB "PRIVATBANK", 1D Hrushevskoho Str., Kyiv, 01001, Ukraine'
					},
					correspondentBanks: [
						{
							correspondentBank: 'JP Morgan Chase Bank, New York, USA',
							account: '001-1-000080',
							swift: 'CHASUS33'
						},
						{
							correspondentBank: 'The Bank of New York Mellon, New York, USA',
							account: '890-0085-754',
							swift: 'IRVTUS3N'
						}
					]
				},
				{
					title: 'eur',
					icon: 'eu',
					bank: {
						companyName: 'NGO EUROCARPATHIAN INITIATIVE',
						iban: 'UA953366770000026000052554914',
						swift: 'PBANUA2XXXX',
						bankName: 'JSC CB "PRIVATBANK", 1D Hrushevskoho Str., Kyiv, 01001, Ukraine'
					},
					correspondentBanks: [
						{
							correspondentBank: 'Commerzbank AG, Frankfurt am Main, Germany',
							account: '400886700401',
							swift: 'COBADEFF'
						},
						{
							correspondentBank: 'J.P.Morgan AG, Frankfurt am Main, Germany',
							account: '6231605145',
							swift: 'CHASDEFX'
						}
					]
				}
			]
		}
	}
}
</script>
<style lang="scss" scoped>
  .donate {
    margin-top: 130px;

    @media (max-width: 425px) {
      margin-top: 90px;
    }
  }

  .cta {
    box-shadow: 0 0 0 5px rgb(61 89 166 / 40%) !important;
    text-transform: uppercase;
  }
</style>
