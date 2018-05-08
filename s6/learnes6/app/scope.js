/**
 * Created by MBENBEN on 2018/4/16.
 */
let callbacks = [];
for (var i = 0; i < 3; i++) {
    callbacks[i] = function () {
        return i*2;
    };
}
console.table([
    callbacks[0](),
    callbacks[1](),
    callbacks[2](),
]);

let callbacks2 = [];
for (let j = 0; j < 3; j++) {
    callbacks2[j] = function () {
        return j*2;
    };
};

console.table([
    callbacks2[0](),
    callbacks2[1](),
    callbacks2[2](),
]);

!function () {
    var foo = function () {
        return 1;
    };
    console.log('foo == 1',foo()==1);
    !function () {
        var foo = function () {
            return 2;
        };
        console.log('foo ===2',foo()==2);
    }()
}();