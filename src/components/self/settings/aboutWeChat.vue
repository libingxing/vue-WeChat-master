<template>
    <div class="common" >
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>关于微信</span>
            </div>
        </header>
        <div style="margin-top:45px;">
            <section>
            <div >
                 <img src="../../../assets/images/wechat.jpg" style="width:60px;height:55px;color:gray;display:block;margin:10px auto;">
                 <span style="margin:10px 0 0 155px;display:block;color:gray;fonz-size:14px;">微信&nbsp;WeChat&nbsp;6.5.7</span>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">去评分</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">功能介绍</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">系统通知</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access" @click="$router.push({path:'./aboutWeChat/tousu'})">
                    <div class="weui-cell__bd">投诉</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
       data(){
            return{
              
            }
       },
       methods:{
          
       }
    }

</script>
<style>

</style>