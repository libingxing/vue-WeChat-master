<template>
    <div class="privacy">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/settings/privacy" tag="div" class="iconfont icon-return-arrow">
                    <span>隐私</span>
                </router-link>
                <span>黑名单</span>
            </div>
        </header>
            <search style="margin-top:55px;"></search>
 
    </div>
</template>
<script>
 import search from '../../../components/common/search';
    export default {
        components:{
            search:search
        }
    }

</script>