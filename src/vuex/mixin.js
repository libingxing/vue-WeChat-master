    //起初利用混合 mixin+vuex 动态设置页面标题+动态设置前一页页面名字
    const mixin = {
        mounted() {
            this.$store.commit("setPageName", this.pageName)             
        },
        activated() {
            this.$store.commit("setPageName", this.pageName)
        }
    }
    export default mixin