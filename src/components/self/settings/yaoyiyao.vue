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
                    <h4 class="self-nickname">摇一摇</h4>
                    <p class="self-wxid" style="font-size: 13px;color: #FF7744;">已启用</p>                  
                </div>
            </div>
        </div>


        <div class="weui-cells">
            <div class="weui-cell ">
                <div class="weui-cell__bd" >
                    <span style="color:gray;margin-right:10px;">功能介绍</span>
                    <span>摇一摇手机可以加为好友，帮助你找出在同一时间摇手机的人</span>
                </div>
               
            </div>
        </div>

        <router-link class="weui-cells" tag="div" :to="{path:'/explore/yaoyiyao'}">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>开始摇一摇</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </div>
        </router-link>

      


        <a class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;" @click="$router.go(-4)">停用</a>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName: "",
                fold:false
            }
        }
    }
</script>
<style>
.footer{
    width:100%;
    background-color:white;
    z-index:100;
    position:fixed;
    bottom:0px;
}
.footer li{
    height:41px;
    text-align:center;
    line-height:41px;
    font-size:14px;
}
.footer li:first-child{
    border-bottom:5px solid gray;
}
</style>