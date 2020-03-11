// components/search-bar/search-bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        placeholder: String, // input的placeholder
        value: String, // input中的值
        tintcolor: String, // 搜索按钮的颜色
        textcolor: String, // input文字颜色
        holdercolor: {type: String, value: "#AAAAAA"}, // placeholder颜色
        backgroundcolor: {type: String, value: "#EEF0F4", }, // input背景色
        focus: Boolean, // input是否焦点
        autofocus: Boolean, // 是否自动焦点
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        searchInputing(e) {
            this.triggerEvent('input', {value: e.detail.value});
        },
        searchFocus(e) {
            this.triggerEvent('focus', {value: e.detail.value});
        },
        searchAction(e) {
            this.triggerEvent('search', {value: e.detail.value});
        },
        clearInputAction(e) {
            this.setData({
                focus: true,
            })
            this.triggerEvent('clear');
        }
    }
})
