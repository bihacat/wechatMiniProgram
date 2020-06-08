// components/double-slider/double-slider.js
const init_min_right = 30;
const init_max_left = 30;
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 最小值, 同slider
        min: { 
            type: Number,
            value: 0,
        },
        // 最大值, 同slider
        max: {
            type: Number,
            value: 100,
        },
        // 每一步的大小
        step: {
            type: Number,
            value: 1,
        },
    },

    observers: {
        "min"(min) {
            this.setData({
                min_value: min,
                max_min: min,
            })
        },
        "max"(max) {
            this.setData({
                max_value: max,
                min_max: max,
            })
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        min_value: 0, // 小滑块的值
        max_value: 100, // 大滑块的值
        min_max: 100, // 小滑块的最大值
        max_min: 0, // 大滑块的最小值
        min_right: init_min_right, // 小滑块的右位置
        max_left: init_max_left,// 大滑块的左位置
    },

    /**
     * 组件的方法列表
     */
    methods: {
        minchange(e) {
            this.getTheWidth();
            
            let value = e.detail.value;
            // 动态改变最大值滑块的left值,确保不会超出左侧滑块,126是反复试出来的值
            
            let max_left = init_max_left + value/this.data.max*(this.data.screenWidth-66);
            this.setData({
                min_value: value,
                max_left,
                max_min: value,
            });
            this.triggerEvent("changing", {min: this.data.min_value, max: this.data.max_value});
        },

        maxchange(e) {
            this.getTheWidth();
            let value = e.detail.value;
            // 动态改变小滑块的right值,确保不会超出右侧滑块,126是反复试出来的值
            let min_right = init_min_right + (this.data.max-value)/this.data.max*(this.data.screenWidth-66);
            this.setData({
                max_value: value,
                min_max: value,
                min_right,
            });
            this.triggerEvent("changing", {min: this.data.min_value, max: this.data.max_value});
        },

        getTheWidth() {
            if (!this.data.screenWidth) {
                let query = this.createSelectorQuery();
                let that = this;
                query.select('.double-slider-container').boundingClientRect(res=>{
                    console.log(res);
                    that.setData({
                        screenWidth: res.width,
                    })
                }).exec();
            }
        },
    },
})
