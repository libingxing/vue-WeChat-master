<template>
    <div class="privacy" style="background-color:#eee;">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings/privacy" tag="div" class="iconfont icon-return-arrow">
                    <span>隐私</span>
                </router-link>
                <span>允许朋友查看朋友圈的范围</span>
            </div>
        </header>
        <section style="margin-top:55px;">
            <ul class="wrapper" @click="$router.back()">
                <li><span>最近三天</span></li>
                <li><span>最近半年</span></li>
                <li><span>全部</span></li>
            </ul>  
        </section>
        <footer class="footer">
                <span>在选择的时间范围之前发布的朋友圈，将对朋友不可见</span>
        </footer> 
    </div>
</template>
<script>
    export default {
       
    }

</script>
<style>
  .wrapper{
       background-color:white;
       width:100%;
  }
  .wrapper li{
       height:41px;
       border-bottom:1px solid #eee;
       font-size:16px;
       line-height:41px;
       text-indent:1em;
  }
  .footer{
       color:#gray;
       font-size:16px;
       margin-top:10px;      
  }
  .footer span{
       display:block;
       text-indent:1em;
  }
</style>