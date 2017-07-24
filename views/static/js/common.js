define(['jquery', 'template','nprogress', 'cookie'], function ($, template,NProgress) {
  $(function () {
    //判断用户当前在哪个页面
    //如果不在登录页面才执行下面的这段代码
    NProgress.start();
    NProgress.done();
    $(document).ajaxStart(function () {
      NProgress.start();
    });
    $(document).ajaxStop(function () {
      NProgress.done();
    });
    if (location.pathname != '/dashboard/login') {
      //判断有没有登录 没有的话直接进入登入页面
      if (!$.cookie('PHPSESSID')) {
        location.href = '/dashboard/login';
        return;
      }
      //获取cookie中存储的用户信息，使用模板渲染
      var userInfo = JSON.parse($.cookie('userInfo'));
      var html = template('profile-tpl', userInfo);
      $('#profile').html(html);

    }

    //退出按钮 点击之后发挥登录页面
    $('.nav').on('click', '#quit', function () {
      $.ajax({
        url: '/api/logout',
        type: 'post',
        success: function (data) {
          if (data.code == 200) {
            location.href = '/dashboard/login';
          }
        }
      })
    })
  });
  //给导航栏 显示二级菜单
  $('.navs>ul>li>ul').parent().on('click', function () {
    $(this).children('ul').toggle();
  });
  var path = location.pathname;
  console.log(path);
  if (path == '/') {
    path = '/dashboard/index';
  }
  ;
  var activeLi = ($('.navs a[href="' + path + '"]'));
  activeLi.addClass('active');
  var activeUl=activeLi.parent().parent();
  if(activeUl.siblings().length==1){
    activeUl.show();
  }

});

