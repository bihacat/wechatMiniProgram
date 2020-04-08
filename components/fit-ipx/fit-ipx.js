// components/fit-ipx/fit-ipx.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        isIpx: false,
    },

    attached() {
        var systemInfo = wx.getSystemInfoSync();
        console.log(systemInfo.safeArea.top == 44 ? 'isIpx' : 'notIpx')
        if (systemInfo.safeArea.top == 44) {
            this.setData({
                isIpx: true,
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
