<template>
    <div id="moments"  >
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
                <span>相册</span>
                <span style="color:white;font-size:20px;float:right;">...</span>
            </div>
        </header>

        <div class="home-pic" style="margin-top:45px;">
            <div class="home-pic-base">
                <div class="top-pic">
                    <div class="top-pic-inner">
                        <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">
                    </div>
                </div>
                <div class="top-name _ellipsis">阿荡</div>
                <div style="margin-top:80px;float:right;margin-right:-140px;color:gray;">找一个爱我的和我爱的人</div>
            </div>
        </div>

       <div class="weui-cell moments__post" style="margin-top:50px;">
            <div class="weui-cell__hd" style="width:20%;">
               <span style="font-size:28px;font-weight:bold;">今天</span>
            </div>
            <div class="weui-cell__bd" >
              <span style="color:gray;margin:10px 0 0 40px;display:block;">尚未更新朋友圈</span>
            </div>
        </div>
 
        <div class="weui-cell moments__post" >
            <div class="weui-cell__hd" style="width:20%;">
               <span style="font-size:22px;font-weight:bold;">14</span><span>5月</span>
               <span style="display:block;font-size:12px;">上海.上海交大</span>
            </div>
            <div class="weui-cell__bd" style="background-color:#eee;">
                <p id="paragraph" class="paragraph">认知用户间的协作频谱感知能够有效地提高频谱利用率。然而，当认知用户中存在恶意用户，特别是恶意用户间存在协作行为时.</p>
            </div>
        </div>

        <div class="weui-cell moments__post">
            <div class="weui-cell__hd" style="width:20%;">
                <span style="font-size:22px;font-weight:bold;">14</span><span>3月</span>
                <span style="display:block;font-size:12px;">北京.清华大学</span>
            </div>
            <div class="weui-cell__bd" style="background-color:#eee;">
                <p id="paragraph" class="paragraph">因此，恶意用户的检测与防御变得尤为重要。为有效抵御协作频谱感知场景下的恶意用户及恶意行为</p>
            </div>
        </div>

        <div class="weui-cell moments__post">
            <div class="weui-cell__hd" style="width:20%;">
                <span style="font-size:22px;font-weight:bold;">4</span><span>3月</span>
                <span style="display:block;font-size:12px;">浙江.浙江大学</span>
            </div>
            <div class="weui-cell__bd" style="background-color:#eee;">
                <p id="paragraph" class="paragraph">weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好</p>
            </div>
        </div>
         <div class="weui-cell moments__post">
            <div class="weui-cell__hd" style="width:20%;">
                <span style="font-size:22px;font-weight:bold;">14</span><span>2月</span>
                <span style="display:block;font-size:12px;">北京.北京大学</span>
            </div>
            <div class="weui-cell__bd" style="background-color:#eee;">
                <p id="paragraph" class="paragraph">user centric malicious behavior detection scheme, trust-based malicious behavior detection scheme, the proposed scheme has better detection and defense performance.</p>
            </div>
        </div>

         <div class="weui-cell moments__post">
            <div class="weui-cell__hd" style="width:20%;">
                <span style="font-size:22px;font-weight:bold;">14</span><span>1月</span>
                <span style="display:block;font-size:12px;color:gray;">南京.南京大学</span>
            </div>
            <div class="weui-cell__bd" style="background-color:#eee;">
                <p id="paragraph" class="paragraph">Compared with the existing three defense mechanisms, i.e., mean-based malicious behavior detection scheme</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    }

</script>
<style>
    @import "../../../assets/css/moments.css"
</style>