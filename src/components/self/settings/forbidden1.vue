<template>
    <div class="privacy" style="background-color:white;">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings/privacy" tag="div" class="iconfont icon-return-arrow">
                    <span>取消</span>
                </router-link>
                <span>不让他（她）看我的朋友圈</span>
                <span style="display:block;float:right;color:#FF8C00;opacity:0.5; ">完成</span>
            </div>
        </header>
        <section style="margin-top:55px;">
            <ul>
                <li v-for="item in $store.state.msgList.baseMsg" v-if="item.group_name==''">
                    <img :src="item.msg[0].headerUrl" style="height:55px;width:55px;display:block;margin:10px 0 0 20px;" @click="goDialogue($event)">
                    <span>{{item.msg[0].name}}</span>
                </li>  
                <li style="border:1px solid #eee;text-align:center;line-height:90px;color:gray;">
                    <div><span class="iconfont icon-chat-detail-add"></span></div>
                </li>
                <li style="border:1px solid #eee;text-align:center;line-height:90px;color:gray;font-size:25px;">
                    <div><span >-</span></div>
                </li>
            </ul>             
        </section>
        <footer style="background-color:#eee;color:gray;">
            <div>
                <span style="display:block;text-indent:2em;padding-top:10px;font-size:16px;">把通讯录的某个朋友放到这里，选择“公开”这个可见范围发照片他（她）将无法看到</span>
            </div>    
        </footer>

    </div>
</template>
<script>
    export default {
        methods:{
            goDialogue(e){
                for(var i in this.$store.state.msgList.baseMsg){
                    if((e.target.src==this.$store.state.msgList.baseMsg[i].msg[0].headerUrl)&&this.$store.state.msgList.baseMsg[i].user.length=="1"){
                         this.$router.push({path:'./forbidden1/dialogue',query:{mid:this.$store.state.msgList.baseMsg[i].mid,name:this.$store.state.msgList.baseMsg[i].msg[0].name,group_num:this.$store.state.msgList.baseMsg[i].user.length}})
                    }
                }
            } 
        } 
    }

</script>
<style>
   ul{
        width:100%;

   }
   ul  li{
        width:20%;
        float:left;
        height:90px;
        text-align:center;
        line-height:40px;
        margin:5px 0 0 15px;
   }
   footer{
        width:100%;
        height:400px;
        background-color:#eee;
        margin-top:460px;
   }
</style>