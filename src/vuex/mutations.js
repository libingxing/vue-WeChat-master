const mutations = {
    //切换语言 后期需要
    switchLang(state, lang) {
        state.currentLang = lang
        Vue.config.lang = lang
        document.cookie = "VR_LANG=" + lang + "; path=/;domain=.snail.com"
            // location.reload()
    },
    //设置当前页面名字
    setPageName(state, name) {
        state.currentPageName = name
    },
    //设置前一页名字 已遗弃
    // setBackPageName(state, name) {
    //     state.backPageName = name
    // },
    //当 search 组件全屏/非全屏时 切换公共头部状态
    toggleHeaderStatus(state, status) {
        state.headerStatus = status
    },
    //切换“微信”页中右上角菜单
    toggleTipsStatus(state, status) {
        if (status == -1) {
            state.tipsStatus = false
        } else {
            //没有传入参数status或者status！=-1;
            state.tipsStatus = !state.tipsStatus
        }
    },
    //增加未读消息数
    addNewMsg(state) {
        state.newMsgCount > 99 ? state.newMsgCount = "99+" : state.newMsgCount++
    },
    //减少未读消息数
    minusNewMsg(state) {
        state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
    },
    //将消息置顶 待完成
    setMsgStick(state, mid) {

    },
    //取消置顶消息 待完成
    cancelMsgStick(state, mid) {
    },
    //添加个人消息
    //注意对象数组深复制;
    //JSON.stringify将js=>json;
    //JSON.parse将json=>js;
    addMessage(state,arr){
        for(var i=0;i<state.msgList.baseMsg.length;i++){
            if(state.msgList.baseMsg[i].mid==arr[0]){
                var array=[].concat(JSON.parse(JSON.stringify(state.msgList.baseMsg[i].msg)));
                array[0].text=arr[1];
                state.msgList.baseMsg[i].msg.push( array[0]);
            }  
        }
      }, 
      //删除个人消息
      delMessage(state,arr){
        for(var i=0;i<state.msgList.baseMsg.length;i++){
            if(state.msgList.baseMsg[i].mid==arr[0]){
                var array=[].concat(JSON.parse(JSON.stringify(state.msgList.baseMsg[i].msg)));  
                    for(var j in array){
                        if(array[j].text==arr[1]){
                            array[j].text="";
                            state.msgList.baseMsg[i].msg.splice( j,1);
                        }
                    }        
            }  
        }
      },   
      //添加群聊信息
      addGroupMessage(state,arr){
        for(var i=0;i<state.msgList.baseMsg.length;i++){
            if(state.msgList.baseMsg[i].mid==arr[0]){
                for(var j in state.msgList.baseMsg[i].msg){
                    if(state.msgList.baseMsg[i].msg[j].href=="wxid_zhaohd"){
                        var array=[].concat(JSON.parse(JSON.stringify(state.msgList.baseMsg[i].msg)));
                        array[j].text=arr[1];
                        state.msgList.baseMsg[i].msg.push( array[j]);
                    }
                }
            }  
        }
      },    
      //修改store中official-account信息    
    addOfficailMessage(state,str){
        var array=[];
        for(var i=0;i<state.msgList.officialMsg.length;i++){
                array=[].concat(JSON.parse(JSON.stringify(state.msgList.officialMsg[i])));
            }  
                array[0].text=str;
                state.msgList.officialMsg.push( array[0]);
        }         
            

}
export default mutations