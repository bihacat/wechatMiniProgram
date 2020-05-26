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
            console.log(e);
            if (e.detail.errMsg.indexOf("ok") == -1) {
                return;
            }
            wx.showLoading();
            let that = this;
            util.login(e, function () {
                wx.hideLoading();
                wx.showToast({
                  title: '登录成功',
                })
                that.judgeShow();
                that.triggerEvent('complete');
            });
        },
        getPhoneNumber(e) {
            
            let that = this;
            wx.login({
              complete: (res) => {
                let code = res.code;
                console.log(e.detail);
                wx.showLoading();
                util.loginPhone({
                    code,
                    iv: e.detail.iv,
                    encryptedData: e.detail.encryptedData,
                }, function () {
                    wx.showLoading();
                    that.judgeShow();
                })
              },
            })
        },

        judgeShow() {
            let userinfo = wx.getStorageSync(this.data.loginKey);
            this.setData({
                showLogin: userinfo.length == 0,
            })
            if (this.data.showPhone) {
                this.setData({
                    showPhone: !userinfo[this.data.phoneKey] || userinfo[this.data.phoneKey].length==0,
                })
            }
        },
    }
})
