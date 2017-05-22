<template>
    <div class="common" >
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings/common" tag="div" class="iconfont icon-return-arrow">
                    <span>通用</span>
                </router-link>
                <span>聊天背景</span>
            </div>
        </header>
        <div>
            <section style="margin-top:45px;">
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access" >
                        <div class="weui-cell__bd">选择背景图</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access" >
                        <div class="weui-cell__bd">从手机相册选择</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access">
                        <div class="weui-cell__bd">拍一张</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>   
                <div class="weui-cells">
                    <div class="weui-cell " >
                        <div class="weui-cell__bd" style="text-align:center;">将背景应用用到所有聊天背景</div>
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
             fold:false   
            }
       },
       methods:{
          
       }
    }

</script>
<style>


</style>