<template>
    <div class="security">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>账号与安全</span>
            </div>
        </header>
        <section style="margin-top:45px;">
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">微信号</div>
                    <div class="weui-cell__ft">zhaohd</div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">手机号</div>
                    <div class="weui-cell__ft">18845268536</div>
                </div>
            </div>

            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">微信密码</div>
                    <span style="color:gray;">已设置</span>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">声音锁</div>
                    <span style="color:gray;">未设置</span>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>


            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">应急联系人</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access" @click="$router.push({path:'./security/loadSetting'})" >
                    <div class="weui-cell__bd">登录设备管理</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access" @click="$router.push({path:'./security/moreSecurity'})">
                    <div class="weui-cell__bd">更多安全设置</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">微信安全中心</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells__tips">如果遇到帐号信息泄露, 忘记密码, 诈骗等帐号安全问题, 可前往微信安全中心.</div>
        </section>
    </div>
</template>
<script>
    export default {}

</script>