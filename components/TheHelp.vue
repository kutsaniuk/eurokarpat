<template>
  <div>
    <div class=" mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Form Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="12">
            <div class="text-center mt-2">
              <h2 class="ui-title font-weight-bold">Як ми допомагаємо?</h2>
            </div>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="7" lg="5" class="d-flex align-center">
            <div>
              <p>
                З першого дня повномасштабної війни росії проти України представники ГО «Єврокарпатська ініціатива» організовують та доставляють гуманітарні вантажі.
              </p>
              <p>
                Київ, Харків, Миколаїв - це лише частина міст, в які ми постійно направляємо допомогу.
              </p>
              <p>
                Завдяки активності прикарпатців та в рамках співпраці з іншими волонтерськими організаціями до зони бойових дій направлено десятки вантажів з харчами, ліками, медичними засобами та обладнанням, пічками для обігріву, кариматами та різноманітними засобами, які допомагають нашим захисникам протистояти ворогу.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="6" class="ml-auto">
            <v-img
              :src="require('@/assets/images/help.jpeg')"
              alt="banner"
            />
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Form Banner1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormBanner1",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
  p {
    font-size: 18px;
    color: rgba(62, 69, 85, 0.9);
    /*line-height: 1.6;*/
  }
</style>
