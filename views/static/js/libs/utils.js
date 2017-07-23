/**
 * Created by 余纯专 on 2017/7/23.
 */
define([], function () {
  return {
    /**
     * 此方法用来将用户传入url地址的所有的参数键值对儿转换成一个对象！
     */
    getQuery: function () {
      var queryString = location.search.slice(1);
      var kvArr = queryString.split('&');
      var obj = {};
      kvArr.forEach(function (v, i) {
        //v 就是"k=value"
       var k= v.split('=')[0];
        var value= v.split('=')[1];
        obj[k]=value;
      })
      return obj;
    },
    getQueryByKey:function (key) {
       return this.getQuery()[key];
    }


  }
})