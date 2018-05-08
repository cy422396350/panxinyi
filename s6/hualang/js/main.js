var center_id;
/**
 * 海报翻转
 * @param {*} elem 
 */
function turn(id){
    var lastElem = document.getElementsByClassName("i_back").length==1 ? document.getElementsByClassName("i_back") : document.getElementsByClassName("i_current");
    var lastId = lastElem[0].id.split("_")[1];
    var navs = document.getElementsByClassName('i');
    for(var s = 0;s<navs.length;s++){
        navs[s].className = navs[s].className.replace(/\s*i_current\s*/,'').replace(/\s*i_back\s*/,'');
    }
    var elem = document.getElementById('photo_'+id);
    console.log(elem.className);
    var cls = elem.className;
    var spans = [];
    var span = document.getElementById('span_'+id);
    span.className = 'i i_current';
    // console.log(lastId);
    // console.log(id);
    //正在点居中的按钮
    if(lastId == id){
        if(/front/.test(cls)){
            cls = cls.replace(/front/,'back');
            span.className = 'i i_back';
        }else{
            cls = cls.replace(/back/,'front');
        }
        elem.className = cls;
    }else{
        console.log("fanzhuan"+id);
        center(id);
    }
    
}


/*
 * 海报数据
 */
function addPhotoes(){
    var template = document.getElementById("wrap").innerHTML;
    var html = [];
    var spans = [];
    for(s in data){
        let _html = template.replace("{{index1}}",parseInt(s)).replace("{{index}}",parseInt(s))
        .replace("{{img}}",data[s].img).replace("{{caption}}",data[s].caption)
        .replace("{{desc}}",data[s].desc);
        spans.push("<span class='i' id='span_"+s+"' onclick='turn("+s+")'>&nbsp;</span>")
        html.push(_html);
    }
    html.push('<div class="nav">'+spans.join("")+'</div>');
    document.getElementById("wrap").innerHTML = html.join("");
}
/**
 * 找一个海报居中
 */
function center(num){
    //去除所有的photo_center
    let _photo = document.getElementsByClassName('photo');
    var photos = [];
    for(s=0;s<_photo.length;s++){
        _photo[s].className = _photo[s].className.replace(/photo_center/,"");
        _photo[s].className = _photo[s].className.replace(/back/,"");
        _photo[s].className = _photo[s].className.replace(/front/,"");
        _photo[s].style.top = '';
        _photo[s].style.left = '';
        _photo[s].style['-webkit-transform'] = 'rotate(0deg) scale(1.3)';
        photos.push(_photo[s]);
    }
    if(num==undefined){
        var n = get_random([0,data.length]);
    }else{
        var n = num;
        console.log(photos[n]);
    }
    center_id = n;
    photos.splice(n,1);
    var ele = document.getElementById("photo_"+n);
    let wrap = document.getElementById('wrap');
    var photo = document.getElementsByClassName('photo')[0];
    let wrap_width = wrap.clientWidth;
    let wrap_height = wrap.clientHeight;
    let photo_width = photo.clientWidth;
    let photo_height = photo.clientHeight;
    let min_left_x = 0-photo_width;
    let max_left_x = (wrap_width/2)-(photo_width/2);
    let min_right_x = (wrap_width/2)+(photo_width/2)
    let max_right_x = (wrap_width)+(photo_width);
    let min_y = -photo_height;
    let max_y = wrap_height;

    var range = {
        wrap:{wrap_width,wrap_height},
        photo:{photo_width,photo_height},
        left:{
            x:[min_left_x,max_left_x],
            y:[min_y,max_y]
        },
        right:{
            x:[min_right_x,max_right_x],
            y:[min_y,max_y]
        }
    };
    var photo_ms = [];
    for(s in photos){
        photo_ms.push(photos[s]);
    }
    var photo_left = photos.splice(0,Math.ceil(photos.length/2));
    for(var s=0;s<photo_left.length;s++){
        var photo = photo_left[s];
        photo.style.left = get_random(range.left.x)+'px';
        photo.style.top = get_random(range.left.y)+'px';
        photo.style['-webkit-transform'] = 'rotate('+get_random([-360,360])+'deg) scale(1)';
    }

    for(var s=0;s<photos.length;s++){
        var photo = photos[s];
        photo.style.left = get_random(range.right.x)+'px';
        photo.style.top = get_random(range.right.y)+'px';
        photo.style['-webkit-transform'] = 'rotate('+get_random([-360,360])+'deg) scale(1)';
    }
    var curr_span = document.getElementById('span_'+n);
    curr_span.className = 'i i_current';
    ele.className += ' photo_center front';
}

/**
 * 在两个值中间取随机数
 * @param {*} range 
 */
function get_random(range){
    let max = Math.max(range[0],range[1]);
    let min = Math.min(range[0],range[1]);
    let diff = max-min;
    return Math.ceil(Math.random()*diff + min);
}



addPhotoes();
center();