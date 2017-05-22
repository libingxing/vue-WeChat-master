<template>
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <div tag="div" class="iconfont icon-return-arrow" @click="$router.back()">
                </div>
                <span>{{titleInfo[0]}}</span>
            </div>
        </header>   
       <section style="margin-top:45px;">
            <div class="content" >
                <span>{{titleInfo[1]}}</span>
                <span>{{titleInfo[2]}}</span>
            </div>
       </section>
    </div>
</template>
<script>  
export default{
    computed:{
        titleInfo(){
            if(this.$route.query.index=='0'){
                return ['会员卡','暂无可用会员卡','你可以在支持微信会员卡的公众号，小程序，线下店获得会员卡，放入卡包保存和使用'] 
            } 
            if(this.$route.query.index=='1'){
                return ['朋友的优惠券','暂无朋友共享优惠券','在这里，可用和朋友共享朋友圈'] 
            } 
            if(this.$route.query.index=='2'){
                return ['我的票劵','暂无可用票劵','你可以在支持微信会员卡的公众号，小程序，线下店获得会员卡，放入卡包保存和使用'] 
            } 
        }
    }
}  
</script>
<style>
.content{
    margin:0  auto;
    margin-top:75%;
    color:gray;
    font-size:18px;
}
.content span {
    display:block;
    text-align:center;
    margin:0 auto;
    width:80%;
}
</style>