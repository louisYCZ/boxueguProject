/**
 * Created by 余纯专 on 2017/7/21.
 */
define(['jquery','cookie'],function ($) {
  $(function () {
    $("form").submit(function () {
      $.ajax({
        url:"/api/login",
        type:'post',
        data:$(this).serialize(),
        success:function (data) {
          if(data.code==200){
            //把请求的数据用cookie保存起来实现跨界面调用
            $.cookie('userInfo',JSON.stringify(data.result), {path: "/"})
            location.href='/';
          }
        }
      });
      return false;
    })
  });
})