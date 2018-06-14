<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div class="content box">
          <h2>ConfirmSignUp</h2>
          <div class="message is-danger" v-if="errors">
            <div class="message-body">
              {{ errors }}
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Email" v-model="email" @keyup.enter="signUpConfirm" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Verification code" v-model="code" @keyup.enter="signUpConfirm" />
            </div>
          </div>
          <input type="button" class="button is-success" value="Confirm" @click="signUpConfirm" />
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
      email: this.$store.getters['amplify/username'],
      code: '',
      errors: ''
    }
  },
  methods: {
    signUpConfirm () {
      Auth.confirmSignUp(this.email, this.code)
        .then(data => {
          this.$store.dispatch('amplify/clearUsername')
          this.$router.push('/signin')
        })
        .catch(err => this.errors = err)
    }
  }
}
</script>
