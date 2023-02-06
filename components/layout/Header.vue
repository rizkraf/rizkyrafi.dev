<script setup>
const navLink = ref([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]);
</script>

<template>
  <header class="max-w-4xl mx-auto py-6 px-6">
    <nav>
      <ul class="flex items-center space-x-5">
        <li v-for="nav in navLink">
          <nuxt-link :to="nav.path">{{ nav.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
