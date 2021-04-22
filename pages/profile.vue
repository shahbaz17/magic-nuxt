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
