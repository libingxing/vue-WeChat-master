<template>
    <div class="_full_router component-yao-yi-yao">
        <div class="_full_inner">
            <header id="wx-header" >
                <div class="center">
                    <router-link to="/explore" tag="div" class="iconfont icon-return-arrow">
                        <span>发现</span>
                    </router-link>
                    <span>摇一摇</span>
                    <img src="../../assets/images/me_more-setting.png" style="display:block;float:right;width:23px;height:23px;margin-top:10px;" @click="$router.push({path:'./yaoyiyao/setting'})">
                </div>
            </header> 
            <div class="_cover-content _effect" :class="{'_effect--30':decline}" >
                <div class="yao-yi-yao-panel">
                    <div class="mobile-hand"></div>
                </div>
                <ul class="yao-yi-yao-footer">
                    <li v-for="(item,index) in menu" :class="[item.type,{'current':current===index}]" @click='chooseItem(index)'>
                        <div></div>
                        <p v-text="item.name"></p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            decline: false,
            current: 0,
            menu: [{
                type: 'people',
                name: '人',
            }, {
                type: 'music',
                name: '歌曲',
            }, {
                type: 'tv',
                name: '电视',
            }],

            topModel: {
                backText: '返回',
                curText: '摇一摇',
                nextPath: {
                    path: ''
                },
                nextIcon: ''
            }
        }
    },
    methods: {
        chooseItem(index) {
            this.current = index;
        }
    }
}
</script>
<style scoped>
._cover-content {
    color: #979797;
    background-color: #2d3031;
}

.yao-yi-yao-panel {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.yao-yi-yao-panel .mobile-hand{
    margin-top: -10%;
    width: 50%;
    padding-top: 187%;
    background-image: url(../../assets/images/yao-yi-yao/mobile-hand.png);
    background-repeat:no-repeat;
    background-position: center center;
    background-size: contain;
}

.yao-yi-yao-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    width: 100%;
    left: 0;
}

.yao-yi-yao-footer li {
    text-align: center;
    padding: 0 20px;
}

.yao-yi-yao-footer li div {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
    background-size: contain;
    background-repeat: no-repeat;
}


.yao-yi-yao-footer li.people div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_people.png);
}
.yao-yi-yao-footer li.music div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_music.png);
}
.yao-yi-yao-footer li.tv div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_tv.png);
}

.yao-yi-yao-footer li.people.current div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_people-hl.png);
}
.yao-yi-yao-footer li.music.current div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_music-hl.png);
}
.yao-yi-yao-footer li.tv.current div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_tv-hl.png);
}

</style>
