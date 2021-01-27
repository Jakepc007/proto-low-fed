<template>
  <div>
    <div v-if="dispatchedOrders.length > 0">
      <h2>
        Dispatched
      </h2>
      <div class="mb-3 orders-grid">
        <div v-for="order in dispatchedOrders" :key="order.id">
          <v-card class="order pa-4" flat>
            <div class="order-header">
              <div class="order-title"> {{ order.title }}</div>
              <div class="order-date secondary--text"> {{ order.cost }}</div>
            </div>
            <v-divider class="my-2"/>
            <div class="order-main">
              <div>
                <div>
                  {{ order.date }}
                </div>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs"
                         v-on="on">
                      Stage : <strong class="secondary--text">{{ findStageTitle(order) }}</strong>
                    </div>
                  </template>
                  <template v-slot:default >
                    <div style="max-width: 250px">{{ findStageDescription(order) }}</div>
                  </template>
                </v-tooltip>


              </div>
              <div style="display: flex; align-items: center; justify-content: flex-end">
                <v-menu offset-y v-if="order.stage !== 2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" class="mr-2 mb-1" color="white" depressed fab
                           x-small>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                        class="secondary"
                        style="font-weight: bold"
                        @click="cancelOrder(order)"
                    >
                      <v-list-item-title style="color: white !important;">
                        <v-icon class="mr-1" color="white">mdi-cancel</v-icon>
                        Cancel
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        style="font-weight: bold"
                        @click="viewTimeline(order)"
                    >
                      <v-list-item-title>
                        <v-icon class="mr-1">mdi-timeline</v-icon>
                        View timeline
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-btn v-else  color="primary" fab small @click="approveOrder(order)" :elevation="0">
                  <v-icon color="secondary">mdi-check</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>


    <div v-if="activeOrders.length > 0">
      <h2>
        Active orders
      </h2>
      <div class="mb-3 orders-grid">
        <div v-for="order in activeOrders" :key="order.id">
          <v-card class="order pa-4" flat>
            <div class="order-header">
              <div class="order-title"> {{ order.title }}</div>
              <div class="order-date secondary--text"> {{ order.cost }}</div>
            </div>
            <v-divider class="my-2"/>
            <div class="order-main">
              <div>
                <div>
                  {{ order.date }}
                </div>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs"
                         v-on="on">
                      Stage : <strong class="secondary--text">{{ findStageTitle(order) }}</strong>
                    </div>
                  </template>
                  <template v-slot:default >
                    <div style="max-width: 250px">{{ findStageDescription(order) }}</div>
                  </template>
                </v-tooltip>


              </div>
              <div style="display: flex; align-items: center; justify-content: flex-end">
                <v-menu offset-y v-if="order.stage !== 2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" class="mr-2 mb-1" color="white" depressed fab
                           x-small>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                        class="secondary"
                        style="font-weight: bold"
                        @click="cancelOrder(order)"
                    >
                      <v-list-item-title style="color: white !important;">
                        <v-icon class="mr-1" color="white">mdi-cancel</v-icon>
                        Cancel
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        style="font-weight: bold"
                        @click="viewTimeline(order)"
                    >
                      <v-list-item-title>
                        <v-icon class="mr-1">mdi-timeline</v-icon>
                        View timeline
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-btn v-else  color="primary" fab small @click="approveOrder(order)" :elevation="0">
                  <v-icon color="secondary">mdi-check</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>
        Active orders
      </h2>
      <v-card class="mb-3 order pa-4" flat style="max-width: 500px">You currently have no active orders,
        <router-link to="/">Make one</router-link>
      </v-card>
    </div>

    <div v-if="inactiveOrders.length > 0">
      <h2>
        Inactive orders
      </h2>
      <div class="mb-3 orders-grid">
        <div v-for="order in activeOrders" :key="order.id">
          <v-card class="order pa-4" flat>
            <div class="order-header">
              <div class="order-title"> {{ order.title }}</div>
              <div class="order-date secondary--text"> {{ order.cost }}</div>
            </div>
            <v-divider class="my-2"/>
            <div class="order-main">
              <div>
                <div>
                  {{ order.date }}
                </div>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs"
                         v-on="on">
                      Stage : <strong class="secondary--text">{{ findStageTitle(order) }}</strong>
                    </div>
                  </template>
                  <template v-slot:default >
                    <div style="max-width: 250px">{{ findStageDescription(order) }}</div>
                  </template>
                </v-tooltip>


              </div>
              <div style="display: flex; align-items: center; justify-content: flex-end">
                <v-menu offset-y v-if="order.stage !== 2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" class="mr-2 mb-1" color="white" depressed fab
                           x-small>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                        class="secondary"
                        style="font-weight: bold"
                        @click="cancelOrder(order)"
                    >
                      <v-list-item-title style="color: white !important;">
                        <v-icon class="mr-1" color="white">mdi-cancel</v-icon>
                        Cancel
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        style="font-weight: bold"
                        @click="viewTimeline(order)"
                    >
                      <v-list-item-title>
                        <v-icon class="mr-1">mdi-timeline</v-icon>
                        View timeline
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-btn v-else  color="primary" fab small @click="approveOrder(order)" :elevation="0">
                  <v-icon color="secondary">mdi-check</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data: () => ({

    stages: [
      {
        id: -2,
        title: 'Disapproved',
        description: 'The order has been disapproved'
      },
      {
        id: -1,
        title: 'Cancelled',
        description: 'You cancelled this order'
      },
      {
        id: 0,
        title: 'Processing',
        description: 'The order has been successfully submitted, and we\'ll notify you through email as soon as it\'s approved'
      },
      {
        id: 1,
        title: 'In design',
        description: 'The order has been approved and is currently being designed'
      },
      {
        id: 2,
        title: 'Awaiting your approval',
        description: 'Your product has been designed and price, approve it to start construction'
      },
      {
        id: 3,
        title: 'Dispatched',
        description: 'Your product is being dispatched'
      }
    ],

    orders: [
      {
        id: 0,
        title: 'Simple scaffolding project',
        date: '03/04/2021',
        cost: '£3,000',
        stage: 0
      },
      {
        id: 1,
        title: 'Complex scaffolding project',
        date: '06/04/2021',
        cost: '£12,000',
        stage: 1
      },
      {
        id: 2,
        title: 'Super difficult scaffolding project',
        date: '03/11/2021',
        cost: '£17,000',
        stage: 2
      }
    ],
  }),

  computed: {
    activeOrders() {
      return this.orders.filter(order => order.stage >= 0 && order.stage <= 2)
    },
    inactiveOrders() {
      return this.orders.filter(order => order.stage < 0)
    },
    dispatchedOrders() {
      return this.orders.filter(order => order.stage === 3)
    }
  },

  methods: {
    findStageTitle(order) {
      return this.stages.find(stage => stage.id === order.stage).title
    },

    findStageDescription(order) {
      return this.stages.find(stage => stage.id === order.stage).description
    },

    cancelOrder(order) {
      this.orders.find(o => o === order).stage = -1
    },

    viewTimeline(order) {
      this.$router.push({name: 'Timeline', params: {title: order.title, stage: this.findStageTitle(order)}})
    },

    approveOrder(order) {
      console.log("hiya", order)
      const ref = this.orders.find(o => o === order)
      ref.stage = 3
    }
  }
}
</script>

<style>
.orders-grid {
  display: grid;
  gap: 1.5em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.order-title {
  font-weight: bold;
}

.order-header {
  display: flex;
  justify-content: space-between;
}

.order-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>