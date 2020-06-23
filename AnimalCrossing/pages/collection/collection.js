// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:["鱼类","昆虫","艺术品"],
    tabCur : 0,
    notSearch:true,
    searchList:[],
    searchCategory:"",
   fishList:[],
    insectList:[],
    artList:[],

  },

  tabSelect(e){
    this.setData({
      tabCur:e.currentTarget.dataset.id ,
    })
  },  
  toDetail(e){
    var app=getApp()
    var name = e.currentTarget.dataset.name
    var category = e.currentTarget.dataset.category
    app.globalData.detailName = name
    // console.log(app.globalData.detailName)
    if(category!="art"){
    wx.navigateTo({
      url: '/pages/colletionDetail/colletionDetail',
    })
  }else{
    wx.navigateTo({
      url: '/pages/artDetail/artDetail',
    })
  }
  },
  bindSearch(e){
     var str = e.detail.value
     var tempList =[]
     var result = []
    
     if(str.length!=0){
      this.setData({
        searchList:[],
        notSearch:false,
      })
     switch(this.data.tabCur){
      case 0:
        tempList = this.data.fishList
        this.setData({
          searchCategory:"fish"
        })
        break
      case 1:
        tempList = this.data.insectList
        this.setData({
          searchCategory:"insect"
        })
        break
      case 2:
        tempList=this.data.artList
        this.setData({
          searchCategory:"art"
        })
        break
     }
     
     for(let i=0;i<tempList.length;i++){
       if(tempList[i].name.indexOf(str)!=-1){
         result.push(tempList[i])
       }
     }
     this.setData({
       searchList:result
     })
     console.log(this.data.searchList)
    }else{
      this.setData({
        notSearch:true
      })
    }
    
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.cloud.callFunction({
      name:"getCollection",
      data:{
      },
      success:function(res){
       
        console.log(res.result.insectList)
        that.setData({
          insectList:res.result.insectList,
          fishList:res.result.fishList,
          artList:res.result.artList
        })
      },
      fail:console.error
    })
    // console.log(that.data.insectList)
    // this.setData({
    //   fishList:[]
    // })
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