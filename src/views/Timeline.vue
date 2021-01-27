<template>
  <div>
    <h2>Order timeline for '{{ this.$route.params.title }}'</h2>
    <v-card flat style="max-width: 800px">
      <v-timeline align-top dense>
        <v-timeline-item v-for="(item, index) in items" :key="index" :icon="`mdi-${item.icon}`">
          <v-card-title style="margin-top: -1.2em">
            {{ item.event }}
          </v-card-title>
          <v-card-text>
            {{ item.date }}
          </v-card-text>
        </v-timeline-item>
        <v-timeline-item :key="-1">
          <v-card-title style="margin-top: -1.2em">
            {{ $route.params.stage }}
          </v-card-title>
          <v-card-text>
            13/01/2020
          </v-card-text>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </div>
</template>

<script>
export default {
  created() {
    if (typeof this.$route.params.title === 'undefined') {
      this.$router.push('/orders')
    }
  },

  data: () => ({
    items: [
      {
        event: 'Submitted',
        date: '08/01/2020',
        icon: 'star'
      },
      {
        event: 'Approved',
        date: '11/01/2020',
        icon: ''
      }]
  })
}
</script>