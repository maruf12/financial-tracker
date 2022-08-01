<template>
  <div>
    <button
      class="btn btn-primary shadow-lg hover:-translate-y-0.5 transition transform"
    >
      {{ label }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: null,
    },
  },
}
</script>
<style>
.btn {
  @apply inline-block px-5 py-3 rounded-lg tracking-wider font-semibold text-sm sm:text-base focus:outline-none focus:ring focus:ring-offset-2;
}
.btn-primary {
  @apply bg-brand text-white hover:bg-brand-light focus:ring-brand-dark focus:ring-opacity-50 active:bg-brand-dark;
}
.btn-secondary {
  @apply bg-gray-300 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-400;
}
</style>
