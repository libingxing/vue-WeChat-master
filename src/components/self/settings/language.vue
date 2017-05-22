<template>
    <div class="common" >
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings/common" tag="div" class="iconfont icon-return-arrow">
                    <span>取消</span>
                </router-link>
                <span>多语言</span>
                <span  class="keep" id="keep" @click="go">保存</span>
            </div>
        </header>
        <div>
            <section style="margin-top:45px;">
                <ul class="lang" id="lang" @click="changeColor($event)" v-show="!this.fold">
                    <li>简体中文</li>
                    <li>繁体中文(台湾)</li>
                    <li>繁体中文（香港）</li>
                    <li>English</li>
                    <li>France</li>
                    <li>日语</li>
                    <li>甲骨文</li>
                    <li>简体中文</li>
                    <li>繁体中文(台湾)</li>
                    <li>繁体中文（香港）</li>
                    <li>English</li>
                    <li>France</li>
                    <li>日语</li>
                    <li>甲骨文</li>
                    <li>简体中文</li>
                    <li>繁体中文(台湾)</li>
                    <li>繁体中文（香港）</li>
                    <li>English</li>
                    <li>France</li>
                    <li>日语</li>
                    <li>甲骨文</li>
  
                </ul>
                            <div class="setting" v-show="this.fold">正在设置</div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
       data(){
            return{
             fold:false   
            }
       },
       methods:{
           changeColor(e){
               if(e.target.tagName=="LI"){
                     var oLi=document.getElementsByTagName("li");
                    for(var i=0;i<oLi.length;i++){
                         oLi[i].className="";
                    }   
                    e.target.className="current";
                    document.getElementById("keep").className="current";
               }
           },
           go(){
            this.fold=true;
            setTimeout(()=>{this.$router.go(-1)},2000);            
           }
       }
    }

</script>
<style>
.common{
    overflow:scroll;
}
.lang li{
    width:100%;
    height:45px;
    line-height:45px;
    text-align:left;
    text-indent:1em;
    border-bottom:1px solid gray;
    font-size:16px;
    color:black;
}
.lang li.current{
    background-color:gray;
}
span.keep{
    display:block;
    float:right;
    color:orange;
}
span.current{
    color:white;
    display:block;
    float:right;
}
.setting{
    width:100px;
    height:100px;
    margin:0 auto;
    margin-top:200px;
    z-index:100;
    background-color:gray;
    font-size:16px;
    text-align:center;
    line-height:100px;
}
</style>