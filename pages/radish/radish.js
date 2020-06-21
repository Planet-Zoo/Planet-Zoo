// pages/radish/radish.js
Page({
  data:{
    alltime:[
      {name:"周日上午",price:''},
      {name:"周一上午",price:''},
      {name:"周一下午",price:''},
      {name:"周二上午",price:''},
      {name:"周二下午",price:''},
      {name:"周三上午",price:''},
      {name:"周三下午",price:''},
      {name:"周四上午",price:''},
      {name:"周四下午",price:''},
      {name:"周五上午",price:''},
      {name:"周五下午",price:''},
      {name:"周六上午",price:''},
      {name:"周六下午",price:''},
    ],
    downtype: true,
    threestagetype:true,
    fourstagetype:true,
    wavetype:true,
    ispridict:false,
    pridicttime:''
  },
  inputtime(e){
    var index=e.currentTarget.dataset.operation;
    var path='alltime['+index+'].price';
    if(e.detail.value===""){
      this.setData({
        [path] : ''
      })
    }
    else{
       this.setData({
      [path] : e.detail.value
    })
    }
  },
  isdown(){
    var buyprice=this.data.alltime[0].price;
    for(var i=1;i<13;i++){
      if(this.data.alltime[i].price===''){
        break;
      }
      else{
        if(this.data.alltime[i].price>(0.93-0.03*i)*buyprice||this.data.alltime[i].price<(0.90-0.05*i)*buyprice){
          this.setData({
            downtype:false
          })
          break;
        }
      }
    }
  },
  iswawe(){
    var buyprice=this.data.alltime[0].price;
    var isdown_one=false;
    var isdown_two=false;
    var isdown_three=false;
    var isdown1=false;
    var isdown2=false;
    var iswawe2=false;
    var iswawe1=true;
    var downtime=0;
    for(var i=1;i<13;i++){
      if(this.data.alltime[i].price===''){
        break;
      }
      else{
        if(iswawe1){
          if(this.data.alltime[i].price<=0.8*buyprice&&this.data.alltime[i].price>=0.6*buyprice){
            isdown_one=true;
            downtime=downtime+1;
            isdown1=true;
            iswawe1=false;
          }
          else if(this.data.alltime[i].price>1.4*buyprice||this.data.alltime[i].price<0.6*buyprice){
            this.setData({
              wavetype:false
            })
            break;
          }
          else{}
        }
        else if(isdown1){
          if(isdown_one){
            if(this.data.alltime[i].price<=0.76*buyprice&&this.data.alltime[i].price>=0.5*buyprice){
              isdown_two=true;
              isdown_one=false;
              downtime=downtime+1;
            }
            else{
              this.setData({
                wavetype:false
              })
              break;
            }
          }
          else if(isdown_two){
            if(this.data.alltime[i].price<=0.72*buyprice&&this.data.alltime[i].price>=0.40*buyprice){
              isdown_two=false;
              isdown_three=true;
              downtime=downtime+1;
            }
            else if(this.data.alltime[i].price<=1.4*buyprice&&this.data.alltime[i].price>=0.9*buyprice){
              isdown_two=false;
              isdown1=false;
              iswawe2=true;
            }
            else{
              this.setData({
                wavetype:false
              })
              break;
            }
          }
          else{
            if(this.data.alltime[i].price<=1.4*buyprice&&this.data.alltime[i].price>=0.9*buyprice){
              isdown_three=false;
              isdown1=false;
              iswawe2=true
            }
            else{
              this.setData({
                wavetype:false
              })
              break;
            }
          }
        }
        else if(iswawe2){
          if(this.data.alltime[i].price<=0.8*buyprice&&this.data.alltime[i].price>=0.6*buyprice){
            isdown_one=true;
            downtime=downtime+1;
            isdown2=true;
            iswawe2=false;
          }
          else if(this.data.alltime[i].price>1.4*buyprice||this.data.alltime[i].price<0.6*buyprice){
            this.setData({
              wavetype:false
            })
            break;
          }
          else{}
        }
        else if(isdown2){
          if(isdown_one){
            if(this.data.alltime[i].price<=0.76*buyprice&&this.data.alltime[i].price>=0.5*buyprice){
              isdown_two=true;
              isdown_one=false;
              downtime=downtime+1;
            }
            else{
              this.setData({
                wavetype:false
              })
              break;
            }
          }
          else if(isdown_two){
            if(this.data.alltime[i].price<=0.72*buyprice&&this.data.alltime[i].price>=0.40*buyprice){
              isdown_two=false;
              isdown_three=true;
              downtime=downtime+1;
            }
            else if(this.data.alltime[i].price<=1.4*buyprice&&this.data.alltime[i].price>=0.9*buyprice){
              isdown_two=false;
              isdown2=false;
              iswawe3=true;
            }
            else{
              this.setData({
                wavetype:false
              })
              break;
            }
          }
          else{
            if(this.data.alltime[i].price<=1.4*buyprice&&this.data.alltime[i].price>=0.9*buyprice){
              isdown_three=false;
              isdown2=false;
            }
            else{
              this.setData({
                wavetype:false
              })
              break;
            }
          }
        }
        else{
          if(this.data.alltime[i].price>1.4*buyprice||this.data.alltime[i].price<0.9*buyprice){
            this.setData({
              wavetype:false
            })
            break;
          }
        }
      }
    }
    if(downtime>5){
      this.setData({
        wavetype:false
      })
    }
  },
  isthreestage(){
    var downtime=0
    var isdowning=true
    var isuping=false
    var up_one=false
    var up_two=false
    var up_three=false
    var wave_one=false
    var wave_two=false
    var wave_three=false
    var iswaving=false
    var buyprice=this.data.alltime[0].price
    for(var i=1;i<13;i++){
      if(this.data.alltime[i].price===''){
        break;
      }
      else{
        if(isdowning){
          if(this.data.alltime[i].price<=(0.93-0.03*i)*buyprice&&this.data.alltime[i].price>=(0.90-0.05*i)*buyprice){
            downtime=downtime+1;
          }
          else if(this.data.alltime[i].price>0.9*buyprice&&this.data.alltime[i].price<=1.4*buyprice){
            isdowning=false
            isuping=true
            up_one=true
          }
          else{
            this.setData({
              threestagetype:false
            })
            break
          }
        }
        else if(isuping){
          if(up_one){
            if(this.data.alltime[i].price<=2*buyprice&&this.data.alltime[i].price>=1.4*buyprice){
              up_one=false
              up_two=true
            }
            else{
              this.setData({
                threestagetype:false
              })
              break
            }
          }
          else if(up_two){
            if(this.data.alltime[i].price<=6*buyprice&&this.data.alltime[i].price>=2*buyprice){
              up_two=false
              up_three=true
            }
            else{
              this.setData({
                threestagetype:false
              })
              break
            }
          }
          else{
            if(this.data.alltime[i].price<=2*buyprice&&this.data.alltime[i].price>=1.4*buyprice){
              up_three=false
              isuping=false
              iswaving=true
              wave_one=true
            }
            else{
              this.setData({
                threestagetype:false
              })
              break
            }
          }
        }
        else{
          if(wave_one){
            if(this.data.alltime[i].price<=1.4*buyprice&&this.data.alltime[i].price>=0.9*buyprice){
              wave_one=false
              wave_two=true
            }
            else{
              this.setData({
                threestagetype:false
              })
              break
            }
          }
          else if(wave_two){
            if(this.data.alltime[i].price<=0.9*buyprice&&this.data.alltime[i].price>=0.4*buyprice){
              wave_two=false
              wave_three=true
            }
            else{
              this.setData({
                threestagetype:false
              })
              break;
            }
          }
          else{
            if(this.data.alltime[i].price<=0.9*buyprice&&this.data.alltime[i].price>=0.4*buyprice){
            }
            else{
              this.setData({
                threestagetype:false
              })
              break;
            }
          }
        }
      }
    }
    if(downtime>7){
      this.setData({
        threestagetype:false
      })
    }
  },
  isfourstage(){
    var isdowning=true
    var isuping=false
    var iswaving=false
    var downtime=0
    var up_one=false
    var up_two=false
    var up_three=false
    var up_four=false
    var up_five=false
    var wavetime=1
    var buyprice=this.data.alltime[0].price
    for(var i=1;i<13;i++){
      if(this.data.alltime[i].price===''){
        break;
      }
      else{
        if(isdowning){
          if(this.data.alltime[i].price>=(0.45-0.05*i)*buyprice&&this.data.alltime[i].price<(0.93-0.03*i)*buyprice){
            downtime=downtime+1;
          }
          else if(this.data.alltime[i].price>=0.9*buyprice&&this.data.alltime[i].price<=1.4*buyprice){
            isuping=true
            isdowning=false
            up_one=true
          }
          else{
            this.setData({
              fourstagetype:false
            })
            break;
          }
        }
        else if(isuping){
          if(up_one){
            if(this.data.alltime[i].price>=0.9*buyprice&&this.data.alltime[i].price<=1.4*buyprice){
              up_two=true
              up_one=false
            }
            else{
              this.setData({
                fourstagetype:false
              })
              break;
            }
          }
          else if(up_two){
            if(this.data.alltime[i].price>=1.4*buyprice&&this.data.alltime[i].price<=1.9*buyprice){
              up_two=false
              up_three=true
            }
            else{
              this.setData({
                fourstagetype:false
              })
              break;
            }
          }
          else if(up_three){
            if(this.data.alltime[i].price>=1.4*buyprice&&this.data.alltime[i].price<=2*buyprice){
              up_four=true
              up_three=false
            }
            else{
              this.setData({
                fourstagetype:false
              })
              break;
            }
          }
          else if(up_four){
            if(this.data.alltime[i].price>=1.4*buyprice&&this.data.alltime[i].price<=1.9*buyprice){
              up_four=false
              up_five=true
            }
            else{
              this.setData({
                fourstagetype:false
              })
              break;
            }
          }
          else{
            if(this.data.alltime[i].price>=(0.45-0.05*wavetime)*buyprice&&this.data.alltime[i].price<=(0.93-0.03*wavetime)*buyprice){
              up_five=false
              isuping=false
              iswaving=true
              wavetime=wavetime+1
            }
            else{
              this.setData({
                fourstagetype:false
              })
              break;
            }
          }
        }
        else{
          if(this.data.alltime[i].price<(0.45-0.05*wavetime)*buyprice||this.data.alltime[i].price>(0.93-0.03*wavetime)*buyprice){
            this.setData({
              fourstagetype:false
            })
            break
          }
          else{
            wavetime=wavetime+1
          }
        }
      }
    }
    if(downtime>7){
      this.setData({
        fourstagetype:false
      })
    }
  },
  pridict(){
    var temp=''
    if(this.data.alltime[0].price===0){
      wx.showToast({
        title: '只有买入价不为空才能进行有效的预测哦',
        icon:"none",
        duration:2000
      })
    }
    else{
      for(var i=1;i<13;i++){
        if(this.data.alltime[i].price!=0){
          temp=this.data.alltime[i].name;
        }
        else{
          this.setData({
            pridicttime:temp
          })
          break;
        }
      }
      this.setData({
        wavetype:true,
        downtype:true,
        threestagetype:true,
        fourstagetype:true
      })
      this.isdown();
      this.iswawe();
      this.isthreestage();
      this.isfourstage();
      this.setData({
        ispridict:true
      })
    }
  },
  reset(){
    for(var i=0;i<13;i++){
      var temp='alltime['+i+'].price'
      this.setData({
        [temp]:''
      })
    }
  }
    
  })