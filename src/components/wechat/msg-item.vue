<template>
    <!--进入 dialogue 页面，携带参数 mid name group_num -->
    <li :class="{'item-hide':deleteMsg}">

        <!--自定义指令 v-swiper 用于对每个消息进行滑动处理,使用derectives实现自定义指令-->
        <router-link :to="{ path: '/wechat/dialogue', query: { mid: item.mid,name:item.group_name||(item.msg[0].name),group_num:item.user.length} }" tag="div" class="list-info" v-swiper @click.native="toggleMsgRead($event,'enter')">

            <div class="header-box">
                <!--未读并且未屏蔽 才显示新信息数量-->
                <i class="new-msg-count" v-show="!read&&!item.quiet">{{item.msg.length}}</i>

                <!--未读并且屏蔽 只显示小红点-->
                <i class="new-msg-dot" v-show="!read&&item.quiet"></i>

                <!--如果是私聊，只显示一个头像； 如果是群聊，则显示多个头像，flex 控制样式-->
                <div class="header" :class="[item.type=='group'?'multi-header':'']">
                    <!--此处用法user甚好-->
                    <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
                </div>
            </div>

            
            <div class="desc-box">
                <!--使用过滤器 fmtDate 格式化时间-->
                <div class="desc-time">{{item.msg[item.msg.length-1].date | fmtDate('hh:ss')}}</div>

                <!--显示群名字-->
                <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>
                <!--如果没有备注好友，则显示微信昵称-->
                <div class="desc-author" v-else>{{item.msg[0].name}}</div>

                <!--显示默认的消息-->
                <div class="desc-msg">
                    <!--显示屏蔽的图标字体-->
                    <div class="desc-mute iconfont icon-mute" v-show="item.quiet">
                    </div>
                    <span v-show="item.type=='group'">{{item.msg[item.msg.length-1].name}}:</span>
                    <span>{{item.msg[item.msg.length-1].text}}</span>
                </div>
            </div>
        </router-link>

        <!--自定义指令swiper实现的-->
        <div class="operate-box">
            <div class="operate-unread" v-if="read" @click="toggleMsgRead">标为未读</div>
            <div class="operate-read" v-else @click="toggleMsgRead">标为已读</div>
            <div class="operate-del" @click="deleteMsgEvent">删除</div>
        </div>
    </li>
</template>
<script>
    export default {
        props: {
          item: {
            type:Object
          }
        },
        data() {
            return {
                read: this.item.read,
                deleteMsg: false
            }
        },
        methods: {
            //切换消息未读/已读状态
            toggleMsgRead(event, status) {
                if (status === 'enter') {
                    if (this.read) {
                        return ''
                    }else{
                        this.read = true
                    }
                } else {
                    //主要用于operate-box中三个操作;
                    this.read = !this.read
                }
                if (!this.item.quiet) {
                    if (this.read) {
                        this.$store.commit('minusNewMsg')
                    } else {
                        this.$store.commit('addNewMsg')
                    }
                }

                event.target.parentNode.parentNode.firstChild.style.marginLeft = 0 + "px"
            },
            deleteMsgEvent() {
                this.deleteMsg = true
                if (!this.item.quiet) {
                    if (!this.read) {
                        this.$store.commit('minusNewMsg')
                    }
                }
            }
        },
        // 参考 https://vuefe.cn/v2/guide/custom-directive.html
        directives: {
            swiper: {
                bind: function(element, binding) {
                    var isTouchMove, startTx, startTy
                    element.addEventListener('touchstart', function(e) {
                        element.className = 'list-info'
                        var touches = e.touches[0]
                        startTx = touches.clientX
                        startTy = touches.clientY
                        isTouchMove = false;
                    }, false);
                    element.addEventListener('touchmove', function(e) {
                     element.className = 'list-info'
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy;
                        if (distanceX < 0) { //右滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (Math.abs(distanceX) > 20) {
                                    element.style.transition = "0.3s"
                                    element.style.marginLeft = 0 + "px"
                                }
                            }
                        } else { //左滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (distanceX < 156 && distanceX > 20) {
                                    e.preventDefault()
                                    element.style.transition = "0s"
                                    element.style.marginLeft = -distanceX + "px"
                                    isTouchMove = true
                                }
                            }
                        }
                        // e.preventDefault()
                    }, false);
                    element.addEventListener('touchend', function(e) {
                     element.className = 'list-info'
                        if (!isTouchMove) {
                            return;
                        }
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy,
                            isSwipe = false
                        if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                            if (distanceX < 0) {
                                return;
                            }
                            if (Math.abs(distanceX) < 60) {
                                isSwipe = true
                                element.style.transition = "0.3s"
                                element.style.marginLeft = 0 + "px"
                            } else {
                                element.style.transition = "0.3s"
                                element.style.marginLeft = "-156px"
                            }
                        }
                    }, false);
                }
            }
        }
    }
</script>