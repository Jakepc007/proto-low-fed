<template>
  <div>
    <h2> Manage Users </h2>
    <v-data-table
        :headers="headers"
        :items="users"
        class="elevation-0"
        sort-by="calories"
    >
      <template v-slot:top>
        <v-toolbar
            flat
        >
          <v-toolbar-title>PERI Employees</v-toolbar-title>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
              v-model="dialog"
              max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="mb-2"
                  color="primary"
                  dark
              >
                Create New User
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>

                    <div>
                      <v-text-field
                          v-model="editedItem.name"
                          label="Employee name"
                      />
                    </div>
                    <div>
                      <v-select
                          :items="['employee', 'admin']"
                          v-model="editedItem.role"
                          label="Role"
                      />
                    </div>
                  <div>
                    <v-select
                        :items="['design', 'engineering']"
                        v-model="editedItem.job"
                        label="Job"
                    />
                  </div>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
            class="mr-2"
            small
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
            color="primary"
            @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {text: 'Role', value: 'role'},
      {text: 'Job', value: 'job'},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      role: ''
    },
    defaultItem: {
      name: '',
      role: ''
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Create new user' : 'Edit user'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.users = [
        {
          name: 'Jeff Smith',
          role: 'employee',
          job: 'design'
        },
        {
          name: 'Mark Jon3s',
          role: 'employee',
          job: 'design'
        },
      ]
    },

    editItem(item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>