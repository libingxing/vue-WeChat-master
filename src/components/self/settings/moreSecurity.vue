<template>
    <div class="security">
        <header id="wx-header">
            <div class="center">
                <div class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>账号与安全</span>
                </div>
                <span>更多安全设置</span>
            </div>
        </header>
        <section style="margin-top:45px;">
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">QQ号</div>
                    <div class="weui-cell__ft">12345678</div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">邮箱地址</div>
                    <div class="weui-cell__ft">12345678@qq.com</div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {}

</script>



