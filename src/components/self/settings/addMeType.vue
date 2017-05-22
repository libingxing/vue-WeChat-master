<template>
    <div class="privacy">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings/privacy" tag="div" class="iconfont icon-return-arrow">
                    <span>隐私</span>
                </router-link>
                <span>添加我的方式</span>
            </div>
        </header>
        <section style="margin-top:55px;">
           <div class="weui-cells__title">可通过以下方式找到我</div>

            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">手机号</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">微信号</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">QQ号</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
    
          <div class="weui-cells__title">关闭后，其他用户将不能通过上述信息找到你</div>
          <div class="weui-cells__title">可通过以下方式添加我：</div>

            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">群聊</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">我的二维码</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">名片</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>

            
            
         
            

        </section>
    </div>
</template>
<script>
    export default {}

</script>