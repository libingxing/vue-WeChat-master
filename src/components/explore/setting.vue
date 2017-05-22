<template>
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <div tag="div" class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>摇一摇</span>
                </div>
                <span>摇一摇设置</span>
            </div>
        </header>
    
        <div class="weui-cells" style="margin-top:45px;">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>使用默认背景图片</p>
                </div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>换张背景图片</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>音效</p>
                </div>
                <input type="checkbox" class="weui-switch">
            </div>
        </div>


        <div class="weui-cells">
            <div class="weui-cell"  @click="$router.push({path:'./setting4'})">
                <div class="weui-cell__bd">
                    <p>打招呼的人</p>
                </div>
               <div class="weui-cell__ft">
                </div>
            </div>
            <div class="weui-cell weui-cell_access" @click="$router.push({path:'./setting5'})">
                <div class="weui-cell__bd">
                    <p>摇到的历史</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </div>
        </div>
        

        <div class="weui-cells">
            <div class="weui-cell weui-cell_access" @click="$router.push({path:'./setting6'})">
                <div class="weui-cell__bd">
                    <p>摇一摇消息</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </div>
        </div>

        
    </div>
</template>
<script>
    
</script>
<style>
</style>