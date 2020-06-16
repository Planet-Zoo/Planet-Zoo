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
    birthday: "",
    workExpe: "",
    funStory: "",
    animalIndex: 0,
    allAnimalInformation: [
      {
        name:"阿龙",
        sex:"男",
        specie: "鳄鱼",
        tag:"鱼跃龙门",
        birthday: "",
        workExpe: "暂无",
        funStory: ""
      },
      {
        name:"西施惠",
        sex:"女",
        specie:"狗",
        tag:"未知",
        birthday: "12月20日",
        workExpe: "无人岛公所兢兢业业的职员，全天候上班",
        funStory: "西施惠从小就与弟弟西施德住在一起，虽然西施惠在人们眼中一直都是温柔的样子，但她弟弟对她的评价却是“挺叛逆的”。\n根据西施惠自己透露，她实际上是近视的，而在平时工作中会戴隐形眼镜。她偶尔会去旅行，并且“方向感很差”，甚至会在市政厅前迷路。"
      },
      {
        name: "狸克",
        sex: "男",
        specie: "狸猫",
        tag: "未知",
        birthday: "5月30日",
        workExpe: "狸克作为无人岛的创始人之一，会在玩家刚刚登上无人岛时对玩家进行引导，平时玩家可以在无人岛的服务中心找狸克办理各种服务，包括建造房屋、建造桥梁和坡道、更改基础设置以及房屋建设等。",
        funStory :"狸克创办的狸克公司，主导了游戏中的无人岛开荒计划，让玩家有机会开始新的旅程。狸克一直以乐善好施的商人形象示人，他将自己的大部分盈利都捐给了慈善机构。"
      },
      {
        name:"豆狸&粒狸",
        sex: "男",
        specie :"狸猫",
        tag: "未知",
        birthday: "6月7日",
        workExpe: "豆狸和粒狸最早是狸克的小助手，在无人岛的商店开张后，兄弟俩在商店找到一份兼职，玩家可以找他们收购道具以及购买大头菜。",
        funStory: "豆狸和粒狸是狸克的侄子。可爱的外形以及活泼的性格让他们俩收到了全体岛民的一致喜爱。",
      },
      {
        name: "傅达",
        sex: "男",
        specie: "猫头鹰",
        tag: "未知",
        birthday: "9月24日",
        workExpe: "傅达是一位声名远播的古生物学家，在玩家收集到15种不同的展品后，傅达会帮助玩家建造博物馆并担任馆长一职。傅达还会好心的帮助玩家鉴定发掘出的化石",
        funStory: "作为一只猫头鹰，傅达却对昆虫类的生物有着莫名的厌恶。 作为一名名声赫赫的古生物学家，傅达对化石以及鱼类生物有着很深的研究，他的梦想是有朝一日能在博物馆展出雷龙化石。 唯一的缺点是总是让人问一句答十句。",
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
      tag: this.data.allAnimalInformation[index].tag,
      birthday: this.data.allAnimalInformation[index].birthday,
      workExpe: this.data.allAnimalInformation[index].workExpe,
      funStory: this.data.allAnimalInformation[index].funStory
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