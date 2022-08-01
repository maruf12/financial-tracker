<template>
  <form>
    <div>
      <!-- <div class="w-full mb-3">
        <label for="name" class="text-base text-primary font-bold">Nama</label>
        <input id="name" v-model="name" type="text" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
      </div> -->
      <div class="w-full mb-3">
        <label for="email" class="text-base text-primary font-bold">Email</label>
        <input id="email" v-model="email" type="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
      </div>
      <div class="w-full mb-3">
        <label for="password" class="text-base text-primary font-bold">Password</label>
        <input id="password" v-model="password" type="password" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
      </div>
      <!-- <div class="w-full mb-3">
        <label for="message" class="text-base text-primary font-bold">Pesan</label>
        <textarea id="message" v-model="message" type="text" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
      </div> -->
      <div class="w-full mb-8">
        {{ name }}
        {{ email }}
        {{ message }}
        <button class="text-base font-semibold text-white bg-blue-400 py-3 px-8 rounded-lg w-full hover:opacity-80 hover:shadow-lg transition duration-500">Login</button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'FormInput',
  data() {
    return {
      name: null,
      email: null,
      message: null
    }
  }
}
</script>