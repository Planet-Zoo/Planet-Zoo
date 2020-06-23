// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const useropenid = wxContext.OPENID
  const itemname = event.name
  var result = false
  var tempList=await db.collection("Own").where(
    {
      openid:useropenid,
      name:itemname,
  }
  ).get({
    success:function(res){
      console.log(res)
    },
    fail:console.error
  })
  var L = tempList.data.length
  if(L!=0){
    result=true
  }
  return {
    exist:result
  }
}