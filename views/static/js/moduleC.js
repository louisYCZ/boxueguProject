/**
 * Created by 余纯专 on 2017/7/21.
 */
define(function () {
    console.log('我是模块c');
    var obj={
      add:function (a,b) {
          return a+b;
      },
      jian:function (a,b) {
          return a-b;
      }
    }
  return obj;
})