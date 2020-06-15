// pages/amimalDetail/animalDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"阿龙",
    sex:"男",
    specie:"鳄鱼",
    tag:"鱼跃龙门",
    animalIndex: 0,
    allAnimalInformation: [
      {
        name:"阿龙",
        sex:"男",
        specie: "鳄鱼",
        tag:"鱼跃龙门"
      },
      {
        name:"西施惠",
        sex:"女",
        specie:"狗",
        tag:"未知",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    var index = app.globalData.animalIndex;
    this.setData({
      animalIndex: index,
      name: this.data.allAnimalInformation[index].name,
      sex: this.data.allAnimalInformation[index].sex,
      specie: this.data.allAnimalInformation[index].specie,
      tag: this.data.allAnimalInformation[index].tag
    });
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