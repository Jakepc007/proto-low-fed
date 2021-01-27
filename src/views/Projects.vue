<template>

  <div>

    <div>
      <h2>Projects</h2>
    </div>

    <div v-if="projects.filter(p => p.approved === null).length > 0">
      <h3 class="mb-3">
        Awaiting approval
      </h3>

      <div class="projects-grid">
        <v-card v-for="project in projects.filter(p => p.approved === null)" :key="project.title" flat>
          <v-card-title>
            {{ project.title }}
          </v-card-title>
          <v-card-subtitle>
            Submitted {{ project.submitted }}
          </v-card-subtitle>
          <v-card-text>
            Budget: <b>£{{ project.budget }}</b>
            <br>
            Estimated Date: <b>{{ project.estDate }}</b>
          </v-card-text>
          <v-card-actions>
            <v-btn class="primary--text" text @click="approveProject(project)">
              Approve
            </v-btn>
            <v-btn class="secondary--text" text @click="declineProject(project)">
              Decline
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>

    <div v-if="projects.filter(p => p.approved === true).length > 0">
      <h3 class="mb-3 mt-6">
        Approved
      </h3>

      <div class="projects-grid">
        <v-card v-for="project in projects.filter(p => p.approved === true)" :key="project.title" flat>
          <v-card-title>
            {{ project.title }}
          </v-card-title>
          <v-card-subtitle>
            Submitted {{ project.submitted }}
          </v-card-subtitle>
          <v-card-text>
            Budget: <b>£{{ project.budget }}</b>
            <br>
            Estimated Date: <b>{{ project.estDate }}</b>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <div v-if="projects.filter(p => p.approved === false).length > 0">
      <h3 class="mb-3 mt-6">
        Declined
      </h3>

      <div class="projects-grid">
        <v-card v-for="project in projects.filter(p => p.approved === false)" :key="project.title" flat>
          <v-card-title>
            {{ project.title }}
          </v-card-title>
          <v-card-subtitle>
            Submitted {{ project.submitted }}
          </v-card-subtitle>
          <v-card-text>
            Budget: <b>£{{ project.budget }}</b>
            <br>
            Estimated Date: <b>{{ project.estDate }}</b>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <div v-if="declineModal">
      <v-dialog v-model="declineModal" max-width="400px">
        <v-card flat>
          <v-card-title>
            {{ declineModalProject.title }}
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="reason" label="Reason for declining"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn text class="primary--text" @click="submitDeclineReason">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data: () => ({
    projects: [
      {
        approved: null,
        title: 'Example project #1',
        budget: '40,000',
        estDate: '28/05/2022',
        submitted: '3 days ago'
      },
      {
        approved: null,
        title: 'Example project #2',
        budget: '50,000',
        estDate: '21/05/2022',
        submitted: '6 days ago'
      },
      {
        approved: false,
        title: 'Example project #14',
        budget: '500,000',
        estDate: '18/02/2021',
        submitted: '15 days ago'
      }
    ],
    declineModal: false,
    declineModalProject: null,
    reason: ''
  }),
  methods: {
    approveProject(project) {
      const ref = this.projects.find(p => p === project)
      ref.approved = true
    },
    declineProject(project) {
      this.declineModal = true
      this.declineModalProject = project
    },
    submitDeclineReason(reason) {
      const ref = this.projects.find(p => p === this.declineModalProject)
      ref.reasonForDecline = reason
      ref.approved = false
      this.declineModal = false
      this.reason = ''
    }
  }
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
}
</style>