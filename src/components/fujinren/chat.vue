<template>
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <div tag="div" class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>返回</span>
                </div>
                <span>详细资料</span>
            </div>
        </header>
        <div class="weui-cells" style="margin-top:45px;">
            <div class="weui-cell">
                <div class="weui-cell__hd"><img :src="userInfo.headerUrl" alt="" class="self-header" style="width:60px"></div>
                <div class="weui-cell__bd">
                    <h4 class="self-nickname">{{userInfo.nickname}}<span class="gender" :class="[userInfo.sex===1?'gender-male':'gender-female']"></span></h4>
                    <p class="self-wxid" style="font-size: 13px;color: #999;">{{userInfo.distance}}</p>
                </div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access" >
                <div class="weui-cell__bd">
                    <p>设置备注和标签</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>地区</p>
                </div>
                <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
                    <span v-for="item in userInfo.area">{{item}}&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
            <div class="weui-cell weui-cell_access" style="height:50px;">
                <div class="weui-cell__bd">
                    <p>个人签名</p>
                </div>
                <div class="" style="-webkit-flex: 4;text-align: left;">
                    <div class="album-list">
                        <span >{{userInfo.signature}}</span>
                    </div>
                </div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>来源&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;来自附近的人</p>
                </div>
            </div>
        </div>

        <a  @click="go" class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;">打招呼</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" style="width:90%">投诉</a>

    </div>
</template>
<script>
    import contact from "../../vuex/contacts"
    export default {
        data() {
            return {
                pageName: ""
            }
        },
        computed: {
            userInfo() {
                return contact.getUserInfo(this.$route.query.wxid)
            },
            getUserInfo(){
           for (var i in this.$store.state.msgList.baseMsg) {
                    if(this.$store.state.msgList.baseMsg[i].wxid==this.$route.query.wxid){
                       return this.$store.state.msgList.baseMsg[i]
                    }
                }
            }
        },
         mounted(){
          //console.log(this.getUserInfo)
        },
        methods:{
        go(){
        this.$router.push({path:'./dialog',query:{mid:this.getUserInfo.mid,name:this.getUserInfo.group_name||(this.getUserInfo.msg[0].name),group_num:this.getUserInfo.user.length}})
        }
        }
    }
</script>
<style>

</style>