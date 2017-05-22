<template>
    <div class="common">
        <header id="wx-header">
            <div class="center">
                <router-link tag="div" class="iconfont icon-return-arrow":to="{path:'.'}">
                    <span>设置</span>
                </router-link>
                <span>通用</span>
            </div>
        </header>
        <div>
            <section style="margin-top:55px;">
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access" @click="$router.push({path:'./common/language'})">
                        <div class="weui-cell__bd">多语言</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access" @click="$router.push('./common/fontSize')">
                        <div class="weui-cell__bd">字体大小</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push('./common/background')">
                        <div class="weui-cell__bd">聊天背景</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push('./common/expression')">
                        <div class="weui-cell__bd">我的表情</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access" @click="$router.push('./common/photo-video')">
                        <div class="weui-cell__bd">照片和视频</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells ">
                    <div class="weui-cell weui-cell_switch">
                        <div class="weui-cell__bd">听筒模式</div>
                        <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access" @click="$router.push('./common/function')">
                        <div class="weui-cell__bd">功能</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_access">
                        <div class="weui-cell__bd">聊天记录迁移</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell weui-cell_access">
                        <div class="weui-cell__bd">存储空间</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd" style="text-align:center" @click="$router.replace({path:'./'});">清空聊天记录</div>
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