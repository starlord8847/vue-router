<template>
  <div>
    <p>유저를 검색해 주세요.</p>
    <input type="text" placeholder="유저 번호 입력" v-model="userId" />
    <button @click="$router.push({path: `users/${userId}`})">검색</button>
    <router-view></router-view>
  </div>  
</template>

<script>
  export default {
    data(){
      return {
        userId: null
      }
    }
    // computed: {
    //   userId(){
    //     return this.$route.params.userId
    //   }
    // },
    // created(){
    //   console.log("router", this.$router);
    //   console.log("route", this.$route);
    // }
  }
</script>

