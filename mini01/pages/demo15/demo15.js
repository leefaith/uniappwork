// pages/demo15/demo15.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
gender:""
  },
  handleChange(e){
    let gender=e.detail.value;
    this.setData({
      gender
    })
  }

})