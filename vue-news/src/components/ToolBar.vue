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
    background-color: #202020;
    display: flex;
    padding: 8px;
  }
  .header a {
    color: #fff;
    padding: 5px;
  }
</style>
