/**
 * Created by 余纯专 on 2017/7/21.
 */
define(['jquery', 'template', 'utils','validate','datepicker' ,"datepickerCN",'form'], function ($, template, utils) {
  //拿到url中id
  var id = utils.getQueryByKey('id');
  console.log(id);
  //判断id是否存在
  if (!id) {
    var obj = {
      url: '/api/teacher/add',
      title: '讲师添加',
      btnText: '添 加'
    }
    var html = template('teachertpl', obj)
    $('.teacher').html(html);
    $('input[name=tc_join_date]').datepicker({
      language:'zh-CN',
      format:'yyyy-mm-dd'
    });
    //给表单安装插件 validate
    registeFormValidate();
  } else {
//编辑功能
    //像后台发送ajax
    $.ajax({
      url: '/api/teacher/edit',
      data: {
        tc_id: id,
      },
      success: function (data) {
        if (data.code == 200) {
          console.log(data);
          data.result.title = '讲师编辑';
          data.result.btnText = '保 存';
          data.result.url = '/api/teacher/update';
          var html = template('teachertpl', data.result);
          $('.teacher.body').html(html);
          $('input[name=tc_join_date]').datepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd'
          })

          registeFormValidate();
        }
      }
    })
  }

  function registeFormValidate () {
    $('form').validate({
      onKeyUp:true,
      onChange:true,
      sendForm:false,
      onBlur:true,
      description:{
        name:{
          valid:'',
          required:'请输入名称'
        },
        pass:{
          required:'请输入密码',
          pattern:' 请输入正确的手机号6-18位密码'
        }
      },
      eachValidField:function () {
        this.parent().addClass('has-success').removeClass('has-error');
      },
      eachInvalidField:function () {
        this.parent().addClass('has-error').removeClass('has-success');
      },
      valid:function () {
        this.ajaxSubmit({
          success:function (data) {
            if(data.code==200){
              location.href="/teacher/list";
            }
          }
        })
      }
    });
  }

})
