<template>
  <!--发现组件-->
  <div id="explore">
    <section>
      <div class="weui-cells">
        <router-link to="/explore/moments" class="weui-cell weui-cell_access" tag="div" @click.native="momentNewMsg=false">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-circle.png" >
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">
            朋友圈
          </div>
          <div class="weui-cell__ft">
            <div class="home__notice" v-show="momentNewMsg">
              <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" alt="" class="">
              <i class="new-msg-dot"></i>
            </div>
          </div>
        </router-link>
      </div>
      <div class="weui-cells" >
        <div class="weui-cell weui-cell_access" id="scanCell" @click.stop.prevent="$router.push({path:'./explore/saoyisao'})">
          <div class="weui-cell__hd">
           <img src="../../assets/images/find_icon-qrcode.png" >
          </div>
          <div class="weui-cell__bd">
            扫一扫
          </div>
        </div>
        <div class="weui-cell weui-cell_access" @click.stop.prevent="$router.push({path:'./explore/yaoyiyao'})">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-shake.png">
          </div>
          <div class="weui-cell__bd">
            摇一摇
          </div>
        </div>
      </div>

      <div class="weui-cells" >
        <div class="weui-cell weui-cell_access" @click.stop.prevent="go">
          <div class="weui-cell__hd">
           <img src="../../assets/images/find_icon-shake.png">
          </div>
          <div class="weui-cell__bd">
            附近的人
          </div>
        </div>

        <div class="weui-cell weui-cell_access" @click.stop.prevent="$router.push({path:'./explore/piaoliupin'})">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-qrcode.png">
          </div>
          <div class="weui-cell__bd">
            漂流瓶
          </div>
        </div>
      </div>

      <div class="weui-cells">
        <a href="http://wq.jd.com" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-shopping.png">
          </div>
          <div class="weui-cell__bd">
            购物
          </div>
        </a>
        <a  href="http://khd.koiyhh.com/" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-moregame.png">
          </div>
          <div class="weui-cell__bd">
            游戏
          </div>
        </a>
      </div>
    </section>
  </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                pageName: "发现",
                momentNewMsg: true    //表示朋友圈是否有未读消息
            }
        },
        activated() {
            this.$store.commit("toggleTipsStatus", -1)   //只有在wechat页面显示+;
        },
        methods:{
        go(){
       this.$router.push({path:'./fujinren'});
        }
        }
    }
</script>
<style>
    @import "../../assets/css/explore.css";
</style>