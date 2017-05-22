<template>
    <div class="security">
        <header id="wx-header">
            <div class="center">
                <div class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>账号与安全</span>
                </div>
                <span>登录设备管理</span>
                <span style="display:block;float:right;">编辑</span>
            </div>
        </header>
        <section  style="margin-top:45px;">
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                    iphone
                    <div style="color:gray;">00:39</div>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                    PC-20129838JDD
                    <div style="color:gray;">昨天 18:07</div>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                    samsung-SM-N9993V
                    <div style="color:gray;">2017年2月17日&nbsp;&nbsp;16:09</div>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                    Meizu-MX5
                    <div style="color:gray;">2016年2月17日&nbsp;&nbsp;16:09</div>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>              
            </div>
        </section>
    </div>
</template>
<script>
    export default {}

</script>