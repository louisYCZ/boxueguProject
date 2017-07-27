/**
 * Created by 余纯专 on 2017/7/26.
 */
define(['jquery'], function ($) {

  $("#btn-create").click(function () {
    alert(1)
    //1. 获取到用户输入的课程名称
    var csName = $("[name=cs_name]").val();
    //2. 发送请求到接口，进行课程的创建
    $.ajax({
      url: "/api/course/create",
      type: "post",
      data: {cs_name: csName},
      success: function (data) {
        if(data.code == 200){
          // console.log(data);
          location.href = "/course/step1?id=" + data.result.cs_id;
        }
      }
    })

    //阻止表单自己进行提交
    return false;
  })
})