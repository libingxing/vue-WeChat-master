import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)  //将vue-router挂载到vue上面;

//app整体由店面页和店内页组成 暂时并没有用到嵌套路由
const routes = [{
        path: '/',
        name: "微信",
        components: {
          "default":  resolve => require(["../components/wechat/wechat.vue"], resolve)
        }
    }, 
    {
     path:'/fujinren',
     name: "附近的人",
     components: {
          "subPage":  resolve => require(["../components/fujinren/fujinren.vue"], resolve)
        }
    }, 
    {
     path:'/fujinren/chat',
     name: "",
     components: {
          "subPage":  resolve => require(["../components/fujinren/chat.vue"], resolve)
        }
    },
    {
     path:'/fujinren/dialog',
     name: "",
     components: {
          "subPage":  resolve => require(["../components/fujinren/dialog.vue"], resolve)
        }
    },
    {
        path: '/wechat/dialogue',
        name: "",
        components: {
            "subPage": resolve => require(["../components/wechat/dialogue.vue"], resolve)
        }
    },
    {
        path: '/wechat/details',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/details.vue"], resolve)
        }
    },
    {
        path: '/fujinren/wechat/dialogue',
        name: "",
        components: {
            "subPage": resolve => require(["../components/wechat/dialogue.vue"], resolve)
        }
    },
    {
        path: '/wehchat/new-friends/mobile-contacts',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/mobile-contacts.vue"], resolve)
        }
    },
    {
        path: '/wehchat/add-friend',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/add-friend.vue"], resolve)
        }
    },
    {
        path: '/wechat/dialogue/dialogue-info',
        name: "",
        components: {
            "subPage": resolve => require(["../components/wechat/dialogue-info.vue"], resolve)
        }
    },
    {
        path: '/wechat/dialogue/dialogue-detail',
        name: "",
        components: {
            "subPage": resolve => require(["../components/wechat/dialogue-detail.vue"], resolve)
        }
    },
    {
        path: '/contact',
        name: "通讯录",
        components: {
            "default": resolve => require(["../components/contact/contact.vue"], resolve)
        }    
    },
    {
        path: '/contact/add-friend',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/add-friend.vue"], resolve)
        }
    },
    {
        path: '/contact/dialogue',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/dialogue.vue"], resolve)
        }
    },
    {
        path: '/contact/details',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/details.vue"], resolve)
        }
    },
     {
        path: '/contact/dialogue/dialogue-detail',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/dialogue-detail.vue"], resolve)
        }
    },
    {
        path: '/contact/dialogue/details',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/details.vue"], resolve)
        }
    },
    {
      path: '/contact/dialogue',
      name: '',
      components: {
            "subPage": resolve => require(["../components/contact/dialogue.vue"], resolve)
      }
    },
    {
        path: '/contact/new-friends/mobile-contacts',
        name: "通讯录朋友",
        components: {
            "subPage": resolve => require(["../components/contact/mobile-contacts.vue"], resolve)
        }
    },
    {
        path: '/contact/official-accounts',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/official-accounts.vue"], resolve)
        }
    },
    {
        path: '/contact/official-accounts/officialDetail',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/officialDetail.vue"], resolve)
        }
    },
    {
        path: '/contact/official-accounts/official-content',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/official-content.vue"], resolve)
        }
    },
    {
        path: '/contact/group-list',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/group-list.vue"], resolve)
        }
    },
    {
        path: '/contact/new-friends',
        name: "",
        components: {
            "subPage": resolve => require(["../components/contact/new-friends.vue"], resolve)
        }
    }, 
    {
        path: '/contact/tags',
        name: "新的朋友",
        components: {
            "subPage": resolve => require(["../components/contact/tags.vue"], resolve)
        }
    }, 
    {
        path: '/explore',
        name: "发现",
        components: {
            "default": resolve => require(["../components/explore/explore.vue"], resolve)
        }
    }, 
    {
        path: '/explore/moments',
        name: "朋友圈",
        components: {
            "subPage": resolve => require(["../components/explore/moments.vue"], resolve)
        }
    },
    {
        path: '/explore/saoyisao',
        name: "",
        components: {
            "subPage": resolve => require(["../components/explore/saoyisao.vue"], resolve)
        }
    }, 
     {
        path: '/explore/yaoyiyao',
        name: "",
        components: {
            "subPage": resolve => require(["../components/explore/yaoyiyao.vue"], resolve)
        }
    },
    {
        path: '/explore/yaoyiyao/setting',
        name: "",
        components: {
            "subPage": resolve => require(["../components/explore/setting.vue"], resolve)
        }
    },
    {
        path: '/explore/yaoyiyao/setting6',
        name: "",
        components: {
            "subPage": resolve => require(["../components/explore/setting6.vue"], resolve)
        }
    },
    {
        path: '/explore/yaoyiyao/setting5',
        name: "",
        components: {
            "subPage": resolve => require(["../components/explore/setting5.vue"], resolve)
        }
    },
    {
        path: '/explore/yaoyiyao/setting4',
        name: "",
        components: {
            "subPage": resolve => require(["../components/explore/setting4.vue"], resolve)
        }
    },
    {
        path: '/explore/piaoliupin',
        name: "",
        components: {
            "subPage": resolve => require(["../components/explore/piaoliupin.vue"], resolve)
        }
    },
    {
        path: '/self',
        name: "我",
        components:{
            "default": resolve => require(["../components/self/self.vue"], resolve)
        } 
    },
    {
        path: '/self/album',
        components: { 
             "subPage": resolve => require(["../components/common/album.vue"], resolve)
              }
    },
     {
        path: '/self/album/newProduct',
        components: { 
             "subPage": resolve => require(["../components/self/settings/newProduct.vue"], resolve)
              }
    },
    {
        path: '/self/album/expression',
        components: { 
             "subPage": resolve => require(["../components/self/settings/expression.vue"], resolve)
              }
    },
    {
        path: '/self/card',
        components: { 
            "subPage": resolve => require(["../components/self/settings/card.vue"], resolve) 
        }
    }, 
    {
        path: '/self/cardDetail',
        components: { 
            "subPage": resolve => require(["../components/self/settings/cardDetail.vue"], resolve) 
        }
    }, 
    {
        path: '/self/card/cardMes',
        components: { 
            "subPage": resolve => require(["../components/self/settings/cardMes.vue"], resolve) 
        }
    }, 
    {
        path: '/self/settings',
        components: { 
            "subPage": resolve => require(["../components/self/settings.vue"], resolve) 
        }
    }, 
    {
        path: '/self/settings/security',
        components: {
         "subPage": resolve => require(["../components/self/settings/security.vue"], resolve) 
       }
    },
     {
        path: '/self/settings/security/moreSecurity',
        components: {
         "subPage": resolve => require(["../components/self/settings/moreSecurity.vue"], resolve) 
       }
    },
    {
        path: '/self/settings/security/loadSetting',
        components: {
         "subPage": resolve => require(["../components/self/settings/loadSetting.vue"], resolve) 
       }
    },
    {
        path: '/self/settings/notice',
        components: { 
            "subPage": resolve => require(["../components/self/settings/notice.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/notice/stopFuncMes',
        components: { 
            "subPage": resolve => require(["../components/self/settings/stopFuncMes.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/privacy',
        components: {
         "subPage": resolve => require(["../components/self/settings/privacy.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/privacy/addMeType',
        components: {
         "subPage": resolve => require(["../components/self/settings/addMeType.vue"], resolve) 
        }
    },
     {
        path: '/self/settings/privacy/contactBlackList',
        components: {
         "subPage": resolve => require(["../components/self/settings/contactBlackList.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/privacy/allowExploreRange',
        components: {
         "subPage": resolve => require(["../components/self/settings/allowExploreRange.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/privacy/forbidden1',
        components: {
         "subPage": resolve => require(["../components/self/settings/forbidden1.vue"], resolve) 
        }
    },
     {
        path: '/self/settings/privacy/forbidden1/dialogue',
        components: {
         "subPage": resolve => require(["../components/self/settings/dialogue.vue"], resolve) 
        }
    },  
    {
        path: '/self/settings/privacy/forbidden1/dialogue/dialogue-detail',
        components: {
         "subPage": resolve => require(["../components/self/settings/dialogue-detail.vue"], resolve) 
        }
    },   
    {
        path: '/self/settings/common',
        components: { 
            "subPage": resolve => require(["../components/self/settings/common.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/aboutWeChat',
        components: { 
            "subPage": resolve => require(["../components/self/settings/aboutWeChat.vue"], resolve) 
        }
    },
     {
        path: '/self/settings/aboutWeChat/tousu',
        components: { 
            "subPage": resolve => require(["../components/self/settings/tousu.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/language',
        components: { 
            "subPage": resolve => require(["../components/self/settings/language.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/fontSize',
        components: { 
            "subPage": resolve => require(["../components/self/settings/fontSize.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/background',
        components: { 
            "subPage": resolve => require(["../components/self/settings/background.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/expression',
        components: { 
            "subPage": resolve => require(["../components/self/settings/expression.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/photo-video',
        components: { 
            "subPage": resolve => require(["../components/self/settings/photo-video.vue"], resolve) 
        }
    },
     {
        path: '/self/settings/common/function',
        components: { 
            "subPage": resolve => require(["../components/self/settings/function.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/function/QQoffline',
        components: { 
            "subPage": resolve => require(["../components/self/settings/QQoffline.vue"], resolve) 
        }
    },
     {
        path: '/self/settings/common/function/QQmailbox',
        components: { 
            "subPage": resolve => require(["../components/self/settings/QQmailbox.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/function/audionote',
        components: { 
            "subPage": resolve => require(["../components/self/settings/audionote.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/function/piaoliuping',
        components: { 
            "subPage": resolve => require(["../components/self/settings/piaoliuping.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/function/fujinren',
        components: { 
            "subPage": resolve => require(["../components/self/settings/fujinren.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/function/yaoyiyao',
        components: { 
            "subPage": resolve => require(["../components/self/settings/yaoyiyao.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/function/qunfazhushou',
        components: { 
            "subPage": resolve => require(["../components/self/settings/qunfazhushou.vue"], resolve) 
        }
    },
     {
        path: '/self/settings/common/function/shiping',
        components: { 
            "subPage": resolve => require(["../components/self/settings/shiping.vue"], resolve) 
        }
    },
     {
        path: '/self/settings/common/function/contactSyn',
        components: { 
            "subPage": resolve => require(["../components/self/settings/contactSyn.vue"], resolve) 
        }
    },
     {
        path: '/self/settings/common/function/tencentNews',
        components: { 
            "subPage": resolve => require(["../components/self/settings/tencentNews.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/function/voiceInput',
        components: { 
            "subPage": resolve => require(["../components/self/settings/voiceInput.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/common/function/wechatPlay',
        components: { 
            "subPage": resolve => require(["../components/self/settings/wechatPlay.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/laboratory',
        components: { 
            "subPage": resolve => require(["../components/self/settings/laboratory.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/souyisou',
        components: { 
            "subPage": resolve => require(["../components/self/settings/souyisou.vue"], resolve) 
        }
    },
    {
        path: '/self/settings/kanyikan',
        components: { 
            "subPage": resolve => require(["../components/self/settings/kanyikan.vue"], resolve) 
        }
    },
    {
        path: '/self/profile',
        components: { 
         "subPage": resolve => require(["../components/common/profile.vue"], resolve) 
        }
    },
    {
        path: '/self/profile/my-qrcode',
        components: { 
            "subPage": resolve => require(["../components/self/my-qrcode.vue"], resolve) 
        }
    },
    {
        path: '/self/xiangce',
        components: { 
         "subPage": resolve => require(["../components/self/settings/xiangce.vue"], resolve) 
        }
    },
]
export default new Router({
    mode:'history',   //去除路由路径中的#;
    base: "/",        //根路径换名;
    routes: routes
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }

})