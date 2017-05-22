<template>
    <div class="common">
        <header id="wx-header">
            <div class="center">
                <router-link tag="div" class="iconfont icon-return-arrow":to="{path:'.'}">
                </router-link>
                <span>卡包</span>
                <span style="float:right;" @click="$router.push('./card/cardMes')">消息</span>
            </div>
        </header>
        <div>
            <section style="margin-top:55px;" class="section">
                <div style="height:20px;margin-bottom:-10px;text-indent:1em;color:gray;font-size:16px;"><span>会员卡</span></div>
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./cardDetail',query:{index:'0'}})">
                       <img src="../../../assets/images/vip.jpg" style="width:45px;width:45px;">
                        <div class="weui-cell__bd">会员卡（0）</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>

                <div style="height:20px;margin:40px 0 -10px 0;text-indent:1em;color:gray;font-size:16px;"><span>优惠券</span></div>  
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access"  @click="$router.push({path:'./cardDetail',query:{index:'1'}})">
                        <img src="../../../assets/images/card.jpg" style="width:45px;width:45px;">
                        <div class="weui-cell__bd">朋友的优惠券</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access"  @click="$router.push({path:'./cardDetail',query:{index:'2'}})">
                        <img src="../../../assets/images/youhuijuan.jpg" style="width:45px;width:45px;">
                        <div class="weui-cell__bd">我的票劵</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                
            </section>
        </div>
    </div>
</template>
<script>
    export default {
    
    }

</script>
<style>
.weui-cells{
    height:70px;
    line-height:60px;
    font-size:18px;
}
</style>