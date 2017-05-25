import Vue from 'vue'
import Vuex from 'vuex'
import OfficialAccounts from "./official-account" //存放所有关注的公众号
import contact from './contacts' //存放所有联系人的数据
import mutations from "./mutations" //存放所有的修改函数
import actions from "./actions"
import getters from "./getters"

//很重要,将Vuex挂载到Vue上面;
Vue.use(Vuex)


const state = {
    currentLang: "zh", //当前使用的语言 zh：简体中文 en:英文 后期需要
    newMsgCount: 0, //新消息数量
    allContacts: contact.contacts, //所有联系人
    OfficialAccounts: OfficialAccounts, //所有关注的公众号
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
    msgList: {
        baseMsg: [{ //普通消息列表
                "mid": 1, //消息的id 唯一标识，重要
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true, //true；已读 false：未读
                "newMsgCount": 1,
                "wxid": "wxid_zhaohd",
                "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                "mes":"知心爱人",
                "distance":"300",
                "msg": [{ //对话框的聊天记录 新消息 push 进
                    "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }, {
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }, {
                    "text": '来呀 快活啊',
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }],
                "user": [contact.getUserInfo('wxid_zhaohd')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "收购万达讨论群",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_yehua wxid_zhaohd",
                "mes":"本店七折优惠",
                "single":true,
                "msg": [{
                        "text": "点击消息，唤醒消息操作菜单",
                        "date": 1488117964495,
                        "name": "夜华",
                        "href":"wxid_yehua",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }, {
                        "text": '点击空白处，操作菜单消失',
                        "date": 1488117964495,
                        "name": "阿荡",
                        "href":"wxid_zhaohd",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                    },
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "夜华",
                        "href":"wxid_yehua",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('wxid_zhaohd'), contact.getUserInfo('wxid_yehua')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "收购淘宝讨论群",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "wxid": "wxid_zhugeliang wxid_zhenji",
                "quiet": true,
                "mes":"承接各种私活",
                "msg": [{
                    "text": '冒个泡',
                    "date": 1488117964495,
                    "name": "诸葛亮 甄姬 阿荡",
                    "href":"wxid_zhugeliang",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"
                },
                {
                    "text": '出来透透气',
                    "date": 1488117964495,
                    "name": "诸葛亮 甄姬 阿荡",
                    "href":"wxid_zhenji",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg"
                },
                {
                    "text": '大家有什么想卖的啊',
                    "date": 1488117964495,
                    "name": "诸葛亮 甄姬 阿荡",
                    "href":"wxid_zhaohd",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }
                ],
                "user": [contact.getUserInfo('wxid_zhenji'), contact.getUserInfo('wxid_zhugeliang'), contact.getUserInfo('wxid_zhaohd')]
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "wxid": "wxid_sunquan",
                "quiet": false,
                "mes":"年年有余",
                "distance":"400",
                "msg": [{
                    "text": "点击消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": '容我三思',
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }],
                "user": [contact.getUserInfo('wxid_sunquan')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_sunshangxiang",
                "quiet": false,
                "mes":"不愿错过你",
                "distance":"500",
                "msg": [{
                    "text": '夫君,身体要紧~ ',
                    "date": 1488117964495,
                    "name": "孙尚香",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg"
                }],
                "user": [contact.getUserInfo('wxid_sunshangxiang')]
            },
            {
                "mid": 6,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_guangyu",
                "quiet": true,
                "mes":"一切从繁入简",
                "distance":"600",
                "msg": [{
                    "text": '三姓家奴！ ',
                    "date": 1488117964495,
                    "name": "关羽",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg"
                }],
                "user": [contact.getUserInfo('wxid_guangyu')]
            },
            {
                "mid": 7,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_baiqian",
                "quiet": true,
                "mes":"握不住的沙，不如扬了它",
                "distance":"700",
                "msg": [{
                    "text": '我是白浅！ ',
                    "date": 1488117964495,
                    "name": "白浅",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg"
                }],
                "user": [contact.getUserInfo('wxid_baiqian')]
            },
            {
                "mid": 8,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_huangyueying",
                "quiet": true,
                "mes":"简单的生活，简单的人",
                "distance":"800",
                "msg": [{
                    "text": '我是黄月英！ ',
                    "date": 1488117964495,
                    "name": "黄月英",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/huangyueying.jpg"
                }],
                "user": [contact.getUserInfo('wxid_huangyueying')]
            },
             {
                "mid": 9,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_liubei",
                "quiet": false,
                "mes":"大家好，欢迎来吃饭",
                "distance":"900",
                "msg": [{
                    "text": '我是刘备！ ',
                    "date": 1488117964495,
                    "name": "刘备",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/liubei.jpg"
                }],
                "user": [contact.getUserInfo('wxid_liubei')]
            },
            {
                "mid": 10,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_yehua",
                "quiet": true,
                "mes":"我是微商",
                "distance":"1000",
                "msg": [{
                    "text": '我是叶华！ ',
                    "date": 1488117964495,
                    "name": "叶华",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                }],
                "user": [contact.getUserInfo('wxid_yehua')]
            },
              {
                "mid": 11,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_zhugeliang",
                "quiet": false,
                "mes":"我是诸葛亮在世",
                "distance":"1100",
                "msg": [{
                    "text": '我是诸葛亮在世！ ',
                    "date": 1488117964495,
                    "name": "诸葛亮",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"
                }],
                "user": [contact.getUserInfo('wxid_zhugeliang')]
            },
            {
                "mid": 12,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "wxid": "wxid_zhenji",
                "quiet": false,
                "mes":"你的健康，我们的追求",
                "distance":"1200",
                "msg": [{
                    "text": '我是甄姬！ ',
                    "date": 1488117964495,
                    "name": "甄姬",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg"
                }],
                "user": [contact.getUserInfo('wxid_zhenji')]
            }
        ],
    officialMsg:[{
                    "text": '',
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }
    ]    
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})