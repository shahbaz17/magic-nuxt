<template>
  <div class="container">
    <div class="label">Email</div>
    <div class="profile-info">{{ $auth.user.email }}</div>

    <div class="label">Issuer</div>
    <div class="profile-info">{{ $auth.user.issuer }}</div>

    <div class="label">Public Address</div>
    <div class="profile-info">{{ $auth.user.publicAddress }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    // A quick solution on reloading the profile page to have the updated Header component.
    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded')
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1')
      location.reload()
    }
  },
  middleware: 'auth',
}
</script>

<style>
.label {
  font-size: 12px;
  color: #6851ff;
  margin: 30px 0 5px;
}
.profile-info {
  font-size: 17px;
  word-wrap: break-word;
}
</style>
