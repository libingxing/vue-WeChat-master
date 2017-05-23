<template>
    <div class="dialogue" @click="hideMsgMore($event)">
        <header id="wx-header">
            <div class="other">

                <!--群进入详情页-->
                <router-link :to="{path:'/wechat/dialogue/dialogue-info',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.group_num!=1"></router-link>

                <!--非群进入详情页-->
                <router-link :to="{path:'/wechat/dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-friends" v-show="$route.query.group_num==1"></router-link>
            </div>
            
            <!--对话框页面头部  to="/"表示路由跳转路径-->
            <div class="center">
                <div class="iconfont icon-return-arrow" @click.stop.prevent="$router.back()">
                    <span>微信</span>
                </div>
                <span>{{pageName}}</span>
                <span class="parentheses" v-show='$route.query.group_num!=1'>
                    {{$route.query.group_num}}
                </span>
            </div>
        </header>

            <!--对话页面内容-->
        <section class="dialogue-section clearfix" >
           
           <!--来自好友对话信息-->
            <div class="row clearfix" v-for="item in msgInfo.msg" v-show="$route.query.mid!='1'" style="margin-top:65px;">
                <img :src="item.headerUrl" class="header" @click="toPage($event)">
                <p class="text" v-more>{{item.text}}</p>
            </div>


            <!--来自微信主人得消息-->
            <div class="row clearfix" v-for="item in msgInfoOwner.msg" style="margin-top:65px;">
                <img :src="item.headerUrl" class="header" @click="$router.push({path:'./details',query:{wxid:'wxid_zhaohd'}})" style="width:35px;float:right;margin-right:-80px;display:block">
                <p class="text1" v-more  id="text1" >{{item.text}}</p>
            </div>

            <span class="msg-more" id="msg-more" >
                <ul>
                    <li>复制</li>
                    <li>转发</li>
                    <li>收藏</li>
                    <li class="del"  @click="delMes($event)">删除</li>
                </ul>
            </span>
        </section>

        <!--对话页面底部-->
        <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">

                <!--点击实现voice按键-->
                <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" @click.stop.prevent="currentChatWay=true"></span>
                 
                <!--点击取消voice按键-->
                <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" @click.stop.prevent="currentChatWay=false"></span>
                <div class="chat-way" v-show="!currentChatWay">
                    <div class="chat-say" v-press>
                        <span class="one">按住 说话</span>
                        <span class="two">松开 结束</span>
                    </div>
                </div>
                <div class="chat-way" v-show="currentChatWay">
                    <input class="chat-txt" type="text" @keyup.13="addDialogueMessage($event)" id="chat-txt" />
                </div>
                <span class="expression iconfont icon-dialogue-smile"></span>
                <span class="more iconfont icon-dialogue-jia"></span>
                <div class="recording" style="display: none;" id="recording">
                    <div class="recording-voice" style="display: none;" id="recording-voice">
                        <div class="voice-inner">
                            <div class="voice-icon"></div>
                            <div class="voice-volume">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <p>手指上划,取消发送</p>
                    </div>
                    <div class="recording-cancel" style="display: none;">
                        <div class="cancel-inner"></div>
                        <p>松开手指,取消发送</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName: this.$route.query.name,
                currentChatWay: false ,     //ture为键盘打字 false为语音输入
                   }
        },
        computed: {
            msgInfo() {
                for (var i in this.$store.state.msgList.baseMsg) {
                    if (this.$store.state.msgList.baseMsg[i].mid == this.$route.query.mid) {
                        return this.$store.state.msgList.baseMsg[i]
                    }
                }
            },
            msgInfoOwner() {
                for (var i in this.$store.state.msgList.baseMsg) {       
                        return this.$store.state.msgList.baseMsg[0]
                   }
            }
        },
        directives: {
            press: {
                bind(element, binding) {
                    var startTx, startTy
                    element.addEventListener('touchstart', function(e) {

                        var recording = document.querySelector('.recording')
                        var recordingVoice = document.querySelector('.recording-voice')
                        var recordingCancel = document.querySelector('.recording-cancel')
                            recording.style.display = recordingVoice.style.display = recordingCancel.style.display = "block"

                        //实现按住说话，松开结束
                        var chatSay1 = document.querySelector('.one')
                        var chatSay2 = document.querySelector('.two')
                            chatSay1.style.display = 'none'
                            chatSay2.style.display = 'block'

                        element.className = "chat-say "     
                        var touches = e.touches[0]
                        startTx = touches.clientX
                        startTy = touches.clientY
                        e.preventDefault()
                    }, false)

                    element.addEventListener('touchend', function(e) {

                        var recording = document.querySelector('.recording')
                        var recordingVoice = document.querySelector('.recording-voice')
                        var recordingCancel = document.querySelector('.recording-cancel')
                            recordingCancel.style.display = recording.style.display = recordingVoice.style.display = "none"
                        
                        //实现按住说话，松开结束
                        var chatSay1 = document.querySelector('.one')
                        var chatSay2 = document.querySelector('.two')
                            chatSay1.style.display = 'block'
                            chatSay2.style.display = 'none'

                        element.className = "chat-say"
                       
                        e.preventDefault()
                    }, false)

                    element.addEventListener('touchmove', function(e) {
                        var recording = document.querySelector('.recording'),
                            recordingVoice = document.querySelector('.recording-voice'),
                            recordingCancel = document.querySelector('.recording-cancel')
                            element.className = "chat-say"

                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy;
                        if (distanceY > 10 && distanceY < 80) {
                            // 控制范围 和谐掉指尖抖动
                            element.className = "chat-say"
                            recordingVoice.style.display = "none"
                            recordingCancel.style.display = "block"
                        } else if (distanceY > 80) {
                            element.className = "chat-say"
                            recording.style.display = recordingCancel.style.display = "none"
                        }
                        // 阻断事件冒泡 防止页面被一同向上滑动
                        e.preventDefault()
                    }, false);
                }
            },
            more: {
                bind(element, binding) {
                    var startTx, startTy
                    element.addEventListener('touchstart', function(e) {
                        var msgMore = document.getElementById('msg-more'),
                            touches = e.changedTouches[0],
                            startTx = touches.clientX,
                            startTy = touches.clientY
                            // 控制菜单的位置
                        msgMore.style.left = ((startTx - 18) > 180 ? 180 : (startTx - 18)) + 'px'
                        msgMore.style.top = (element.offsetTop - 33) + 'px'
                        msgMore.style.display = "block"
                        e.preventDefault()
                    }, false)
                    element.addEventListener('touchend', function(e) {
                        e.preventDefault()
                    }, false)
                }
            }
        },
        methods: {
             addDialogueMessage(ev){
                if(ev.keyCode == 13){
                    var inputContent=document.getElementById("chat-txt");
                    this.$store.commit("addMessage",["1",inputContent.value]);
                    inputContent.value="";
                }
            },
            // 点击空白区域，菜单被隐藏;点击消息，菜单被显示
            hideMsgMore(e) {
                if((e.target.className!="msg-more")&&(e.target.className!="text1")&&e.target.className!="text"){
                 document.getElementById("msg-more").style.display="none";
               }
            },

            //只实现点击所有头像路由跳转个人主页面
            toPage(e){
                 for(var i=0;i<this.$store.state.msgList.baseMsg.length;i++){
                 if(this.$store.state.msgList.baseMsg[i].mid==this.$route.query.mid){
                       if(this.$route.query.group_num==1){
                           this.$router.push({path:'./details',query:{wxid:this.$store.state.msgList.baseMsg[i].wxid}})
                        }else if(this.$route.query.group_num!=1){
                           var msgs= this.$store.state.msgList.baseMsg[i].msg;
                           for(var j=0;j<msgs.length;j++){
                               if(e.target.src==msgs[j].headerUrl){
                                   this.$router.push({path:'./details',query:{wxid:msgs[j].href}})
                               }
                           }
                        }else{
                        }
                    }
                   
                 }
            },
            delMes(e){
                    var arr=document.getElementsByClassName('text1');
                    for(var i=0;i<arr.length;i++){                  
                        if(((arr[i].offsetTop-e.clientY)<30)&&(arr[i].offsetTop-e.clientY)>0){
                            this.$store.commit("delMessage",["1",arr[i].innerHTML]);
                        }                      
                    }
                    var array=document.getElementsByClassName('text');
                    for(var i=0;i<array.length;i++){                  
                        if(((array[i].offsetTop-e.clientY)<30)&&(array[i].offsetTop-e.clientY)>0){
                            this.$store.commit("delMessage",[this.$route.query.mid,array[i].innerHTML]);

                        }                      
                    }
            }
        }
    }
</script>
<style>
    @import "../../assets/css/dialogue.css";
    .say-active {
        background: #c6c7ca;
    }
    .dialogue-section .row .text1{
        float:right;
        background:#fff;
        padding:8px;
        box-sizing:border-box;
        margin-right:-35px;
        position:relative;
        border-radius:4px;
        max-width:80%;
        font-size:14px;
    }
    .dialogue-section .row .text1:before{
        width:0;
        height:0;
        position:absolute;
        right:-13px;
        top:11px;
        content:"";
        border:6px solid transparent;
        border-left-color:#fff;
    }
</style>