<template>
  <div class="donate">
    <v-container>
      <v-row>
        <v-col v-for="item in banks" cols="12" md="6">
          <TheDonateItem :data="item"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    components: {
      TheDonateItem: () => import("@/components/donate/TheDonateItem.vue")
    },
    data() {
      return {
        banks: [
          {
            title: 'UNITED STATES DOLLAR',
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
            title: 'EURO',
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
  };
</script>
<style lang="scss" scoped>
  .donate {
    margin-top: 130px;

    @media (max-width: 425px) {
      margin-top: 70px;
    }
  }
</style>
