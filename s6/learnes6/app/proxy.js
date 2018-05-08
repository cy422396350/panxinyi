/**
 * Created by MBENBEN on 2018/4/16.
 */
{
    //对象代理
    let Person = {
        name:'aaa',
        age:25,
        sex:'male'
    };
    let person = new Proxy(Person,{
        get(target,key){
            return target[key];
        },
        set(target,key,value){
            if(key !=='sex'){
                target[key] = value;
            }
        }
    });

    console.table({
        name: person.name,
        sex: person.sex,
        age: person.age
    });
    try{
        person.sex = 'bbb';
    }catch (e){
        console.log(e);
    }finally {

    }
}
