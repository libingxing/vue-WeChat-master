<template>
    <div class="common" style="background-color:#FFE4E1;">
        <header id="wx-header">
            <div class="center">
                <div class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>表情</span>
                </div>
                <span>新品推荐</span>
            </div>
        </header>
        <div>
            <section style="margin-top:45px;">
                <ul class="lang" id="lang" @click="del($event)" >
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">忽忽与悠悠<span>下载</span></li>
                    <li><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg">二哈<span>下载</span></li>
  
                </ul>

                <div class="weui-cells" style="margin-top:20px;">
                    <div class="weui-cell weui-cell_access">
                        <div class="weui-cell__bd" >添加的表情</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access">
                        <div class="weui-cell__bd">表情购买记录</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            del(e){
                if(e.target.tagName.toLowerCase()=="span"){
                    e.target.innerHTML="已下载";
                }
            }
        }
    }

</script>
<style>
.lang li{
    width:100%;
    height:50px;
    line-height:50px;
    text-align:left;
    text-indent:1em;
    border-bottom:1px solid gray;
    font-size:16px;
    color:black;
    background-color:white;
}
.lang li span{
    display:block;
    float:right;
    margin-right:10px;
    height:35px;
    width:70px;
    margin-top:6px;
    line-height:35px;
    border-radius:5px;
    border:1px solid #FFAA33;
    color:#FFAA33;
}
.lang li img{
    width: 40px; 
    height: 40px; 
    border-radius: 4px;
    float:left;
    margin:4px 0px 0px 2px;
}
</style>