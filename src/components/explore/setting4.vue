<template>
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <div tag="div" class="iconfont icon-return-arrow" @click="$router.back()">
                    <span>摇一摇设置</span>
                </div>
                <span>打招呼的人</span>
                <span style="display:block;float:right;color:gray;">清空</span>
            </div>
        </header>   
       <section style="margin-top:45px;">
            <div class="content" ><span>暂时没有人向你打招呼</span></div>
       </section>
    </div>
</template>
<script>    
</script>
<style>
.content{
    margin:0  auto;
    margin-top:75%;
    margin-left:33%;
    color:black;
    font-size:18px;
}
</style>