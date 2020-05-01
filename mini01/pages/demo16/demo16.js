// pages/demo16/demo16.js
Page({
  data: {
    list:[
      { id: 0, name: "lisa", value: "rapper" },
      { id: 1, name: "jeniffer", value: "vocal" },
      { id: 2, name: "susan", value: "dancer" },
    ],
    checkedList:[]
  },

  handleItemChange(e){
    const checkedList=e.detail.value;
this.setData({
      checkedList
    })
  }
})