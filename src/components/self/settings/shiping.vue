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
                    <h4 class="self-nickname">视频聊天</h4>
                    <p class="self-wxid" style="font-size: 13px;color: #FF7744;">已启用</p>                  
                </div>
            </div>
        </div>


        <div class="weui-cells">
            <div class="weui-cell ">
                <div class="weui-cell__bd" >
                    <span style="color:gray;margin-right:10px;">功能介绍</span>
                    <span >可以和你的朋友面对面视频聊天</span>
                </div>
               
            </div>
        </div>
        

        <div class="weui-cells">
            <div class="weui-cell weui-cell_switch">
                <div class="weui-cell__bd">视频聊天，语音聊天铃声</div>
                <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
            </div>
        </div>

        <div class="weui-cells" style="background-color:#eee;">
                <p style="color:gray;margin-left:15px;">关闭铃声后，收到视频聊天或语音聊天请求时不会播放提醒铃声</p>
        </div>

   

        <a class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;" @click="$router.go(-4)">停用</a>

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