<template>
    <!--微信组件-->
  <div id="wechat" >
       <header id="wx-header">
            <div class="center">
                <div class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>发现</span>
                </div>
                 <span>附近的人</span>
                 <span class="gender gender-female"></span>
                 <span style="display:block;float:right;" @click="show">  ...   </span>
            </div>
        </header>
    <ul class="wechat-list" style="margin-top:45px;">
        <!--props传递消息对象 baseMsgObj  使用is扩展组件 -->
        <li is="msg-item" v-for="baseMsgObj in $store.state.msgList.baseMsg"  class="list-row line-bottom" :item="baseMsgObj">
        </li>
    </ul>

    <ul id="choose" class="choose" v-show="this.showChoose" @click="choose($event)">
       <li>只看女生</li>
       <li>只看男生</li>
       <li>查看全部</li>
       <li>附近打招呼的人</li>
       <li class="exit">清除位置消息并退出</li>
       <li class="cancel">取消</li>
    </ul>

    
  </div>
</template>
<script>
    import msgItem from "../fujinren/fujinrenList.vue"
    export default {
        components: {
            msgItem : msgItem
        },
        mixins: [window.mixin],
        data() {
            return {
                 showChoose:false
            }
        },
        methods:{
            show(){
                this.showChoose=true;
                document.getElementById("choose").style.top="200px";
                //显示附近人筛选功能时，禁止滚动;
                document.documentElement.style.overflow = "hidden";
            },
            //此处为完成，只完成退出功能;
            choose(e){
                if(e.target.className=="cancel"){
                 this.showChoose=false;
                 document.documentElement.style.overflow = "scroll";
                }
                if(e.target.className=="exit"){
                 this.showChoose=false;
                 //退出筛选功能时，开启滚动;
                 document.documentElement.style.overflow = "scroll";
                 this.$router.back();

                }

            }
        }
    }
</script>
<style>
    @import "../../assets/css/wechat.css";
    .choose{
    position: fixed;
    width: 100%;
    height: 250px;
    z-index: 20;
    margin-top: 236px;
    }
    .choose li{
    width: 100%;
    height: 40px;
    color: black;
    background-color: white;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid gray;
    line-height: 40px;
    }    
</style>