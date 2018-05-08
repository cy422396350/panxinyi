/**
 * Created by MBENBEN on 2018/4/17.
 */
!function ($) {

    //promise结构
    new Promise((resolve, reject) => {
        $.ajax({
            url: 'http://happymmall.com/user/get_user_info.do',
            type: 'post',
            success(res) {
                resolve(res);
            },
            error(err){
                reject(err);
            }
        });
    }).then((res) => {
        console.log('success' + res);
    }, (err) => {
        console.log('error' + err);
    });

    //promise 链式调用
    let fn1 = new Promise((resolve, reject) => {
        $.ajax({
            url: 'http://happymmall.com/user/get_user_info.do',
            type: 'post',
            success(res) {
                resolve(res);
            },
            error(err){
                reject(err);
            }
        });
    });

    let fn2 = new Promise((resolve, reject) => {
        $.ajax({
            url: 'http://happymmall.com/user/get_user_info.do',
            type: 'post',
            success(res) {
                resolve(res);
            },
            error(err){
                reject(err);
            }
        });
    });

    fn1.then(()=>{
        console.log('fn1 success');
        return fn2;
    }).then(()=>{
        console.log('fn2 success');
    });
}(jQuery);