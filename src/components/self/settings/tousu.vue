<template>
    <div class="common" >
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings/aboutWeChat" tag="div" class="iconfont icon-return-arrow">
                    <span>返回</span>
                </router-link>
                <span>投诉维权</span>
            </div>
        </header>
        <div>
            <section style="margin-top:45px;">
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <a  class="weui-cell__bd" href="https://mp.weixin.qq.com/">违规行为投诉</a>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <a class="weui-cell__bd" href="https://mp.weixin.qq.com/">侵权投诉</a>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                   <a class="weui-cell__bd" href="https://mp.weixin.qq.com/">品牌维权</a>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <a class="weui-cell__bd" href="https://mp.weixin.qq.com/">功能使用意见或建议反馈</a>
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