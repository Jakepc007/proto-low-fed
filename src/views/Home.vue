<template>
  <div>

    <h2>New Order</h2>
    <div class="second-box pa-6 mb-10 white rounded">
      <v-text-field clearable label="Title" placeholder="" v-model="title"/>
      <v-text-field clearable label="Estimated Date" placeholder="DD/MM/YYYY" v-model="date"/>
      <v-text-field class="mb-4" clearable label="Estimated Cost" placeholder="" prefix="£" type="number" v-model="price"/>

      <div class="order-grid">
        <v-btn class="black--text" color="primary" @click="orderItem(price, title)">Order</v-btn>
        <v-btn class="white--text" color="secondary" href="mailto:peritest@gmail.com">Contact Sales</v-btn>
      </div>

      <v-dialog
          v-model="dialog"
          max-width="290"
          persistent
      >
        <v-card>
          <v-card-title class="headline">
            Reorder this item
          </v-card-title>
          <v-card-text>
            This was purchased <b>12/09/2020</b> and cost <b>£300</b>
            <br/><br/>
            By confirming, you are agreeing to our <a href="http://www.google.com">terms and conditions</a>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
              Disagree
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="orderItem(300, 'example project')"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <h2>Order Again</h2>
    <div class="box mb-10">
      <div style="position: relative">

        <v-img gradient="to bottom, transparent, rgba(220,0,50,.9)"
               src="https://i.pinimg.com/736x/67/0a/00/670a001d48c6f1b326890c9d1f43143f.jpg"
               style="border-radius: 5px"/>
        <div style="position: absolute; bottom: 12px; left: 12px; font-weight: bold; color: white">
          <v-btn class="mr-2 mb-1 primary" color="white" fab x-small @click="dialog = true">
            <v-icon color="secondary">mdi-repeat</v-icon>
          </v-btn>
          12/09/2020 - £300
        </div>
      </div>

      <div style="position: relative">
        <v-img gradient="to bottom, transparent, rgba(220,0,50,.9)"
               src="https://i.pinimg.com/736x/67/0a/00/670a001d48c6f1b326890c9d1f43143f.jpg"
               style="border-radius: 5px"/>
        <div style="position: absolute; bottom: 12px; left: 12px; font-weight: bold; color: white">
          <v-btn class="mr-2 mb-1 primary" color="white" fab x-small @click="dialog = true">
            <v-icon color="secondary">mdi-repeat</v-icon>
          </v-btn>
          12/09/2020 - £300
        </div>
      </div>

      <div style="position: relative">
        <v-img gradient="to bottom, transparent, rgba(220,0,50,.9)"
               src="https://i.pinimg.com/736x/67/0a/00/670a001d48c6f1b326890c9d1f43143f.jpg"
               style="border-radius: 5px"/>
        <div style="position: absolute; bottom: 12px; left: 12px; font-weight: bold; color: white">
          <v-btn class="mr-2 mb-1 primary" color="white" fab x-small @click="dialog = true">
            <v-icon color="secondary">mdi-repeat</v-icon>
          </v-btn>
          12/09/2020 - £300
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

  data: () => ({
    dialog: false,
    title: '',
    date: '',
    price: ''
  }),

  methods: {
    orderItem(price, title) {
      this.$router.push({name: 'OrderConfirmation', params: {price, title}})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
