// pages/flower/flower.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:"无法杂交",
    flowerArray: [
      ["波斯菊", "菊花", "玫瑰", "银莲花", "郁金香", "三色堇", "风信子", "百合"],
      ["红色", "黄色", "白色", "橙色", "粉色", "黑色"],
      ["红色", "黄色", "白色", "橙色", "粉色", "黑色"]
    ],
    objectFlowerArray: [
      [{
          id: 0,
          name: "菊花"
        },
        {
          id: 1,
          name: "波斯菊"
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

  bindMultiPickerColumnChange: function (e) {
    console.log('列', e.detail.column, '，值', e.detail.value);
    var data = {
      flowerArray: this.data.flowerArray,
      flowerIndex: this.data.flowerIndex
    };
    data.flowerIndex[e.detail.column] = e.detail.value;
    if(e.detail.column==0){
      switch(e.detail.value){
        case 0:
          data.flowerArray[1] = ["红色", "黄色", "白色", "橙色", "粉色", "黑色"];
          data.flowerArray[2] = ["红色", "黄色", "白色", "橙色", "粉色", "黑色"];
          break;
        case 1:
          data.flowerArray[1] = ["还没写"];
          data.flowerArray[2] = ["还没写"];
          break;
        default:
          data.flowerArray[1] = ["还没写"];
          data.flowerArray[2] = ["还没写"];
      }
      data.flowerIndex[1]=0;
      data.flowerIndex[2]=0;
    }
    this.setData(data);
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
        if(((colour1==0)&&(colour2==2))||((colour2==2)&&(colour1==0))){
          data.answer = "粉色"
        }
        else if (((colour1 == 0) && (colour2 == 1)) || ((colour2 == 1) && (colour1 == 0))) {
          data.answer = "橙色"
        }
        else if ((colour1 == 3) && (colour2 == 3)){
          data.answer = "黑色"
        }
        else{
          data.answer = "无法杂交"
        }
        break;
      default:
        data.answer = "无法杂交"
    }
    this.setData(data);
    console.log(this.data.answer);
  }
})