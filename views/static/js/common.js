
define(['jquery','template','cookie'],function ($,template) {
  $(function () {
    //判断用户当前在哪个页面
    //如果不在登录页面才执行下面的这段代码
    if(location.pathname!='/dashboard/login'){
      //判断有没有登录 没有的话直接进入登入页面
      if(!$.cookie('PHPSESSID')){
        location.href='/dashboard/login';
        return;
      }
      //获取cookie中存储的用户信息，使用模板渲染
      var userInfo = JSON.parse($.cookie('userInfo'));
      var html = template('profile-tpl', userInfo);
      $('#profile').html(html);

    }

 //退出按钮 点击之后发挥登录页面
    $('.nav').on('click','#quit',function () {
      $.ajax({
        url:'/api/logout',
        type:'post',
        success:function (data) {
          if(data.code==200){
            location.href='/dashboard/login';
          }
        }
      })
    })
  })
});

