<template>
  <div class="w-full lg:w-2/5 lg:mx-auto m-5 p-5">
    <p>Welcome, Financial Tracker</p>
    <button @click="logout">Logout</button>
    <!-- <formInput /> -->
    <!-- <mobile-sample-tailwind /> -->
    <!-- <BaseButton label="ini button baru" /> -->
  </div>
</template>

<script>
// import FormInput from '@/components/formInput.vue'
// import MobileSampleTailwind from '@/components/mobileSample.vue'
export default {
  name: 'IndexPage',
  components: {
    // FormInput,
    // MobileSampleTailwind,
  },
  methods: {
    logout() {
      console.log('logout')
      this.$nuxt.$fire.auth.signOut()
    }
  }
}
</script>
