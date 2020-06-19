// pages/colletionDetail/colletionDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    place:"",
    time:"",
    condition:"",
    requirement:"",
    price:0,
    hemisphere:"查看北半球",
    month:[false,false,false,false,false,false,false,true,true,true,true,true],
    category:"",
    index:0,
    fishList:[
      {
        name:"红目鲫",
        place:"河流",
        time:"全天",
        size:"小",
        price:900,
        requirement:"无",
        month:[4,5,6,7,8,9,10,11]
      }

    ],
    insectList:[
      {
        name:"白粉蝶",
        place:"树上、椰子树",
        time:"全天",
        price:0,
        condition:"非雨雪天气",
        requirement:"无",
        month:[1,2,3,4,5,6,9,10,11,12]
      },
    
    ],
    fossilList:[

    ],
    artList:[

    ]
  },
  change(e) {
    if(this.data.hemisphere=="查看北半球"){
      this.setData({hemisphere:"查看南半球"})
      console.log(this.data.hemisphere)
    }else{
      this.setData({hemisphere:"查看北半球"})
      console.log(this.data.hemisphere)
      
    }
    var tempList=[false,false,false,false,false,false,false,false,false,false,false,false]
    var temp = this.data.month
    for(let i=0;i<12;i++){
      if(temp[i]==true){
      tempList[(i+6)%12]=true
    }
    this.setData({
      month : tempList
    })
   
   
  }
  console.log(this.data.month)
  }
,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app=getApp()
    console.log(app.globalData.category)
    this.setData({
      index : app.globalData.detailIndex,
      category : app.globalData.category,
    })
    var tempList=[]
    console.log(this.data.category)
    switch(this.data.category){
      case "fish":
        tempList=this.data.fishList
        console.log("fish")
        break
      case "insect":
        tempList=this.data.insectList
        console.log("insect")
        break
      case "fossilList":
        tempList=this.data.fossilList
        console.log("fossilList")
        break
      case "art":
        tempList=this.data.artList
        console.log("art")
        break
    }
    console.log(tempList)
    this.setData({
      name : tempList[this.data.index].name,
      place:tempList[this.data.index].place,
      time:tempList[this.data.index].time,
      condition:tempList[this.data.index].condition,
      requirement:tempList[this.data.index].requirement,
      price :tempList[this.data.index].price,
      condition :tempList[this.data.index].condition
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