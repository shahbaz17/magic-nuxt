<template>
  <div>
    <form>
      <h3 class="form-header">Login</h3>
      <div class="input-wrapper">
        <input
          class="input-email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="btn-wrapper">
        <Button class="btn-submit"> Send Magic Link </Button>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style>
form,
label {
  display: flex;
  flex-flow: column;
  text-align: center;
}
.form-header {
  font-size: 22px;
  margin: 25px 0;
  font-weight: 500;
}
.input-wrapper {
  width: 80%;
  margin: 0 auto 20px;
}
.input-email {
  padding: 7px 16px;
  border-radius: 10px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 400;
}
.input-email:focus,
.input-email:hover {
  border: 1px solid #6851ff;
}
.btn-wrapper {
  margin: 0px auto 25px;
}
.btn-submit {
  padding: 6px 24px;
  border: 1px solid transparent;
  border-radius: 2147483647px;
  background-color: rgba(103, 81, 255, 1);
  color: #fff;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 400;
}
</style>
