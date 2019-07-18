<template>
  <div>
    <h1>News</h1>
    <ul>
      <li v-for="user in users">{{user}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    // new Promise() -> axios
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(response => this.users = response.data)
      .catch(error => console.log(error))
    // 화살표 함수 쓰지 않았을 경우
    // var vm = this 를 통해 바인딩을 시켜줘야한다.
  }
}
</script>

<style>

</style>
