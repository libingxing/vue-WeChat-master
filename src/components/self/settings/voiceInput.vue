<template>
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <div tag="div" class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>功能</span>
                </div>
                <span>详细资料</span>
            </div>
        </header>
 
        <div class="weui-cells" style="margin-top:45px;">
            <div class="weui-cell">
                <div class="weui-cell__hd"><img src="../../../assets/images/find_icon-shake.png" alt="" class="self-header" style="width:60px"></div>
                <div class="weui-cell__bd">
                    <h4 class="self-nickname">语音输入</h4>
                    <p class="self-wxid" style="font-size: 13px;color: #FF7744;">未启用</p>                  
                </div>
            </div>
        </div>


        <div class="weui-cells">
            <div class="weui-cell ">
                <div class="weui-cell__bd" >
                    <span style="color:gray;margin-right:10px;">功能介绍</span>
                    <span >将你的语音转换成文本</span>
                </div>
               
            </div>
        </div>
        

   

        <a class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;" @click="$router.go(-4)">启用该功能</a>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName: ""
            }
        }
        }
</script>
<style>

</style>