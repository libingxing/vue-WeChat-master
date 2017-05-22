<template>
    <!--设置 组件-->
    <div class="setting">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
                <span>设置</span>
            </div>
        </header>
        <section style="margin-top:45px;">
            <div class="weui-cells">
                <router-link to="/self/settings/security" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">帐号与安全</div>
                    <div class="weui-cell__ft"></div>
                </router-link>
            </div>
            <div class="weui-cells">
                <router-link to="/self/settings/notice" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">新消息通知</div>
                    <div class="weui-cell__ft"></div>
                </router-link>
                <router-link to="/self/settings/privacy" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">隐私</div>
                    <div class="weui-cell__ft"></div>
                </router-link>
                <router-link to="/self/settings/common" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">通用</div>
                    <div class="weui-cell__ft"></div>
                </router-link>
            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="https://kf.qq.com/touch/product/wechat_app.html?platform=15&amp;scene_id=kf338">
                    <div class="weui-cell__bd">帮助与反馈</div>
                    <div class="weui-cell__ft"></div>
                </a>
                <router-link to="/self/settings/aboutWeChat" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">关于微信</div>
                    <div class="weui-cell__ft"></div>
                </router-link>
            </div>
             <div class="weui-cells">
                <router-link to="/self/settings/laboratory" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">实验室<img src="../../assets/images/bulb.jpg" style="width:40px;height:21px;margin-left:20px;"></div>
                    <div class="weui-cell__ft"></div>
                </router-link>
            </div>
            <div class="weui-btn-area" >
                <button class="weui-btn weui-btn_warn" id="exitBtn" style="background:white;color:black;" @click="show">退出登录</button>
            </div>
        </section>
        <footer>
            <ul class="exitConfirm" v-show="this.fold">
                <li>退出后不会删除任何历史信息，下次登录依然可以使用本账号</li>
                <li @click="exit">退出登录</li>
                <li @click="clear">取消</li>
            </ul>
        </footer>
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
            show(){
                this.fold=true;
                document.documentElement.style.overflow = "hidden";
            },
            exit(){
                this.fold=false;
                document.documentElement.style.overflow = "scroll";
                this.$router.replace('.');
            },
            clear(){
                this.fold=false;
                document.documentElement.style.overflow = "scroll";
            }
        }
    }
</script>
<style>
   .exitConfirm{
       width:100%;
       height:140px;
       margin-top:200px;
       background-color:white;
       font-size:14px;
   }
    .exitConfirm li{
        height:45px;
        text-align:center;
        line-height:41px;
        border-bottom:1px solid gray;
    }
    .exitConfirm li:first-child{
        color:gray;
    }
    .exitConfirm li:nth-child(2){
        color:red;
    }
</style>