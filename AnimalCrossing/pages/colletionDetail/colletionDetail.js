// pages/colletionDetail/colletionDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    checkName:"",
    place:"",
    time:"",
    condition:"",
    requirement:"",
    price:0,
    hemisphere:"查看北半球",
    month:[false,false,false,false,false,false,false,true,true,true,true,true],
    category:"",
    index:0,
  
  },
  change(e) {
    if(this.data.hemisphere=="查看北半球"){
      this.setData({hemisphere:"查看南半球"})
      // console.log(this.data.hemisphere)
    }else{
      this.setData({hemisphere:"查看北半球"})
      // console.log(this.data.hemisphere)
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
  // console.log(this.data.month)
  }
,

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
        
        tempList=res.result.detail.data
        that.setData({
          category:tempList[0].type
        })
        // console.log(tempList[0].type)
        if(that.data.category!="art"){
          var tempMonth = [false,false,false,false,false,false,false,false,false,false,false,false]
          var detailMonth = tempList[0].month
          if(detailMonth.length!=0){
          for(let i =0;i<detailMonth.length;i++){
            tempMonth[detailMonth[i]-1]=true
          }
        }
        that.setData({
          name : tempList[0].name,
          place:tempList[0].place,
          time:tempList[0].time,
          condition:tempList[0].condition,
          requirement:tempList[0].requirement,
          price :tempList[0].price,
          condition :tempList[0].condition,
          month:tempMonth
        })
      }else{
        // console.log(tempList)
        that.setData({
          name:tempList[0].name,
          realName:tempList[0].realName,
          hasFake:tempList[0].isFake,
          fakeFeat:tempList[0].feat,
        })
      }
      
      
      
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