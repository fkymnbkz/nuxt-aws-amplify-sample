<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div class="content box">
          <h2>SignIn</h2>
          <div class="message is-danger" v-if="errors">
            <div class="message-body">
              {{ errors }}
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Email" v-model="email" @keyup.enter="signIn" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="password" class="input" placeholder="Passowrd" v-model="password" @keyup.enter="signIn" />
            </div>
          </div>
          <input type="button" class="button is-link" value="SignIn" @click="signIn" />
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
  data () {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    signIn () {
      Auth.signIn(this.email, this.password)
        .then(data => this.$router.push('/secret'))
        .catch(err => this.errors = err)
    },
  }
}
</script>
