<template>
    <div class="dialogue">
        <header id="wx-header">           
            <!--对话框页面头部  to="/"表示路由跳转路径-->
            <div class="center">
                <div class="iconfont icon-return-arrow" @click.stop.prevent="$router.back()">
                    <span>取消</span>
                </div>
                <span>打招呼</span>
                <span class="parentheses" v-show='$route.query.group_num!=1'>
                    {{$route.query.group_num}}
                </span>
                <span class="iconfont" style="diplay:block;float:right;" @click="send">发送</span>
            </div>
        </header>

        <div class="middle" style="height:45px;width:100%;margin-top:15px;color:gray;font-size:16px;"  >
            <span>&nbsp;&nbsp;&nbsp;说句话打声招呼</span>
        </div>
        <div class="inputWrapper" style="margin-top:-11px;">
            <input type="text" id="content" style="height:45px;width:100%;font-size:14px;" autofocus="autofocus">
        </div>


        <div class="transit" v-show="this.fold">发送成功</div>
    </div>
</template>
<script>
export default{
    data(){
        return{
           fold: false
        }
    },
    methods:{
        send(){
            this.fold=true;
            //使用箭头函数，解决this问题;
            setTimeout(()=>{this.$router.back()},2000);
        }
    }
}
</script>
<style>
   .transit{
   width:100px;
   height:100px;
   background:gray;
   color:white;
   margin-top:200px;
   margin-left:35%;
   text-align:center;
   line-height:100px;
   }
</style>