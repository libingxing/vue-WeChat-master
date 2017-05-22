<template>
<!--可复用的相册组件 这里只完成静态页面 不涉及数据-->
    <div class="album">
        <header id="wx-header" style="background-color:gray">
            <div class="center" @click="change($event)">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
              <button class="button1" id="button1">精选表情</button>
              <button class="button2" id="button2">更多表情</button>
              <img src="../../assets/images/me_more-setting.png" @click="setting">
            </div>
        </header>
        <search style="margin-top:45px;"></search>

        <section class="album-box clearfix" >
           <div class="home-pic" >
               <div class="home-pic-base">
                <div class="top-pic">
                    <div class="top-pic-inner">
                        <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" style="width:414px;height:200px;">
                    </div>
                </div>              
               </div>
           </div>
           <!--精选表情-->
           <ul class="lang" id="lang" @click="download($event)"  v-if="this.fold">
                    <li style="height:45px;">推荐表情</li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li style="height:45px;">更多精选</li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li> 
                </ul>

                <!--更多表情-->
                <ul class="moreExpression" v-else>
                    <li><span style="float:left;">热门排行</span><span @click="goNew">新品推荐></span></li>
                    <li v-for="item in $store.state.msgList.baseMsg" v-if="item.group_name==''">
                      <img :src="item.msg[0].headerUrl" style="height:55px;width:55px;display:block;margin:10px 0 0 20px;border:1px solid gray;">
                      <span>{{item.msg[0].name}}</span>
                    </li>  
                </ul>   
        </section>
    </div>
</template>
<script>
import search from '../../components/common/search';
    export default {
       data(){
           return{
               fold:true
           }
       },
       components:{
           search:search
       },
       methods:{
            download(e){
                if(e.target.tagName.toLowerCase()=="span"){
                    e.target.innerHTML="已下载";
                }
            },
            change(e){
              if(e.target.className=='button1'){
                    document.getElementById('button1').style.backgroundColor='white';
                    document.getElementById('button1').style.color='gray';
                    document.getElementById('button2').style.backgroundColor='gray';
                    document.getElementById('button2').style.color='white';
                    this.fold=true;
              }
              if(e.target.className=='button2'){
                    document.getElementById('button2').style.backgroundColor='white';
                    document.getElementById('button2').style.color='gray';
                    document.getElementById('button1').style.backgroundColor='gray';
                    document.getElementById('button1').style.color='white';
                    this.fold=false;
              }
            },
            goNew(){
               this.$router.push('./album/newProduct');
            },
            setting(){
               this.$router.push('./album/expression');
            }
        }
    }
</script>
<style>
 .center button{
    width:80px;
    height:30px;
    border:1px solid white;
 }
 .center .button2{
     background-color:gray;
     color:white;
 }
 .center .button1{
     background-color:white;
     color:gray;
 }
 .center img{
    height:23px;
    width:23px;
    float:right;
    margin-top:10px;
 }
.lang li{
    width:100%;
    height:50px;
    line-height:50px;
    text-align:left;
    text-indent:1em;
    border-bottom:1px solid gray;
    font-size:16px;
    color:black;
    background-color:white;
}
.lang li span{
    display:block;
    float:right;
    margin-right:10px;
    border:1px solid #FFAA33;
    height:35px;
    width:70px;
    color:#FFAA33;
    margin-top:6px;
    line-height:35px;
    border-radius:5px;
}
.lang li img{
    width: 40px; 
    height: 40px; 
    border-radius: 4px;
    float:left;
}

.moreExpression {
    width:100%;

   }
.moreExpression  li{
    width:20%;
    float:left;
    height:90px;
    text-align:center;
    line-height:40px;
    margin:5px 0 0 15px;
   }
   .moreExpression  li:first-child{
    width:100%;
    height:30px;
    margin-left:30px;
    font-size:16px;
   }
    .moreExpression  li:first-child  span:last-child{
    float:right;
    font-size:14px;
    margin-right:40px;
    color:gray;
   }
</style>