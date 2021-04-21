<template>
  <div>
    <form @submit.prevent="userLogin">
      <h3 class="form-header">Login</h3>
      <div class="input-wrapper">
        <input
          v-model="email"
          class="input-email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="btn-wrapper">
        <button type="submit" class="btn-submit">Send Magic Link</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Magic } from 'magic-sdk'

export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    async userLogin() {
      try {
        const m = new Magic(process.env.NUXT_ENV_MAGIC_PUBLISHABLE_KEY)
        // let token = await m.auth.loginWithMagicLink({ email: this.email })
        await m.auth.loginWithMagicLink({ email: this.email })
        let token = await m.user.getIdToken(60 * 60 * 24 * 7) // 7 days, equal to the Magic login
        // console.log(token)
        if (token) {
          await this.$auth.loginWith('local', {
            data: { token: token },
          })

          this.$router.push('/profile')
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style>
form,
label {
  display: flex;
  flex-flow: column;
  text-align: center;
}
.form-header {
  font-size: 22px;
  margin: 25px 0;
  font-weight: 500;
}
.input-wrapper {
  width: 80%;
  margin: 0 auto 20px;
}
.input-email {
  padding: 7px 16px;
  border-radius: 10px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 400;
}
.input-email:focus,
.input-email:hover {
  border: 1px solid #6851ff;
}
.btn-wrapper {
  margin: 0px auto 25px;
}
.btn-submit {
  padding: 6px 24px;
  border: 1px solid transparent;
  border-radius: 2147483647px;
  background-color: rgba(103, 81, 255, 1);
  color: #fff;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 400;
}
</style>
