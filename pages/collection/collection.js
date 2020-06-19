// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:["鱼类","昆虫","化石","艺术品"],
    tabCur : 0,
    fishList:[
      {
        name:"红目鲫",
        price:900
      }
    ],
    insectList:[
      {
        name:"白粉蝶",
        price:160
      },
    ],
    fossilList:[

    ],
    artList:[

    ]



  },

  tabSelect(e){
    this.setData({
      tabCur:e.currentTarget.dataset.id ,
    })
  },  
  toDetail(e){
    var app=getApp()
    var c = e.currentTarget.dataset.category
    var index = e.currentTarget.dataset.id
    app.globalData.index= index
    switch(c){
      case "insect":
        app.globalData.category = "insect"
        break
      case "fish":
        app.globalData.category = "fish"
        break
      case "fossil":
        app.globalData.category = "fossil"
        break
      case "art":
        app.globalData.category = "art"
        break
    }
    wx.navigateTo({
      url: '/pages/colletionDetail/colletionDetail',
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