<template>
    <!--进入 dialogue 页面，携带参数 mid name group_num -->
    <li v-if="item.user.length==1">
     <router-link :to="{ path: '/fujinren/chat', query: { wxid:item.wxid} }" tag="div" class="list-info" >
            <div class="header-box">             
                <div class="header" :class="[item.type=='group'?'multi-header':'']">
                    <!--此处用法user甚好-->
                    <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
                </div>
            </div>
         
            <div class="desc-box">
                <div class="desc-time" style="background:#c0c0c0;border-radius:3px;line-height:25px;margin-top:15px;">{{item.mes}}</div>

                <!--显示群名字-->
                <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>
                <!--如果没有备注好友，则显示微信昵称-->
                <div class="desc-author" v-else>{{item.msg[0].name}}</div>  
                <span style="color:gray;">{{item.distance}}米以内</span>          
            </div>
        </router-link>
    </li>
</template>
<script>
    export default {
        props: {
          item: {
            type:Object
          }
        }
    }
</script>