/**
 * Created by MBENBEN on 2018/4/16.
 */
export default function () {
    const PI = 3.1415926;
    console.log(PI);

    Object.defineProperty(window,'PI2',{value:3.1415926,writable:false});
    console.log(window.PI2);

    window.PI2 = 4;
    console.log(window.PI2);
}