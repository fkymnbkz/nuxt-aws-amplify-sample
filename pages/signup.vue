<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div class="content box">
          <h2>SignUp</h2>
          <div class="message is-danger" v-if="errors">
            <div class="message-body">
              {{ errors }}
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Email" v-model="email" @keyup.enter="signUp" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="password" class="input" placeholder="Passowrd" v-model="password" @keyup.enter="signUp" />
            </div>
          </div>
          <input type="button" class="button is-primary" value="SignUp" @click="signUp" />
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
    signUp () {
      Auth.signUp(this.email, this.password)
        .then(data => {
          this.$store.dispatch('amplify/setUsername', this.email)
          this.$router.push('/confirm')
        })
        .catch(err => this.errors = err)
    }
  }
}
</script>
