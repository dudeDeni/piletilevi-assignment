<script setup lang="ts">
import logo from "@/assets/logo.svg";
import arrow from "@/assets/arrow_down.svg";

const navigation = [
  { name: 'Back office', href: 'office1', current: true },
  { name: 'Back office', href: 'office2', current: false },
  { name: 'Reports', href: 'reports', current: false },
  { name: 'Help', href: 'help', current: false },
]

const options = [
  { key: 'EN', value: 'EN'},
  { key: 'EN', value: 'EN'},
  { key: 'EN', value: 'EN'},
]

const selectedOption = ref('EN')
const name = ref('Name Surname')
const organization = ref('Noorsooteater')
</script>

<template>
  <div class="navbar-shadow fixed w-full text-gray-700 bg-white z-20">
    <div class="flex flex-col h-[80px] px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div class="flex flex-row items-center p-4">
        <a href="#">
          <img :src="logo" alt="Logo" />
        </a>
      </div>
      <nav class="flex-col gap-10 flex-grow hidden ml-10  h-full md:pb-0 md:flex md:flex-row">
        <template v-for="item in navigation" :key="item.href">
          <!-- add router-link here -->
          <button class="relative flex-col text-lg font-semibold" @click="navigate">
            <div :class="item.current ? 'text-purple' : 'my-4' ">
              {{ item.name }}
            </div>
            <div class="absolute bottom-0 w-full">
              <hr :class="item.current ? 'block' : 'hidden' ">
            </div>
          </button>
        </template>
      </nav>

      <div class="flex gap-4">
        <div>
          <select id="language" class="w-10 text-gray-900 font-semibold " :value="selectedOption">
            <option class="text-gray-400" value="" disabled selected hidden>Applies to</option>
            <option v-for="(option, index) in options" :key="index"  :value="option.value">
              {{ option.key }}
            </option>
          </select>
        </div>

        <div class="font-normal">
          {{ name }}
        </div>

        <div class="flex items-center gap-2 text-gray-900 font-semibold border-l-2 border-text-gray-400 pl-4">
          {{ organization }}
          <div>
            <img :src="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-shadow {
  box-shadow: 0px 4px 20px 0px #D6DFE5;
}

</style>