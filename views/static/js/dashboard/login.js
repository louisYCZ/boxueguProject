/**
 * Created by 余纯专 on 2017/7/21.
 */
define(['jquery','form','cookie'],function ($) {
  $(function () {
    $("form").submit(function () {
      $(this).ajaxSubmit({
        url:"/api/login",
        type:'post',
        success:function (data) {
          if(data.code==200){
            //把请求的数据用cookie保存起来实现跨界面调用
            $.cookie('userInfo',JSON.stringify(data.result), {path: "/"})
            console.log(data);
            location.href='/';
          }
        }
      });
      return false;
    })
  });
})