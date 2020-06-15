// pages/animal/animal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    list:[
      {
        name: "阿龙",
        description: "名叫阿龙的小鳄鱼",
      },
      {
        name: "西施惠",
        description: "外表温柔却内心叛逆的美少女",
      }
    ]
  },

  along:function(e){
    var app = getApp();
    app.globalData.animalIndex = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/amimalDetail/animalDetail',
    })
  }
})