<template>
  <div>
    <h2>Confirm Order</h2>
    <v-alert
        border="left"
        colored-border
        type="warning">
      Orders made cannot always be cancelled, carefully review the information below and click confirm when you're
      happy.
    </v-alert>

    <v-card class="pa-4" flat>
      <h3>Title</h3>
      {{ $route.params.title }}

      <h3 class="mt-3">Price</h3>
      £{{ $route.params.price }}
    </v-card>

    <div class="order-grid mt-4">
      <v-btn class="black--text" color="primary">Accept</v-btn>
      <v-btn class="white--text" color="secondary">Cancel</v-btn>
    </div>
  </div>
</template>

<style>
.order-grid {
  display: grid;
  gap: 1.5em;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
</style>

<script>
export default {
  created() {
    if (typeof this.$route.params.title === 'undefined' || this.$route.params.title === "") {
      this.$router.push('/')
    }
  },
}
</script>