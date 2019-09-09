<template>
  <div>
    <img  class="headerimg" src="../../public/1-140425095333.jpg" alt="">
    <ul>
      <li v-for="(item,index) in myarr" :key="index" @click="itemclick(item)" class="myitem">
        <span class="mytitle">{{item.label}}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      myarr:[]
    }
  },
  created() {
    this.$http.get('/api/menu').then(res =>{
      this.myarr = res.data
    })
  },
  methods: {
    itemclick(item){
      if(item.type == 1) {
        this.$store.commit('stoken','')
        localStorage.removeItem('token')
        this.router.push('/login')
      }
    }
  },
}
</script>
<style lang="stylus" scoped>
  .headerimg{
    width :100%;
    height:150px;
    }
  .myitem{
    font-size:14px;
    text-align:left;
    height:50px;
    line-height:50px;
    padding-left:5%;
    border-bottom :1px solid #eee;
    .mytitle{
      display: inline-block;
      width:90%;
    }

    }
</style>