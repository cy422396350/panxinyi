/**
 * Created by MBENBEN on 2018/4/16.
 */
{
    var events = [1, 2, 3, 4, 5];
    var odds = events.map(function (v) {
        return v * 2;
    });
    console.log(odds);
}

{
    let events = [1, 2, 3, 4, 5];
    let odds = events.map(v => v + 1);
    console.log(events, odds);
}

{
    //es3,es5
    var factory = function () {
        this.a = 'a';
        this.b = 'b';
        this.c = {
            a: 'a+',
            b: function () {
                return this.a;
            }
        };
    };
    console.log(new factory().c.b());
}

{
    let Factory = function () {
        this.a = 'a';
        this.b = 'b';
        this.c = {
            a: 'a+',
            b: () => {
                return this.a;
            }
        };
    };
    console.log(new Factory().c.b());
}

{
    //es3,es5
    function f() {
        var arr = Array.prototype.slice.call(arguments);
        var sum = 0;
        arr.forEach(function (item) {
            sum += item * 1;
        });
        return sum;
    }

    console.log(f(1, 2, 3, 4, 5));
}

{
    //es6
    function foo(...a) {
        let sum = 0;
        a.forEach((item)=>{
            sum += item*1;
        });
        return sum;
    }
    console.log(foo(1,2,3,4,5));
}

{
    //es3,es5
    var oldArr = ['aaa',false,777];
    var newArr = ['hello','hi'];
    var res = oldArr.concat(newArr);
    console.log(res);
}
{
    let oldArr = ['aaa',false,777];
    let other = [1,2,...oldArr];
    console.log(other);
}
{
    function errorEmpty() {
        throw new Error('can\'t be empty!');
    }
    function f(x=errorEmpty(),y=7,z=49) {
        return x+y+z;
    }

    console.log(f());
}