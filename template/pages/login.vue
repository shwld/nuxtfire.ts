<template lang="pug">
section.container
  b-card(title="Login")
    button.btn.btn-success.btn-block(@click="login") Login or Sign up
</template>

<script lang="ts" src="./login.ts"></script>

<style scoped>
.container {
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>