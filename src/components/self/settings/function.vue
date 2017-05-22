<template>
    <div class="common">
        <header id="wx-header">
            <div class="center">
                <div class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>通用</span>
                </div>
                <span>功能</span>
            </div>
        </header>
        <div>
            <section style="margin-top:45px;">
                <div class="weui-cell " style="height:20px;">
                 <span style="line-height:20px;margin-top:18px;color:gray;"><span style="font-size:45px;color:red;">.</span>已开启的功能</span>
                </div>

                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/QQoffline'})">
                        <img src="../../../assets/images/find_icon-shake.png" style="height:25px;" >
                        <div class="weui-cell__bd">QQ离线消息</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/QQmailbox'})" >
                        <img src="../../../assets/images/find_icon-qrcode.png" style="height:25px;" >
                        <div class="weui-cell__bd">QQ邮箱提醒</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/audionote'})">
                        <img src="../../../assets/images/find_icon-shopping.png" style="height:25px;" >
                        <div class="weui-cell__bd">语言记事本</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access"  @click="$router.push({path:'./function/piaoliuping'})" >
                        <img src="../../../assets/images/find_icon-shake.png" style="height:25px;" >
                        <div class="weui-cell__bd">漂流瓶</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/fujinren'})">
                        <img src="../../../assets/images/find_icon-shopping.png" style="height:25px;" >
                        <div class="weui-cell__bd">附近的人</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                     <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/yaoyiyao'})">
                        <img src="../../../assets/images/find_icon-shake.png" style="height:25px;" >
                        <div class="weui-cell__bd">摇一摇</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/qunfazhushou'})">
                        <img src="../../../assets/images/find_icon-qrcode.png" style="height:25px;" >
                        <div class="weui-cell__bd">群发助手</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/shiping'})">
                        <img src="../../../assets/images/find_icon-moregame.png" style="height:25px;" >
                        <div class="weui-cell__bd">视频聊天</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                
                <div class="weui-cell " style="height:20px;">
                 <span style="line-height:20px;margin-top:18px;color:gray;"><span style="font-size:45px;color:red;">.</span>未开启的功能</span>
                </div>

                <div class="weui-cells" >
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/contactSyn'})">
                        <img src="../../../assets/images/find_icon-shake.png" style="height:25px;" >
                        <div class="weui-cell__bd">通讯录同步助手</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/tencentNews'})">
                        <img src="../../../assets/images/find_icon-qrcode.png" style="height:25px;" >
                        <div class="weui-cell__bd">腾讯新闻</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/voiceInput'})">
                        <img src="../../../assets/images/find_icon-shopping.png" style="height:25px;" >
                        <div class="weui-cell__bd">语音输入</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./function/wechatPlay'})">
                        <img src="../../../assets/images/find_icon-shake.png" style="height:25px;" >
                        <div class="weui-cell__bd">微信运动</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>
<script>
    export default {}

</script>