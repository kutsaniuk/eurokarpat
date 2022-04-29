<template>
  <div>
    <div class="c2a1-spacer primary">
      <v-container>
        <div class="d-block d-md-flex align-center">
          <h2 class="c2a-title white--text font-weight-medium">
            {{ $t('donateTitle') }}
          </h2>
          <div class="ml-auto mt-5 mt-md-0">
            <v-btn
              nuxt
              large
              to="/requisites"
              class="btn-custom-md text-uppercase"
              outlined
              color="white"
              elevation="0"
              block
            >
              {{ $t('donate') }}
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

