<template>
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <div tag="div" class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>返回</span>
                </div>
                <span>{{officialInfo.name}}</span>
            </div>
        </header>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd"><img :src="officialInfo.headerUrl" alt="" class="self-header" style="width:60px"></div>
                <div class="weui-cell__bd">
                    <h4 class="self-nickname">{{officialInfo.name}}</h4>
                    <p class="self-wxid" style="font-size: 13px;color: #999;">微信号: {{officialInfo.chat}}</p>
                </div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>功能介绍</p>
                </div>
                <span v-for="item in officialInfo.functionArr" style="margin-left:10px;color:gray;">{{item}}</span>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>账号主体</p>
                </div>
                <span style="color:gray;">{{officialInfo.owner}}</span>
                <div class="weui-cell__ft">
                </div>
            </div>
        </div>


        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>接收消息</p>
                </div>
                <input type="checkbox" class="weui-switch"/>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>置顶公众号</p>
                </div>
                <input type="checkbox" class="weui-switch">
            </div>
        </div>
        

        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>查看历史消息</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </div>
        </div>

        <div class="footer" @click="$router.back();">
            <span>进入公众号</span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName: ""
            }
        },
        computed: {
           officialInfo(){
           for(var i=0;i<this.$store.state.OfficialAccounts.length;i++){
                 if(this.$store.state.OfficialAccounts[i].wxid==this.$route.query.wxid){
                     return this.$store.state.OfficialAccounts[i];
                 }
              }
            }
        }
    }
</script>
<style>
    .footer{
        width:80%;
        height:41px;
        background-color:red;
        border-radius:5px;
        margin:0 auto;
        margin-top:15px;
        line-height:41px;
        text-align:center;
        color:white;
        font-size:14px;
    }
</style>