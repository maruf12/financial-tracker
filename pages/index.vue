<template>
  <div>
    <h1>Welcome to financial tracker</h1>
    <p>{{ baseUrlType }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      baseUrlType: process.env.baseUrl
    }
  }
}
</script>
