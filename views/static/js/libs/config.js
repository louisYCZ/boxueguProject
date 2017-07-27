/**
 * Created by 余纯专 on 2017/7/21.
 */
require.config({
  baseUrl: '/views/assets',
  paths: {
    'jquery': 'jquery/jquery.min',
    'cookie': 'jquery-cookie/jquery.cookie',
    'template': 'artTemplate/template-web',
    'form': 'jquery-form/jquery.form',
    'bootstrap': 'bootstrap/js/bootstrap.min',
    'utils':'../static/js/libs/utils',
    'datepicker':'bootstrap-datepicker/js/bootstrap-datepicker.min',
    "datepickerCN": "bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
    'nprogress':'nprogress/nprogress',
    'validate':'validate/jquery-validate.min',
    'ckeditor':'ckeditor/ckeditor',
    'uploadify':'uploadify/jquery.uploadify.min',
    'region':"jquery-region/jquery.region"
  },
  shim: {
    'bootstrap': {
      deps:['jquery']
    },
    "datepickerCN":{
      deps:['jquery']
    },
    'validate':{
      deps:['jquery']
    },
    'ckeditor':{
      exports: "CKEDITOR"
    },
    'uploadify':{
     deps:['jquery']
    }
  }
})