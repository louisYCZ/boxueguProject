/**
 * Created by 余纯专 on 2017/7/24.
 */
define(['jquery', 'ckeditor', 'template', 'uploadify', 'datepicker', 'datepickerCN', 'cookie', 'region', 'form'], function ($, CKEDITOR, template) {

  $.ajax({
    url: '/api//teacher/profile',
    success: function (data) {
      if (data.code == 200) {
        //console.log(data);
        var html = template('centertpl', data.result);
        $('.settings').html(html);

        //使用datepicker插件
        $('[name=tc_birthday]').datepicker({
          format: 'yyyy-mm-dd',
          language: 'zh-CN'
        });
        $('[name=tc_join_date]').datepicker({
          format: 'yyyy-mm-dd',
          language: 'zh-CN'
        });

        //渲染文本域
        CKEDITOR.replace('tc_introduce', {
          toolbarGroups: [
            {name: 'clipboard', groups: ['clipboard', 'undo']},
            // { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
            // { name: 'links', groups: [ 'links' ] },
            // { name: 'insert', groups: [ 'insert' ] },
            // { name: 'forms', groups: [ 'forms' ] },

            // { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
            {name: 'others', groups: ['others']},
            // '/',
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
            {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
            // { name: 'styles', groups: [ 'styles' ] },
            {name: 'colors', groups: ['colors']},
            // { name: 'about', groups: [ 'about' ] }
            {name: 'tools', groups: ['tools']},
          ]
        });
        //使用uploadify插件上选图片
        $('#upfile').uploadify({
          //swf文件路径
          swf: "/views/assets/uploadify/uploadify.swf",
          //上传文件的后端的接口文档地址
          uploader: '/api/uploader/avatar',
          uploader: "/api/uploader/avatar",
          //上传图片的时候，图片对应的键后台会通过这个键来获取文件内容
          fileObjName: 'tc_avatar',
          //上传图片成功之后的回调函数
          onUploadSuccess: function (file, data) {
            //console.log(data);
            data = JSON.parse(data);
            if (data.code == 200) {
              $('.preview img').attr('src', data.result.path);
            }
          },
          width: 120,
          height: 120,
          //选择图片的类型
          fileTypeExts: '*.gif;*.jpg;*.png',
          //选择多个图片取消
          multi: false,
          //buttonClass: '',
          buttonText: '',
          //通过itemTemplate可以将上传的进度提示信息隐藏
          itemTemplate: '<p></p>',
        })

        //更新个人资料
        $('form').submit(function () {
          $(this).ajaxSubmit({
            url: '/api/teacher/modify',
            type: 'post',
            success: function (data) {
              if (data.code == 200) {
                //console.log(data);
                alert('更新成功');
              }
            }
          })
          return false;
        });

        //三级联动
        $('#region').region({
          url:'/views/assets/jquery-region/region.json'
        })
      }
    }
  })


});