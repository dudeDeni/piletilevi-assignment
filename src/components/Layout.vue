<template>
  <div>
    <header>
      <!-- Header content goes here -->
    </header>

    <Navbar />

    <main class="mx-48 pt-20">
      <slot></slot>
    </main>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
/* Add styling for the layout components here */
</style>