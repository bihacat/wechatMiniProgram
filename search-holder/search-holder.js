// components/search-holder/search-holder.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        text: String,
        textcolor: {type: String, value: "#aaaaaa"},
        backgroundcolor: { type: String, value: "#EEF0F4", }
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
        tap() {
            this.triggerEvent('tap')
        },
    }
})
