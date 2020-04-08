// module/stepper.js
import util from "../../utils/util";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max: String,
    min: String,
    init: {
      type: String,
      observer: function (newVal, oldVal, changedPath) {
        var maxInt = parseInt(this.properties.max)
        var minInt = parseInt(this.properties.min)
        var newInt = parseInt(newVal)
        var isMin = newInt <= minInt
        var isMax = newInt >= maxInt
        this.setData({
          _count: newVal,
          _isMin: isMin,
          _isMax: isMax
        })
      }
    },
  },


  ready: function () {
    var count = parseInt(this.data._count)
    this.triggerEvent('init', { 'count': count })
  },

  /**
   * 组件的初始数据
   */
  data: {
    _count: 1,
    _isMin: true,
    _isMax: false,
    _sub_src: "sub_l.png",
    _add_src: "add_d.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _countChange(e) {
      let count = e.detail.value;
      let min = this.properties.min;
      let _sub_src = "sub_d.png";
      let isMin = this.data._isMin;
      if (count<=min) {
        count = min
        _sub_src = "sub_l.png"
        isMin = true
      }

      this.setData({
        _count: count,
        _isMin: isMin,
        _sub_src: _sub_src,
      })
      this.triggerEvent('change', {'count': count}, {})
      return count;
    },
    _sub: function () {
      var count = parseInt(this.data._count) - 1;
      var min = parseInt(this.properties.min)
      var isMin = false;
      let _sub_src = "sub_d.png"
      if (count <= min) {
        count = min
        isMin = true
        _sub_src = "sub_l.png"
      }
      this.setData({
        _count: count,
        _isMin: isMin,
        _isMax: false,
        _sub_src: _sub_src,
        _add_src: "add_d.png",
        value: count,
      })
      this.triggerEvent('change', { 'count': count }, {})
    },
    _add: function () {
      var count = parseInt(this.data._count) + 1
      var max = parseInt(this.properties.max)
      var isMax = false;
      let _add_src = "add_d.png";
      if (count >= max) {
        count = max;
        isMax = true;
        _add_src = "add_l.png";
      }
      this.setData({
        _count: count,
        _isMax: isMax,
        _isMin: false,
        _add_src: _add_src,
        _sub_src: "sub_d.png",
        value: count,
      })
      this.triggerEvent('change', { 'count': count }, {})
    },
  }
})
