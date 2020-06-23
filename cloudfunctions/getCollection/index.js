// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var result = []
  const insect = await db.collection('collection').where(
    {
      type:"insect"
    }
  ).get({
    success: function(res){
      console.log(res)
    }
  })
  const fish = await db.collection('collection').where(
    {
      type:"fish"
    }
  ).get({
    success: function(res){
      console.log(res)
    }
  })
  const art = await db.collection('collection').where(
    {
      type:"art"
    }
  ).get({
    success: function(res){
      console.log(res)
    }
  })
  insectResult=insect.data
  fishResult=fish.data
  artResult = art.data
  return {
    insectList:insectResult,
    fishList:fishResult,
    artList:artResult
  }
}