// pages/flower/flower.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:[{
      title:'无法杂交',
      name:'gray'
    }],
    flowerArray: [
      ["波斯菊", "菊花", "玫瑰", "银莲花", "郁金香", "三色堇", "风信子", "百合"],
      ["红色", "黄色", "白色", "橙色", "粉色", "黑色"],
      ["红色", "黄色", "白色", "橙色", "粉色", "黑色"]
    ],
    objectFlowerArray: [
      [{
          id: 0,
          name: "波斯菊"
        },
        {
          id: 1,
          name: "菊花"
        },
        {
          id: 2,
          name: "玫瑰"
        },
        {
          id: 3,
          name: "银莲花"
        },
        {
          id: 4,
          name: "郁金香"
        },
        {
          id: 5,
          name: "三色堇"
        },
        {
          id: 6,
          name: "风信子"
        },
        {
          id: 7,
          name: "百合"
        },
      ],
      [{
          id: 0,
          name: "红色"
        },
        {
          id: 1,
          name: "黄色"
        },
        {
          id: 2,
          name: "白色"
        },
        {
          id: 3,
          name: "橙色"
        },
        {
          id: 4,
          name: "粉色"
        },
        {
          id: 5,
          name: "黑色"
        }
    
      ],
      [{
        id: 0,
        name: "红色"
        },
        {
          id: 1,
          name: "黄色"
        },
        {
          id: 2,
          name: "白色"
        },
        {
          id: 3,
          name: "橙色"
        },
        {
          id: 4,
          name: "粉色"
        },
        {
          id: 5,
          name: "黑色"
        }
      ],
    ],
    flowerIndex: [0, 0, 0],
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      flowerIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('列', e.detail.column, '，值', e.detail.value);
    var data = {
      flowerArray: this.data.flowerArray,
      flowerIndex: this.data.flowerIndex
    };
    data.flowerIndex[e.detail.column] = e.detail.value;
    switch(e.detail.column){
      case 0:
        switch(data.flowerIndex[0]){
          case 0:
            data.flowerArray[1] = ["红色", "黄色", "白色", "橘色", "粉色", "黑色"];
            data.flowerArray[2] = ["红色", "黄色", "白色", "橘色", "粉色", "黑色"];
            break;
          case 1:
            data.flowerArray[1] = ["红色", "黄色", "白色", "紫色", "粉色", "绿色","黄色二代"];
            data.flowerArray[2] = ["红色", "黄色", "白色", "紫色", "粉色", "绿色","黄色二代"];
            break;
          case 2:
            data.flowerArray[1] = ["红色", "黄色", "白色", "紫色", "粉色", "蓝色","金色","黑色","橘色","红色二代"];
            data.flowerArray[2] = ["红色", "黄色", "白色", "紫色", "粉色", "蓝色","金色","黑色","橘色","红色二代"];
            break;
          case 3:
            data.flowerArray[1] = ["红色", "蓝色", "白色", "紫色", "粉色", "橘色","粉色二代"];
            data.flowerArray[2] = ["红色", "蓝色", "白色", "紫色", "粉色", "橘色","粉色二代"];
            break;
          case 4:
            data.flowerArray[1] = ["红色", "黄色", "白色", "橘色", "粉色", "黑色","紫色"];
            data.flowerArray[2] = ["红色", "黄色", "白色", "橘色", "粉色", "黑色","紫色"];
            break;
          case 5:
            data.flowerArray[1] = ["红色", "黄色", "白色", "橘色", "蓝色", "紫色","红色二代"];
            data.flowerArray[2] = ["红色", "黄色", "白色", "橘色", "蓝色", "紫色","红色二代"];
            break;
          case 6:
            data.flowerArray[1] = ["红色", "黄色", "白色", "橘色", "粉色", "蓝色","紫色"];
            data.flowerArray[2] = ["红色", "黄色", "白色", "橘色", "粉色", "蓝色","紫色"];
            break;
          case 7:
            data.flowerArray[1] = ["红色", "黄色", "白色", "橘色", "粉色", "黑色"];
            data.flowerArray[2] = ["红色", "黄色", "白色", "橘色", "粉色", "黑色"];
            break;
       }
      data.flowerIndex[1]=0;
      data.flowerIndex[2]=0;
      break;
    }
    this.setData(data);
    console.log(data.flowerIndex);
  },

  zajiao:function(){
    var data = {
      flowerArray: this.data.flowerArray,
      flowerIndex: this.data.flowerIndex,
      answer: this.data.answer
    };
    let type = this.data.flowerIndex[0];
    let colour1 = this.data.flowerIndex[1];
    let colour2 = this.data.flowerIndex[2];
    switch(type){
      case 0:
        if(((colour1==0)&&(colour2==2))||((colour1==2)&&(colour2==0))){
          data.answer =[ {
            title:'粉色',
            name:'pink'
          }]
        }
        else if (((colour1 == 0) && (colour2 == 1)) || ((colour1 == 1) && (colour2 == 0))) {
          data.answer =[ {
            title:'橘色',
            name:'orange'
          }]
        }
        else if ((colour1 == 3) && (colour2 == 3)){
          data.answer = [{
            title:'黑色',
            name:'black'
          }]
        }
        else{
          data.answer = [{
            title:'无法杂交',
            name:'gray'
          }]
        }
        break;
      case 1:
        if((colour1==2)&&(colour2==2)){
          data.answer = [{
            title:'紫色',
            name:'purple'
          }]
        }else if(((colour1==0)&&(colour2==2))||((colour1==2)&&(colour2==0))){
          data.answer =[ {
            title:'粉色',
            name:'pink'
          }]
        }else if(((colour1 ==0)&&(colour2==1)||(colour2==0)&&(colour1==1))){
          data.answer =[ {
            title:'黄色二代',
            name:'yellow'
          }]
         }else if((colour1==6)&&(colour2==6)){
          data.answer =[ {
            title:'绿色',
            name:'green'
          }]
         }else{
          data.answer = [{
            title:'无法杂交',
            name:'gray'
          }]
         }
         break;
      case 2:
        if(colour1==2&&colour2==2){
          data.answer = [{
            title:'紫色',
            name:'purple'
          }]
        }else if((colour2==2&&colour1==0)||(colour1==2&&colour2==0)){
          data.answer =[ {
            title:'粉色',
            name:'pink'
          }]
        }else if(colour2==0&&colour1==0){
          data.answer = [{
            title:'黑色',
            name:'black'
          }]
        }else if((colour1==0&&colour2==1)||(colour2==0&&colour1==1)){
          data.answer =[ {
            title:'橘色',
            name:'orange'
          }]
        }else if((colour1==8&&colour2==3)||(colour2==8&&colour1==3)){
          data.answer = [{
            title:'红色二代',
            name:'red'
          }]
        }else if(colour2==9&&colour1==9){
          data.answer = [{
            title:'蓝色',
            name:'blue'
          }]
        }else if(colour1 == 7 && colour2 == 7){
          data.answer = [{
            title:'金色',
            name:'orange'
          }]
        }else{
          data.answer = [{
            title:'无法杂交',
            name:'gray'
          }]
        }
        break;
      case 3:
        if(colour1 == 2 && colour2 == 2){
          data.answer = [{
            title:'蓝色',
            name:'blue'
          }]
        }else if((colour2 == 0 && colour1 == 5) || (colour1 == 0 && colour2 == 5)){
          data.answer =[ {
            title:'粉色',
            name:'pink'
          }]
        }else if((colour2 ==1&&colour1==4)||(colour2==4&&colour1==1)){
          data.answer =[ {
            title:'粉色',
            name:'pink'
          }]
        }else if(colour2==6&&colour1==6){
          data.answer = [{
            title:'紫色',
            name:'purple'
          }]
        }else {
          data.answer = [{
            title:'无法杂交',
            name:'gray'
          }]
        }
        break;
      case 4:
        if((colour2==0&&colour1==2)||(colour2==2&&colour1==0)){
          data.answer =[ {
            title:'粉色',
            name:'pink'
          }]
        }else if(colour2==0&&colour1==0){
          data.answer = [{
            title:'黑色',
            name:'black'
          }]
        }else if((colour2==0&&colour1==1)||(colour2==1&&colour1==0)){
          data.answer =[ {
            title:'橘色',
            name:'orange'
          }]
        }else if((colour2==3&&colour1==3)||(colour2==5&&colour1==5)){
          data.answer = [{
            title:'紫色',
            name:'purple'
          }]
        }else{
          data.answer = [{
            title:'无法杂交',
            name:'gray'
          }]
        }
        break;
      case 5:
        if(colour2==2&&colour1==2){
          data.answer = [{
            title:'蓝色',
            name:'blue'
          }]
        }
        else if((colour2==0&&colour1==1)||(colour2==1&&colour1==0)){
          data.answer =[ {
            title:'橘色',
            name:'orange'
          }]
        }
        else if((colour2==0&&colour1==4)||(colour2==4&&colour1==0)){
          data.answer = [{
            title:'红色二代',
            name:'red'
          }]
        }
        else if((colour2==4&&colour1==4)||(colour2==6&&colour1==6)){
          data.answer = [{
            title:'紫色',
            name:'purple'
          }]
        }else{
          data.answer = [{
            title:'无法杂交',
            name:'gray'
          }]
        }
        break;
      case 6:
        if(colour1 == 2&&colour2==2){
          data.answer = [{
            title:'蓝色',
            name:'blue'
          }]
        }
        else if((colour1 == 2 && colour2==0)||(colour2==2&&colour1==0)){
          data.answer =[ {
            title:'粉色',
            name:'pink'
          }]
        }
        else if((colour2==0&&colour1==1)||(colour2==1&&colour1==0)){
          data.answer =[ {
            title:'橘色',
            name:'orange'
          }]
        }
        else if((colour2==3&&colour1==3)||(colour2==5&&colour1==5)){
          data.answer = [{
            title:'紫色',
            name:'purple'
          }]
        }
        else{
          data.answer = [{
            title:'无法杂交',
            name:'gray'
          }]
        }
        break;
      case 7:
        if((colour1==0&&colour2==2)||(colour1==2&&colour2==0)){
          data.answer =[ {
            title:'粉色',
            name:'pink'
          }]
        }
        else if((colour1==0&&colour2==1)||(colour1==1&&colour2==0)){
          data.answer =[ {
            title:'橘色',
            name:'orange'
          }]
        }
        else if((colour1==3&&colour2==3)||(colour1==0&&colour2==0)){
          data.answer = [{
            title:'黑色',
            name:'black'
          }]
        }
        else{
          data.answer = [{
            title:'无法杂交',
            name:'gray'
          }]
        }
        break;
      default:
        data.answer = [{
          title:'无法杂交',
          name:'gray'
        }]
    }
    this.setData(data);
    console.log(this.data.answer);
  }
})