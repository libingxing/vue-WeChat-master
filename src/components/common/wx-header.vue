<template>
  <!--复兴性高，数据交互比较频繁-->
  <div id="wx-header">
    <!--右上角图标-->
    <div class="other">

      <!--只在“微信”页显示 $route.path==='/'保证只有在微信页显示'+'-->
      <!--toggleTipsStatus点击实现显示与隐藏-->
      <span class="iconfont icon-tips-jia" v-show="$route.path==='/'" @click="$store.commit('toggleTipsStatus')"></span>

      <!--只在“通讯录”页显示 显示添加好友图标-->
      <router-link tag="span" to="/contact/add-friend" class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'"></router-link>

      <!--只在“添加朋友”页显示'添加好友文字' -->
      <span v-show="$route.path==='/contact/new-friends'">添加朋友</span>

      <!--只在进入对话页面显示  显示人头状图标字体-->
      <span class="iconfont icon-chat-friends" v-show="$route.path==='/wechat/dialogue'"></span>



      <!-- 更多图标的菜单 附带过渡效果  上述@click="$store.commit('toggleTipsStatus')"实现下面显示隐藏-->
      <!--下面@click="$store.commit('toggleTipsStatus', -1)"使用事件委托机制，点击每一个均隐藏-->

      <ul class="tips-menu" :class="[$store.state.tipsStatus?'tips-open':'tips-close']" @click="$store.commit('toggleTipsStatus', -1)">

        <li @click="$router.push({path:'./contact/group-list'})"> 
          <span class="iconfont icon-tips-xiaoxi"></span>
          <div >发起群聊</div>
        </li>

        <!--此处只对添加好友做了路由处理,实现路由跳转-->
        <router-link tag="li" to="/wehchat/add-friend"> 
          <span class="iconfont icon-tips-add-friend"></span>
          <div>添加朋友</div>
        </router-link>

        <li> <span class="iconfont icon-tips-saoyisao"></span>
          <div>扫一扫</div>
        </li>

        <li> <span class="iconfont icon-tips-fukuan"></span>
          <div>收付款</div>
        </li>

      </ul>
    </div>
    
    <div class="center">
      <!--显示当前页的名字-->
      <span>{{$store.state.currentPageName}}</span>
    </div>
  </div>
</template>
<script>
    export default {
        props: ["pageName"],
        data() {
            return {
                // 暂且用不到
                chatCount: true
            }
        }
    }
</script>
<!--此处没有引用封装好的css文件，由于在app.vue中统一引入了，相当于子组件已经享有对应的css-->
<style>
</style>