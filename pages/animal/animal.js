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
      },
      {
        name: "狸克",
        description: "无人岛的创始人之一",
      },
      {
        name: "豆狸&粒狸",
        description: "活力四射的双胞胎兄弟",
      },
      {
        name: "傅达",
        description: "无人岛博物馆馆长",
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