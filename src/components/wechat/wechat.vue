<template>
    <!--微信组件-->
  <div id="wechat">
    <ul class="wechat-list">
        <!--props传递消息对象 baseMsgObj  使用is扩展组件 -->
        <li is="msg-item" v-for="baseMsgObj in $store.state.msgList.baseMsg"  class="list-row line-bottom" :item="baseMsgObj" :key="baseMsgObj.mid">
        </li>
    </ul>
  </div>
</template>
<script>
    import msgItem from "../wechat/msg-item"
    export default {
        components: {
            msgItem
        },
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "微信"
            }
        }
    }
</script>
<style>
    @import "../../assets/css/wechat.css";
</style>