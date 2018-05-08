/**
 * Created by MBENBEN on 2018/4/14.
 */
!function () {
    var _userId = 23455;
    var _typeId = 223;
    var exports = {};
    
    function coverter(userId) {
        return +userId;
    }

    exports.getUserId = function () {
        return coverter(_userId);
    };

    exports.getTypeId = function () {
        return coverter(_typeId);
    };
     // window.exports = exports;
     console.log('111');
}();

// console.log(exports.getTypeId());
// console.log(exports.getUserId());

function foo(f,y,z) {
    function f() {

    }
    var f = 1;
    console.log(f);
}
foo(100);