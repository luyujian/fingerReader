// pages/home/list/cz/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        {
          image:"https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png",
          gzhName:"莫甘娜",
          articleTitle:"凯尔，你被自己的光芒变的盲目！",
          targetUrl:"https://mp.weixin.qq.com/s?__biz=MzIxMzEyNzE0MQ==&tempkey=MTAzNV9OcWNVZlB5N0I3UHhRUjVMODV6bnBUSGxmcjVlOC1udlJudWlka29WZl9pX3g2WVRUZXVNQjBWeEVBNlNtbTczUWVQVmJsal9KT3BDUnBjcGJ0VkZUaURrTFZKRXhjZnlrWHdiQ3VvblRaNm1QcTFtWGVBeXNkblRLXzU1WnZ0clFqOUMwLWpkNG9NVkxTTHZzRVN6VG5icGh5dWtiQVJveS1JY3N3fn4%3D&chksm=17bad82b20cd513d3809d05da301f070d4b94c0a0da08566e9bd019b3f0ebb92b6f7c279ed92#rd"
        },
        {
          image: "https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png",
          gzhName: "莫甘娜",
          articleTitle: "凯尔，你被自己的光芒变的盲目！",
          targetUrl: "https://mp.weixin.qq.com/s?__biz=MzIxMzEyNzE0MQ==&tempkey=MTAzNV9OcWNVZlB5N0I3UHhRUjVMODV6bnBUSGxmcjVlOC1udlJudWlka29WZl9pX3g2WVRUZXVNQjBWeEVBNlNtbTczUWVQVmJsal9KT3BDUnBjcGJ0VkZUaURrTFZKRXhjZnlrWHdiQ3VvblRaNm1QcTFtWGVBeXNkblRLXzU1WnZ0clFqOUMwLWpkNG9NVkxTTHZzRVN6VG5icGh5dWtiQVJveS1JY3N3fn4%3D&chksm=17bad82b20cd513d3809d05da301f070d4b94c0a0da08566e9bd019b3f0ebb92b6f7c279ed92#rd"
        }
      ]
  },

  /**
   * 
   */
  bindViewArticle:function(options) {
    console.log(options.currentTarget.dataset.targeturl)
    var targetUrl = encodeURIComponent(options.currentTarget.dataset.targeturl);
    wx.navigateTo({
      url: '../../view/index?source='+targetUrl,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})