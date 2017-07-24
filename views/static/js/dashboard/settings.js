/**
 * Created by 余纯专 on 2017/7/24.
 */
define(['jquery','ckeditor'],function ($,CKEDITOR) {
  CKEDITOR.replace('tc_introduce', {
    toolbarGroups : [
      { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
      // { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
      // { name: 'links', groups: [ 'links' ] },
      // { name: 'insert', groups: [ 'insert' ] },
      // { name: 'forms', groups: [ 'forms' ] },

      // { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
      { name: 'others', groups: [ 'others' ] },
      // '/',
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
      // { name: 'styles', groups: [ 'styles' ] },
      { name: 'colors', groups: [ 'colors' ] },
      // { name: 'about', groups: [ 'about' ] }
      { name: 'tools', groups: [ 'tools' ] },
    ]
  });

});