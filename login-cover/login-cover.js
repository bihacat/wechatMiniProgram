// components/login-cover/login-cover.js
import util from "../../utils/util";

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        loginKey: {
            type: String,
            value: 'userinfo',
        },
        phoneKey: {
            type: String,
            value: 'phone',
        },
        showPhone: Boolean,
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    attached() {
        this.judgeShow();
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getUserInfo(e) {
            let that = this;
            util.login(e, function () {
                that.judgeShow();
            });
        },
        getPhoneNumber(e) {
            let that = this;
            wx.login({
              complete: (res) => {
                let code = res.code;
                console.log(e.detail);
                
                util.loginPhone({
                    code,
                    iv: e.detail.iv,
                    encryptedData: e.detail.encryptedData,
                }, function () {
                    that.judgeShow();
                })
              },
            })
        },

        judgeShow() {
            let userinfo = wx.getStorageSync(this.data.loginKey);
            this.setData({
                showLogin: userinfo.length == 0,
                showPhone: !userinfo[this.data.phoneKey] || userinfo[this.data.phoneKey].length==0,
            })
        },
    }
})
