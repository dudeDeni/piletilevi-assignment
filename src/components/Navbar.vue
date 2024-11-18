<script setup lang="ts">
import logo from "@/assets/logo.svg";

const navigation = [
  { name: 'Back office', href: 'office1', current: true },
  { name: 'Back office', href: 'office2', current: false },
  { name: 'Reports', href: 'reports', current: false },
  { name: 'Help', href: 'help', current: false },
]
</script>

<template>
  <div class="navbar-shadow fixed w-full text-gray-700 bg-white z-10">
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
    </div>
  </div>
</template>

<style scoped>
.navbar-shadow {
  box-shadow: 0px 4px 20px 0px #D6DFE5;
}

</style>