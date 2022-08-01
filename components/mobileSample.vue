<template>
  <div class="bg-gray-100 sm:bg-yellow-300">
    <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl">
      <img class="h-10" src="@/static/icon.png" alt="logo" />
      <img
        class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center"
        src="@/static/vacation.jpg"
        alt="Vacation"
      />
      <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl">
        You can work from anywhere.
        <span class="text-indigo-500"> Take advantage of it.</span>
      </h1>
      <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
        Workcation helps you fond work-friendly rentals in beautiful location so
        you can enjoy some nice weather even when you're not on vacation
      </p>
      <div class="mt-4 sm:mt-6">
        <a
          class="inline-block px-5 py-3 rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm bg-indigo-500 text-white sm:text-base"
          href="#"
        >
          Book your escape</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MobileSampleTailwind',
}
</script>
