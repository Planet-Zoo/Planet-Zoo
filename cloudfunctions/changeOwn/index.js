// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID
  const name = event.name
  const own = event.own
  var result = ""
  if(own){
   db.collection("Own").add({
    data:{
      openid : openid,
      name: name,
    },
    success:function(res){
      console.log(res)
      // result=res
    },
    fail:console.error
    })
  }else{
      db.collection("Own").where({
        openid:openid,
        name:name
      }).remove({
        success: function(res) {
          result = "删除成功"
          console.log(res)
        },
        fail:console.error
      })
    }
  return {
    result:result
  }
}