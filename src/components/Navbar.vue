<script setup lang="ts">
import logo from "@/assets/logo.svg";

const navigation = [
  { name: 'Back office', href: '#', current: true },
  { name: 'Back office', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
  { name: 'Help', href: '#', current: false },
]
</script>

<template>
  <div class="fixed w-full text-gray-700 bg-white z-10">
    <div class="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div class="flex flex-row items-center justify-between p-4">
        <a href="#">
          <img :src="logo" alt="Logo" />
        </a>
      </div>
      <nav class="flex-col gap-4 flex-grow hidden ml-10  md:pb-0 md:flex md:flex-row">
        <template v-for="item in navigation" :key="item.name">
          <!-- add router-link here -->
            <button @click="navigate" :class="item.current ? 'text-indigo-900 border-b-4 border-indigo-900 rounded  p-3' : 'p-3' ">
              <div :class="item.current ? 'text-indigo-900 font-semibold ' : 'font-semibold' ">
                {{ item.name }}
              </div>
            </button>
        </template>
      </nav>
    </div>
  </div>
</template>
