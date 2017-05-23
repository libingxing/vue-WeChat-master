<template>
    <!--对话框-->
    <div class="_full_router component-chat-dialogue" style="background-color: #FFE4E1 ;" @click="hideMsgMore($event)">
        <div class="_full_inner">
            <header id="wx-header">
                <div class="center">
                    <div class="iconfont icon-return-arrow" @click="$router.back()">
                        <span>微信</span>
                    </div>
                    <span>{{official.name}}</span>
                    <span class="iconfont icon-chat-friends" style="display:block;float:right;"
                    @click="$router.push({path:'./officialDetail',query:{wxid:official.wxid}})"></span>
                </div>
            </header> 
            <div class="_cover-content _effect" :class="{'_effect--30':decline}">
                <section class="dialogue-section" >
                    <div class="row clearfix" v-for="item in msgInfo" v-show="item.text!=''" style="margin-top:45px;">
                <img :src="item.headerUrl" class="header" style="width:35px;float:right;margin-right:-80px;display:block">
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

                     
                <footer class="dialogue-footer"  v-if="!this.fold" style="background-color:#FFE4E1;" >
                    <div class="footer-content" >
                        <a class="iconfont icon-dialogue-bar-jianpan" @click.stop.prevent="showDialog"></a>
                        <a href="https://www.ele.me/home/">{{official.footer[0]}}</a>
                        <a>{{official.footer[1]}}</a>
                        <a href="https://www.ele.me/home/">{{official.footer[2]}}</a>
                    </div>
                </footer>


                        <!--对话页面底部2-->
                <footer class="dialogue-footer2" v-if="this.fold">
            <div class="component-dialogue-bar-person">

                <span class="iconfont icon-dialogue-bar-menu" @click.stop.prevent="hideDialog"></span>
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
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            decline: false,
            currentChatWay: false,  //ture为键盘打字 false为语音输入
            fold:false    //显示对话框  
        }
    },
    computed: {
            //返回store中存贮的official-account信息
            msgInfo() {
                return this.$store.state.msgList.officialMsg
            },
            //相关公众号基本信息
            official(){
              for(var i=0;i<this.$store.state.OfficialAccounts.length;i++){
                 if(this.$store.state.OfficialAccounts[i].wxid==this.$route.query.wxid){
                     return this.$store.state.OfficialAccounts[i];
                 }
              }
            }
        },
    methods:{
            //提交修改store中official-account信息
            show(ev){
                if(ev.keyCode == 13){            
                    var inputContent=document.getElementById("chat-txt");
                        this.$store.commit("addOfficailMessage",inputContent.value);
                        inputContent.value="";
                }
            },
            showDialog(){
                this.fold=true;
            },
            hideDialog(){
                this.fold=false;
            },
            hideMsgMore(e){
               if((e.target.className!="msg-more")&&e.target.className!="text1"){
                 document.getElementById("msg-more").style.display="none";
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
            }
}
</script>
<style scoped>
 @import "../../assets/css/footer.css";
.component-chat-dialogue {}

.dialogue-section {
    height: calc(100% - 50px);
}

.dialogue-section-inner {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    overflow: auto;
}

.dialogue-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
}
.footer-content{
    height:50px;
    width:100%;
    display:flex;
    border:1px solid gray;
    background-color:white;
}
.footer-content a{
    display:block;
    flex:1;
    border-left:1px solid gray;
    width: 50px;
    height: 100%;
    padding: 5px 0;
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    color: #7d7e83;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:black;
}
.footer-content a:first-child{
    border-left:none;
    flex:0 0 50px;
    font-size: 30px;
}
</style>
