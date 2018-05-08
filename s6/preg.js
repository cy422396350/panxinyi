/**
 * Created by MBENBEN on 2018/4/15.
 */
var str = 'camsklasabc';
var str1 = 'abcabc';
console.log(str1.replace(/b+?/,1));

var str2 = 'aabbbccbbccss';
console.log(str2.match(/b+/g));

var r =  str.search('abc');
console.log(r);

var str3 = 'abcscbcsadcabcsaca';
console.log(str3.split(/b+/));

console.log(/abc/gim.test('ABC'));

var reg = RegExp('abc','gim');
console.log(reg.source);
var reg1 = reg.compile('def');
console.log(reg1.source);