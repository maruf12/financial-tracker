<template>
  <form class="w-full lg:w-2/5 lg:mx-auto m-5 p-5" @submit.prevent="onSubmit">
    <div>
      <div class="w-full mb-3">
        <label for="email" class="text-base text-primary font-bold">Email</label>
        <input id="email" v-model="auth.email" type="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
      </div>
      <div class="w-full mb-3">
        <label for="password" class="text-base text-primary font-bold">Password</label>
        <input id="password" v-model="auth.password" type="password" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
      </div>
      <div class="w-full mb-8">
        <button>Login</button>
        <!-- <button class="text-base font-semibold text-white bg-blue-400 py-3 px-8 rounded-lg w-full hover:opacity-80 hover:shadow-lg transition duration-500" @click="login">Login</button> -->
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'LoginPage',
  middleware: 'auth',
  data() {
    return {
      auth: {
        email: null,
        password: null
      }
    }
  },
  mounted() {
    this.testing()
  },
  methods: {
    testing() {
      // console.log(this.$fire.auth.currentUser)
      // this.$store.getter.getUser
      // console.log(this.$store.getters.getUser)
      // this.$nuxt.$options.router.push('/')
      this.$router.push('/')
    },
    onSubmit() {
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .then((user) => {
        console.log('lolos')
        this.$nuxt.$router.push('/')
        // this.$router.push('/')
        this.$nuxt.$options.router.push('/')
        // $nuxt.$router.push('/')
      }).catch((err) => {
        console.log(err)
      });
    }
  }
}
</script>