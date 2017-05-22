<template>
    <div class="privacy">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>隐私</span>
            </div>
        </header>
        <section style="margin-top:45px;">
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">加我为朋友时需要验证</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
            </div>

            <div class="weui-cells ">
                <div class="weui-cell  weui-cell_access" @click="$router.push({path:'./privacy/addMeType'})">
                    <div class="weui-cell__bd">添加我的方式</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">向我推荐通讯录好友</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            
         
            <div class="weui-cells__title">开启后，为你推荐已经开通微信的手机联系人</div>

            <div class="weui-cells " @click="$router.push({path:'./privacy/contactBlackList'})">
                <div class="weui-cell  weui-cell_access">
                    <div class="weui-cell__bd">通讯录黑名单</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>

            <div class="weui-cells__title">朋友圈</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access" @click="$router.push({path:'./privacy/forbidden1'})">
                    <div class="weui-cell__bd">不让他(她)看我的朋友圈</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access" @click="$router.push({path:'./privacy/forbidden1'})">
                    <div class="weui-cell__bd">不看他(她)看的朋友圈</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access" @click="$router.push({path:'./privacy/allowExploreRange'})">
                    <div class="weui-cell__bd">允许朋友查看朋友圈的范围</div>
                    <div class="weui-cell__ft">最近三天</div>
                </div>
                <div class="weui-cell ">
                    <div class="weui-cell__bd">允许陌生人查看十条朋友圈</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>


            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">开启朋友圈入口</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells__title">
               关闭后，将隐藏“发现”中的朋友圈入口，你发过的朋友圈不会被清空，朋友仍可以看到。
            </div>

               <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">朋友圈更新提醒</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells__title">
               关闭后，有朋友发表朋友圈时，界面下方的“发现”切换按钮上不在出现红色提示。
            </div>
        </section>
    </div>
</template>
<script>
    export default {}

</script>