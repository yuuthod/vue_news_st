<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
  .header {
    color: #fff;
    background-color: #1b1d1c;
    display: flex;
    padding: 15px 20px;
  }
  .header a {
    color: #fff;
    padding-right: 20px;
  }
  .header .router-link-exact-active {
    color: #ff0000;
  }
</style>
