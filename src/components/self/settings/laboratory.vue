<template>
    <div class="common" >
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>实验室</span>
            </div>
        </header>
        <div style="margin-top:55px;">
            <section>
            <div>
                 <img src="../../../assets/images/bulb.jpg" class="bulb">
                 <span class="span1">欢迎体验微信实验室</span>
                 <span class="span2">这里有微信正在搜索的功能，你可以打开来体验，实验随时可能结束，请勿过于依赖</span>
            </div>
            <span style="background-color:#eee;display:block;color:gray;margin:20px 0 -12px 10px;">可参与的实验</span>
            <div class="weui-cells" @click="$router.push({path:'./kanyikan'})">
                <div class="weui-cell weui-cell_access" >
                    <div class="weui-cell__bd">
                        <span style="color:black;font-size:18px;display:block;margin-bottom:10px;">看一看</span>
                        <span style="color:gray;;font-size:14px;display:block;">发现好友们都在看的热点和你感兴趣的内容</span>
                        <img src="../../../assets/images/newKan.jpg" style="width:60px;height:80px;">
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
             <div class="weui-cells" @click="$router.push({path:'./souyisou'})">
                <div class="weui-cell weui-cell_access" >
                    <div class="weui-cell__bd">
                        <span style="color:black;font-size:18px;display:block;margin-bottom:10px;">搜一搜</span>
                        <span style="color:gray;;font-size:14px;display:block;">在“发现”-“搜一搜”中，搜索更多内容</span>
                        <img src="../../../assets/images/sousou.png" style="width:60px;height:80px;">
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            </section>
            <footer >
            <span style="display:block;margin:150px 0 0 100px;color:gray;">使用微信实验室，即表示你同意</span>
            <span style="margin-left:110px;color:#BA55D3;"><<微信实验室使用须知>></span>
            </footer>
        </div>
    </div>
</template>
<script>
    export default {
       data(){
            return{
              
            }
       },
       methods:{
          
       }
    }

</script>
<style>
.bulb{
    width:60px;
    height:70px;
    margin-left:20px;
    margin-top:20px;
}
.span1{
    margin:-70px 0 0 113px;
    color:black;
    font-size:20px;
    display:block;
}
.span2{
    color:black;
    font-size:14px;
    margin-left:113px;
    color:gray;
    display:block;
    width:80%;
}
</style>