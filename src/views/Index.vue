<template>
  <div id="index">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img class="banner" :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动分类 -->
    <cube-slide
      ref="slidelists"
      :auto-play="false"
      :data="lists"
      @change="changePage"
    >
      <cube-slide-item
        v-for="(list, index) in lists"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <ul class="listul">
          <li class="listli" v-for="(item, index1) in list" :key="index1">
            <a href="item.url">
              <img :src="item.image" alt="" />
              <p>{{ item.label }}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [],//轮播图数组
      lists: []//滚动分类数组
    }
  },
  created () {
    this.$http.get('/api/banner').then(res => {
      this.items = res.data;
    })
    this.$http.get('/api/rollinglist').then(res => {
      this.lists = res.data;
    })
  },
  methods: {
    changePage (current) {

    },
    clickHandler (item, index) {

    }
  },
}
</script>
<style lang="stylus" scoped>
.listul {
  display: flex;
  flex-wrap: wrap;

  .listli {
    width: 20%;
    justify-content: center;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      padding: 5px 0;
    }

    p {
      font-size: 14px;
      padding-bottom: 10px;
    }
  }
}
</style>