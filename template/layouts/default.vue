<template lang="pug">
div
  b-navbar(toggleable="md", type="dark", variant="info")
    b-navbar-toggle(target="nav_collapse")
    b-navbar-brand(href="/") Sample
    b-collapse(is-nav, id="nav_collapse")
      b-navbar-nav
        b-nav-item(href="/") Home
      b-navbar-nav.ml-auto
        b-nav-item-dropdown(right, v-if="$store.state.user.isSignedIn")
          template(slot="button-content")
            i.fa.fa-user
          b-dropdown-item(href="/my") Profile
          b-dropdown-item(@click="logout") Signout
        b-nav-item(v-else, href="/login") Go to login
  nuxt
</template>

<script lang="ts" src="./default.ts"></script>

<style>
</style>
