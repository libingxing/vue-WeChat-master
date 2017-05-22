<template>
    <div class="common" >
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings/laboratory" tag="div" class="iconfont icon-return-arrow">
                    <span>实验室</span>
                </router-link>
                <span>搜一搜</span>
            </div>
        </header>
        <div style="margin-top:55px;">
            <section>
                <div class="weui-cells ">
                    <div class="weui-cell weui-cell_switch">
                        <div class="weui-cell__bd">启用搜一搜</div> 
                        <div class="weui-cell__ft">
                            <input type="checkbox" class="weui-switch">
                        </div>
                    </div>
                </div>

                <div class="weui-cells" @click="$router.push({path:'./kanyikan'})">
                    <div class="weui-cell weui-cell_access" >
                        <div class="weui-cell__bd">
                            <span style="color:black;font-size:18px;display:block;margin-bottom:10px;">功能介绍</span>
                            <span style="color:gray;;font-size:14px;display:block;"> 你可以在“发现”中，找到“搜一搜”入口，快速查找微信内以互联网信息</span>
                            <img src="../../../assets/images/sousou.png" style="width:200px;height:380px;margin-left:90px;">
                        </div>
                    </div>
                </div>
             <div class="weui-cells">
               <div class="weui-cell weui-cell_access">
                    <a class="weui-cell__bd" href="https://mp.weixin.qq.com/">意见反馈</a>
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