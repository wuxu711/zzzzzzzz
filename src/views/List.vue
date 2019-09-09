<template>
  <div class="panelsbox">
    <cube-scroll class="leftpanels">
      <ul>
        <li
          v-for="(list, index) in tabslabel"
          @click="selectlist(index)"
          :class="list.active ? 'active' : ''"
          :key="index"
        >
          {{ list.label }}
        </li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
          <img :src="tag.image" alt="" />
          <p>
            {{ tag.label
            }}<i class="cubeic-add" @click="addtoCar($event, tag)"></i>
          </p>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-warp">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ball:{
        show:false,
        el:''
      },
      tags: [],
      tabslabel: [
        {
          label: '热门推荐',
          active: true
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '手机电器',
          active: false
        },
        {
          label: '手机空调',
          active: false
        },
        {
          label: '电脑产品',
          active: false
        },
        {
          label: '汽车生活',
          active: false
        },
        {
          label: '美妆',
          active: false
        },
        {
          label: '口红',
          active: false
        },
        {
          label: '手袋',
          active: false
        },
        {
          label: '金银财宝',
          active: false
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '手机数码',
          active: false
        },
      ]
    }
  },
  methods: {
    selectlist (index) {
      this.tabslabel.forEach((e, i) => {
        if (i == index) {
          e.active = true;
        } else {
          e.active = false;
        }
      });
      this.getclassify(index);
    },
    //获取分类的方法
    getclassify (index) {
      this.$http.get('/api/classify', { params: { type: index } }).then(res => {
        console.log(res.data);
        this.tags = res.data;
      })
    },
    //添加商品到购物车
    addtoCar (e, tag) {
      this.$store.commit('tocar', tag)
      this.ball.show = true
      this.ball.el = e.target
    },
    beforeEnter(el) {
      const dom = this.ball.el
      const rect = dom.getBoundingClientRect() //获取点击dom的位置
      console.log(rect)
      const x=  rect.left - window.innerWidth*0.7
      const y=  -(window.innerHeight-rect.top)
      console.log(x)
      console.log(y)
      console.log()
      el.style.display='block'
      el.style.transform = `translate3d(0,${y}px,0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(${x}px,0,0)`
    },
    enter(el,done){
      document.body.offsetHeight
      el.style.transform = `translate3d(0,0,0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(0,0,0)`
      el.addEventListener('transitionend',done)
    },
    afterEnter(el){
      this.ball.show = false
      el.style.display = 'none'
    }
  },
  created () {
    this.getclassify(0);
  },
  mounted () {
    const leftpanels = document.querySelector('.leftpanels')
    const rightpanels = document.querySelector('.rightpanels')
    const bodyheight = document.documentElement.clientHeight;
    leftpanels.style.height = bodyheight - 57 + 'px';
    rightpanels.style.height = bodyheight - 57 + 'px';
    console.log(leftpanels.style.height);
  },
}
</script>
<style lang="stylus" scoped>
.panelsbox {
  display: flex;

  .leftpanels {
    width: 30%;

    li {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #fff;
      color: #333;
      background-color: #f8f8f8;
      font-size: 20px;
    }

    .active {
      background-color: #fff;
      color: #e93b3d;
    }
  }

  .rightpanels {
    width: 70%;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        justify-content: center;
        align-items: center;
        font-size: 15px;

        img {
          width: 80px;
          height: 310px;
        }

        i {
          font-size: 22px;
        }
      }
    }
  }
}

.ball-warp {
  .ball {
    position:fixed;
    left: 70%;
    bottom: 10px;
    z-index: 1005;
    color: red;
    transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);

    .inner {
      width: 16px;
      height: 16px;
      transition: all 1s linear;
    }
  }
}
</style>