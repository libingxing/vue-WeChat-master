const mutations = {
    //设置当前页面名字
    setPageName(state, name) {
        state.currentPageName = name
    },
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

    //添加个人消息
    //注意对象数组深复制;此处若不使用深拷贝，将会导致指向同一个引用；
    //JSON.stringify将js=>json;
    //JSON.parse将json=>js;
    addMessage(state,arr){
        for(var i=0;i<state.msgList.baseMsg.length;i++){
            if(state.msgList.baseMsg[i].mid==arr[0]){
                var array=[].concat(JSON.parse(JSON.stringify(state.msgList.baseMsg[i].msg)));
                if(array.length==0){
                    //此处当消息清空之后，再次输入内容时，有问题，尚未解决;
                }else{
                    array[0].text=arr[1];
                    state.msgList.baseMsg[i].msg.push( array[0]);
                }
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
      
    //添加个人在群聊中的消息
    addOfficailMessage(state,str){
        for(var i in state.msgList.officialMsg){
                var array=[].concat(JSON.parse(JSON.stringify(state.msgList.officialMsg[i])));
            }  
                array[0].text=str;
                state.msgList.officialMsg.push( array[0]);
        },
    
    //删除个人在群聊中的消息
    delOfficialMessage(state,str){
        for(var i in state.msgList.officialMsg){
               if(state.msgList.officialMsg[i].text==str){
                 var array=[].concat(JSON.parse(JSON.stringify(state.msgList.officialMsg[i])));
                  array.text="";
                  state.msgList.officialMsg.splice(i,1);
               }
                
            }  
        }      
            

}
export default mutations