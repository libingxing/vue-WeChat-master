<template>
    <div class="common" style="background-color:gray;">
        <header id="wx-header">
            <div class="center">
                <div class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>通用</span>
                </div>
                <span>照片和视频</span>
            </div>
        </header>
        <div>
            <section style="margin-top:45px;">

               <div class="weui-cell " style="background-color:gray;height:30px;">
                 <span style="line-height:30px;margin-top:15px;color:black;">拍摄或编辑后的内容保存到系统相册</span>
                     </div>

               <div class="weui-cells " style="background-color:white;">
                    <div class="weui-cell weui-cell_switch">
                        <div class="weui-cell__bd">照片</div>
                        <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                    </div>
                     <div class="weui-cell weui-cell_switch">
                        <div class="weui-cell__bd">视频</div>
                        <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {}

</script>
<style>

</style>