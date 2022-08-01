<template>
  <div class="bg-gray-300">
    <div class="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
      <div
        class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
      >
        <div class="xl:max-w-xl">
          <img class="h-10" src="@/static/icon.png" alt="logo" />
          <img
            class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
            src="@/static/vacation.jpg"
            alt="Vacation"
          />
          <h1
            class="mt-6 text-2xl font-headline font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            You can work from anywhere.
            <br class="hidden lg:inline" />
            <span class="text-brand"> Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you fond work-friendly rentals in beautiful
            location so you can enjoy some nice weather even when you're not on
            vacation
          </p>
          <div class="mt-4 space-x-1 sm:mt-6">
            <a
              class="btn btn-primary shadow-lg hover:-translate-y-0.5 transition transform"
              href="#"
              >Book your escape</a
            >
            <a class="btn btn-secondary" href="#">Lear more</a>
          </div>
        </div>
      </div>
      <div class="hidden relative lg:block 2xl:col-span-3">
        <img
          class="absolute inset-0 w-full h-full object-cover object-center"
          src="@/static/vacation.jpg"
          alt="Vacation"
        />
      </div>
    </div>
    <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 class="text-xl text-gray-900">Popular destinations</h2>
      <p class="mt-2 text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div
        v-for="data in dataSample"
        :key="data.city"
        class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
      >
        <div
          class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
        >
          <img
            class="h-32 w-32 flex-shrink-0"
            src="@/static/vacation.jpg"
            :alt="data.imageAlt"
          />
          <div class="px-6 py-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ data.city }}</h3>

            <p class="text-gray-600">
              ${{ data.averagePrice }} / night average
            </p>
            <div class="mt-4">
              <a
                href="#"
                class="text-brand hover:text-brand-light font-semibold text-sm"
              >
                Explore {{ data.propertyCount }} properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dataSample from '@/components/dataSample'
export default {
  name: 'SampleTailwind',
  data() {
    return {
      dataSample,
    }
  },
}
</script>
<style scoped>
.btn {
  @apply inline-block px-5 py-3 rounded-lg uppercase tracking-wider font-semibold text-sm sm:text-base focus:outline-none focus:ring focus:ring-offset-2;
}
.btn-primary {
  @apply bg-brand text-white hover:bg-brand-light focus:ring-brand-dark focus:ring-opacity-50 active:bg-brand-dark;
}
.btn-secondary {
  @apply bg-gray-300 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-400;
}
</style>
