<template>
  <v-app>
    <v-app-bar
        class="white"
        height="100"
    >
      <v-toolbar-title>
        PERI SYSTEMS
      </v-toolbar-title>
    </v-app-bar>
    <div v-if="loggedIn" class="secondary-nav">
      <v-tabs color="secondary" grow icons-and-text>
        <v-tab v-if="role === 'customer'" to="/">
          Home
          <v-icon style="margin-top: 0.3em">
            mdi-home-outline
          </v-icon>
        </v-tab>
        <v-tab v-if="role === 'customer'" to="/orders">
          Orders
          <v-icon style="margin-top: 0.3em">
            mdi-form-select
          </v-icon>
        </v-tab>
        <v-tab v-if="role === 'admin'" to="/manage-users">
          Users
          <v-icon style="margin-top: 0.3em">
            mdi-account-multiple-outline
          </v-icon>
        </v-tab>
        <v-tab v-if="role === 'employee'" to="/projects">
          Projects
          <v-icon style="margin-top: 0.3em">
            mdi-clipboard-multiple-outline
          </v-icon>
        </v-tab>
      </v-tabs>
    </div>
    <div class="grey lighten-4" style="height: 100%">
      <v-container class="mb-12" style="max-width: 900px">
        <router-view v-if="loggedIn" class="px-4"/>
        <div v-else>
          <div v-if="mode==='login'" key="login" class="mx-4">
            <h2>
              Log in
            </h2>
            <div>
              <p>

                For the prototype, you can use these emails to login (password for all is '123'):
              </p>
              <p>
                Customer:
                <i>
                  customer@test.com
                </i>
              </p>

              <p>
                Employee:
                <i>
                  emp@test.com
                </i>
              </p>

              <p>
                Admin:
                <i>
                  admin@test.com
                </i>
              </p>
            </div>
            <div
                v-if="message !== ''"
                border="left"
                colored-border
                type="warning">
              {{ message }}
            </div>
            <v-card class="pa-6" flat>
              <v-text-field v-model="email" :rules="[input => input.includes('@') ? true : 'Email must be valid']"
                            label="Email" type="email"/>
              <v-text-field v-model="password" class="mb-4" label="Password"/>
              <div class="d-flex" style="flex-wrap: wrap">
                <v-btn :disabled="!(email !== '' && password !== '')" class="primary black--text mr-2"
                       @click="logIn">Log In
                </v-btn>
                <div style="padding-top: 0.4em">
                  No account?
                  <span class="secondary--text" style="font-weight: bold; cursor: pointer; white-space: nowrap;"
                        @click="mode = 'signup'">
                        Sign Up
                      </span>
                </div>
              </div>
            </v-card>
          </div>
          <div v-else key="logout" class="mx-4">
            <h2>Sign up</h2>
            <v-card class="pa-6" flat style="max-width: 800px">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5em">
                <v-text-field label="First name"/>
                <v-text-field label="Surname"/>
              </div>
              <v-text-field v-model="email" :rules="[input => input.includes('@') ? true : 'Email must be valid']"
                            label="Email" type="email"/>
              <v-text-field
                  v-model="password"
                  :rules="[input => input.length > 7 ? true : 'Password must be at least 8 characters long']"
                  class="mb-4"
                  label="Password"/>
              <div class="d-flex" style="flex-wrap: wrap">
                <v-btn :disabled="!(email !== '' && password !== '')" class="primary black--text mr-2"
                       @click="signUp">Sign Up
                </v-btn>
                <div style="padding-top: 0.4em">
                  Got an account?
                  <span class="secondary--text" style="font-weight: bold; cursor: pointer; white-space: nowrap;"
                        @click="mode = 'login'">
                  Log in
                </span>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import {mapState} from "vuex";

export default {
  data: () => ({
    drawer: false,
    group: null,
    dialog: false,
    mode: 'login',
    email: '',
    password: '',
    message: '',
    // Customer, employee, admin
    role: '',
    accounts: []
  }),

  created() {
    if (this.role !== 'customer') {
      switch (this.role) {
        case 'employee':
          this.$router.push('/projects')
          break;
        case 'admin':
          this.$router.push('/manage-users')
          break
      }
    }
  },

  methods: {
    logOut() {
      this.$store.commit("logOut")
      this.drawer = false
    },
    logIn() {
      switch (this.email) {
        case 'customer@test.com':
          this.role = 'customer'
          this.$store.commit("logIn")
          break

        case 'emp@test.com':
          this.role = 'employee'
          this.$store.commit("logIn")
          break

        case 'admin@test.com':
          this.role = 'admin'
          this.$store.commit("logIn")
          break

        default:
          if (this.accounts.includes({email: this.email, password: this.password})) {
            this.role = 'customer'
            this.$store.commit("logIn")
          } else {
            this.message = 'Account does not exist'
          }
          break
      }

      if (this.role !== 'customer') {
        switch (this.role) {
          case 'employee':
            this.$router.push('/projects')
            break;
          case 'admin':
            this.$router.push('/manage-users')
            break
        }
      }
    },
    signUp() {
      this.accounts.push({
        email: this.email,
        password: this.password,
      })
      this.role = 'customer'
      this.$store.commit("logIn")
    }
  },

  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn
    })
  }
}
</script>

<style lang="scss">


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
    transform: translateX(20px);
  }
}
</style>

