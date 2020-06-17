// pages/animal/animal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    list:[
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
      },
      {
        name: "傅珂",
        description: "只有在流星雨夜晚出没的神秘少女",
      },
      {
        name: "幽幽",
        description: "无比胆小的幽灵",
      },
      {
        name: "K.K.",
        description: "吸粉无数的偶像歌手",
      },
      {
        name: "薛革",
        description: "无人岛头号良心摊贩",
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