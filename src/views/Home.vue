<template>
  <div class="home">
    <h2>Order Again</h2>
    <div class="box mb-10">
      <div style="position: relative">

        <v-img gradient="to bottom, transparent, rgba(220,0,50,.9)"
               src="https://i.pinimg.com/736x/67/0a/00/670a001d48c6f1b326890c9d1f43143f.jpg"
               style="border-radius: 5px"/>
        <div style="position: absolute; bottom: 12px; left: 12px; font-weight: bold; color: white">
          <v-btn class="mr-2 mb-1" color="white" fab x-small>
            <v-icon>mdi-repeat</v-icon>
          </v-btn>
          12/09/2020 - £300
        </div>
      </div>

      <div style="position: relative">
        <v-img gradient="to bottom, transparent, rgba(220,0,50,.9)"
               src="https://i.pinimg.com/736x/67/0a/00/670a001d48c6f1b326890c9d1f43143f.jpg"
               style="border-radius: 5px"/>
        <div style="position: absolute; bottom: 12px; left: 12px; font-weight: bold; color: white">
          <v-btn class="mr-2 mb-1" color="white" fab x-small>
            <v-icon>mdi-repeat</v-icon>
          </v-btn>
          12/09/2020 - £300
        </div>
      </div>

      <div style="position: relative">
        <v-img gradient="to bottom, transparent, rgba(220,0,50,.9)"
               src="https://i.pinimg.com/736x/67/0a/00/670a001d48c6f1b326890c9d1f43143f.jpg"
               style="border-radius: 5px"/>
        <div style="position: absolute; bottom: 12px; left: 12px; font-weight: bold; color: white">
          <v-btn class="mr-2 mb-1" color="white" fab x-small>
            <v-icon>mdi-repeat</v-icon>
          </v-btn>
          12/09/2020 - £300
        </div>
      </div>
    </div>
    <h2>New Order</h2>
    <div class="second-box pa-4 white rounded">
      <v-text-field placeholder="DD/MM/YYYY" label="Estimated Date" />
      <v-text-field class="mb-4" placeholder="" label="Estimated Cost" />

      <v-btn class="black--text" color="primary">Order</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style scoped>
.box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5em;
}

h2 {
  margin: 0.6em 0;
  color: #a9002a;
}

.second-box {

}
</style>
