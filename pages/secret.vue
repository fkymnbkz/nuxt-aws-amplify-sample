<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div class="content box">
          <h2>Secret</h2>
          <div class="message is-danger" v-if="errors">
            <div class="message-body">
              {{ errors }}
            </div>
          </div>
          <input type="button" class="button is-warning" value="SignOut" @click="signOut" />
          <ul>
            <li>
              <nuxt-link to="/">Top</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  middleware: 'amplify-auth',
  data() {
    return {
      errors: ''
    }
  },
  methods: {
    signOut () {
      Auth.signOut()
        .then(data => this.$router.push('/'))
        .catch(err => this.errors = err)
    }
  }
}
</script>
