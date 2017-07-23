/**
 * Created by 余纯专 on 2017/7/22.
 */
define(['jquery', 'template', 'bootstrap'], function ($, template) {
  $(function () {


    //渲染页面
    $.ajax({
      url: '/api/teacher',
      type: 'get',
      success: function (data) {
        //模板引擎过滤器 v.tc_birthday 会被当成参数翻入函数getage中
        template.defaults.imports.getage = function (birthday) {
          var now = new Date()
          var birthday = new Date(birthday);
          return now.getFullYear() - birthday.getFullYear();
        }
        var html = template('teacherTpl', data);

        $('#teaTbody').html(html);
        //console.log(data);
      }
    });

    //给查看按钮注册点击事件 显示模态框
    $('#teaTbody').on('click', '.check', function () {
      //取到tc_id
      var id = $(this).parent().data('id');
      //发送ajax请求
      $.ajax({
        url: '/api/teacher/view',
        data: {
          tc_id: id
        },
        success: function (data) {
          if (data.code == 200) {
            //console.log(data);
            //渲染模板
            var html = template('teacher-info-tpl', data.result);
            $('#teacherModal .panel-body').html(html);
            $('#teacherModal').modal('show');
          }
        }
      })
    });

    //给注销/启用按钮注册点击事件
    $('#teaTbody').on('click', '.btn-toggle-status', function () {
      var id = $(this).parent().data('id');
      var status = $(this).data('status');
      var that = this;
      $.ajax({
        url: '/api/teacher/handle',
        type: 'post',
        data: {
          tc_id: id,
          tc_status: status
        },
        success: function (data) {
          if (data.code == 200) {
            if (data.result.tc_status == "1") {
              //如果data.result.tc_status == "1" 就让它显示启用并且切除warning颜色 添加success颜色 否则相反。
              $(that).text('启 用').removeClass('btn-warning').addClass('btn-success');
            } else {
              $(that).text('注 销').removeClass('btn-success').addClass('btn-warning');
            }
            //更改自定义属性 切换data-status的值
           $(that).data('status',data.result.tc_status) ;
          }
        }
      })
    })


  })
})