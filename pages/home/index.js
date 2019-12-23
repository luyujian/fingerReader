// pages/home/index.js
const app = getApp();
const database = require('../../store/index.js')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList:[],
    articlelist:[],
    gridCol: 3,
    skin: false
  },
  onLoad:function(options){
    this.setData({
      iconList: database["category"],
      articlelist: database["topArticle"]
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: './list/cz/index'

    })
  },
  bindViewArticle: function (options) {
    console.log(options.currentTarget.dataset.targeturl)
    var targetUrl = encodeURIComponent(options.currentTarget.dataset.targeturl);
    wx.navigateTo({
      url: './view/index?source=' + targetUrl,
    })
  }
})