<template>
  <transition name="fade" mode="out-in" appear>
    <div key="1" v-if="loggedIn">
      <h2>Order Again</h2>
      <div class="box mb-10">
        <div style="position: relative">

          <v-img gradient="to bottom, transparent, rgba(220,0,50,.9)"
                 src="https://i.pinimg.com/736x/67/0a/00/670a001d48c6f1b326890c9d1f43143f.jpg"
                 style="border-radius: 5px"/>
          <div style="position: absolute; bottom: 12px; left: 12px; font-weight: bold; color: white">
            <v-btn @click="dialog = true" class="mr-2 mb-1" color="white" fab x-small>
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
            <v-btn @click="dialog = true" class="mr-2 mb-1" color="white" fab x-small>
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
            <v-btn @click="dialog = true" class="mr-2 mb-1" color="white" fab x-small>
              <v-icon>mdi-repeat</v-icon>
            </v-btn>
            12/09/2020 - £300
          </div>
        </div>
      </div>
      <h2>New Order</h2>
      <div class="second-box pa-6 white rounded">
        <v-text-field placeholder="DD/MM/YYYY" clearable label="Estimated Date"/>
        <v-text-field class="mb-4" placeholder="" clearable prefix="£" type="number" label="Estimated Cost"/>

        <v-btn class="black--text" color="primary">Order</v-btn>
        <v-btn class="white--text ml-4" color="secondary">Contact Sales</v-btn>

        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
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
                  @click="dialog = false"
              >
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div key="2" v-else>
      <transition name="fade" mode="out-in">
        <div key="login" v-if="mode==='login'">
          <h2>Log in
          </h2>
          <v-card style="max-width: 800px" flat class="pa-6">
            <v-text-field type="email" label="Email"/>
            <v-text-field label="Password" class="mb-4"/>
            <div class="d-flex" style="flex-wrap: wrap">
              <v-btn @click="logIn" class="primary black--text mr-2">Log In</v-btn>
              <div style="padding-top: 0.4em">
                No account?
                <span class="secondary--text" @click="mode = 'signup'"
                      style="font-weight: bold; cursor: pointer; white-space: nowrap;">
                  Sign Up
                </span>
              </div>
            </div>
          </v-card>
        </div>
        <div key="logout" v-else>
          <h2>Sign up</h2>
          <v-card style="max-width: 800px" flat class="pa-6">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5em">
              <v-text-field label="First name"/>
              <v-text-field label="Surname"/>
            </div>
            <v-text-field label="Email" type="email" />
            <v-text-field label="Password" class="mb-4" loading/>
            <div class="d-flex" style="flex-wrap: wrap">
              <v-btn @click="logIn" class="primary black--text mr-2">Sign Up</v-btn>
              <div style="padding-top: 0.4em">
                Got an account?
                <span class="secondary--text" @click="mode = 'login'"
                      style="font-weight: bold; cursor: pointer; white-space: nowrap;">
                  Log in
                </span>
              </div>
            </div>
          </v-card>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src

import {mapState} from "vuex";

export default {
  name: 'Home',

  data() {
    return {
      dialog: false,
      mode: 'login'
    }
  },

  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn
    })
  },

  methods: {
    logIn() {
      this.$store.commit("logIn")
    }
  }
}
</script>

<style scoped lang="scss">

.fade {
  &-enter {
    opacity: 0;
    transform: translateX(-20px);
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.4s;
  }

  &-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }
}

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
