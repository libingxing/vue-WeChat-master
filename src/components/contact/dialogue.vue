<template>
    <div class="dialogue">
        <header id="wx-header">
            
            <!--对话框页面头部  to="/"表示路由跳转路径-->
            <div class="center">
                <div class="iconfont icon-return-arrow" @click.stop.prevent="$router.back()">
                    <span>微信</span>
                </div>
                <span>{{this.$route.query.name}}</span>
                <span class="parentheses" v-show='$route.query.group_num!=1'>
                    {{$route.query.group_num}}
                </span>
                <router-link  tag="span" class="iconfont icon-chat-friends" style="display:block;float:right;" :to="{path:'./dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" ></router-link>
            </div>
        </header>

    <!--群聊页面-->
        <section class="dialogue-section clearfix" @click="MenuOutsideClick"  style="margin-top:45px;" v-show="$route.query.group_num!='1'">
            <div class="row clearfix" v-for="item in msgInfo.msg" >
                <img :src="item.headerUrl" class="header" @click="to($event)" style="width:35px;float:right;margin-right:-80px;display:block">
                <p class="text1" v-more>{{item.text}}</p>
            </div>
            <span class="msg-more" id="msg-more">
                <ul>
                    <li>复制</li>
                    <li>转发</li>
                    <li>收藏</li>
                    <li>删除</li>
                </ul>
            </span>
        </section>

    <!--非群聊页面-->
        <section class="dialogue-section clearfix" @click="MenuOutsideClick"  style="margin-top:45px;" v-show="$route.query.group_num=='1'">
            <div class="row clearfix" v-for="item in msgInfoMsg.msg" >
                <img :src="item.headerUrl" class="header" @click="to($event)" style="width:35px;float:right;margin-right:-80px;display:block">
                <p class="text1" v-more>{{item.text}}</p>
            </div>
            <span class="msg-more" id="msg-more">
                <ul>
                    <li>复制</li>
                    <li>转发</li>
                    <li>收藏</li>
                    <li>删除</li>
                </ul>
            </span>
        </section>

        <!--对话页面底部-->
        <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">

                <!--点击实现voice按键-->
                <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" @click="currentChatWay=true"></span>
                 
                <!--点击取消voice按键-->
                <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" @click="currentChatWay=false"></span>


                <div class="chat-way" v-show="!currentChatWay">
                    <div class="chat-say" v-press>
                        <span class="one">按住 说话</span>
                        <span class="two">松开 结束</span>
                    </div>
                </div>
                <div class="chat-way" v-show="currentChatWay">
                    <input class="chat-txt" type="text" @keyup.13="show($event)" id="chat-txt"/>
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
                pageName: "",
                currentChatWay: false     //ture为键盘打字 false为语音输入
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
             msgInfoMsg() {
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
            show(ev){
                if(ev.keyCode == 13){
                    var inputContent=document.getElementById("chat-txt");
                    if(this.$route.query.group_num=="1"){
                        this.$store.commit("addMessage",['1',inputContent.value]);
                        inputContent.value="";
                    }
                    if(this.$route.query.group_num!="1"){
                        this.$store.commit("addGroupMessage",[this.$route.query.mid,inputContent.value]);
                        inputContent.value="";
                    }
                    
                }
            },
            // 点击空白区域，菜单被隐藏;点击消息，菜单被显示
            MenuOutsideClick(e) {
                var msgMore = document.getElementById('msg-more')
                if (e.target.className === 'text1') {
                     msgMore.style.display = 'block'
                } else {
                     msgMore.style.display = 'none'
                }
            },
            //只实现点击所有头像路由跳转个人主页面---此处未完成
            to(e){
                 for(var i in this.msgInfo.msg){
                    if(this.msgInfo.msg[i].headerUrl==e.target.src){
                     this.$router.push({path:'./details',query:{wxid:this.msgInfo.msg[i].href}})
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