// AnimalCrossing/pages/artDetail/artDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    checkName:"",
    realName:"",
    category:"",
    index:0,
    checked:false
  },
  switchOwn(e){
    var isChange = e.detail.value
    this.setData({
      checked:isChange
    })
    var that = this
    wx.cloud.callFunction({
      name:"changeOwn",
      data:{
        name:that.data.name,
        own:that.data.checked
      },
      success:function(res){
        console.log(res)
      },
      fail:console.error
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var app=getApp()
    this.setData({
      checkName:app.globalData.detailName
    })
    var tempList=[]
    wx.cloud.callFunction({
      name:"getDetail",
      data:{
        name:that.data.checkName
      },
      success:function(res){
        console.log(res)
        tempList=res.result.detail.data
        that.setData({
          category:tempList[0].type
        })
        that.setData({
          name:tempList[0].name,
          realName:tempList[0].realName,
          hasFake:tempList[0].isFake,
          fakeFeat:tempList[0].feat,
        })
      },
      fail:console.error
    })


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