(function($){
    "use strict";
    /**
     * 浏览器兼容性查找，看哪个transform支持这个浏览器
     */
    var _prefix = (function(temp){
        var aPreFix = ['moz','webkit','o','ms'],
        prefix='';
        for(var i=0;i<aPreFix.length;i++){
            prefix = aPreFix[i]+'Transition';
            if(temp.style[prefix] !==undefined){
                return '-'+aPreFix[i].toLowerCase()+'-';
            }
        }
        return false;
    })(document.createElement(PageSwitch));


    var PageSwitch = (function(){
        function PageSwitch(element,options){
            this.settings = $.extend(true,$.fn.PageSwitch.defaults,options||{});
            this.element = element;
            this.init();
        };

        PageSwitch.prototype = {
            /*说明：初始化插件*/
            /*实现：初始化dom结构，布局，分页及绑定事件*/
            init : function(){
                var me = this;
                me.selectors = me.settings.selectors;
                me.sections = me.element.find(me.selectors.sections);
                me.section = me.sections.find(me.selectors.section);
                me.direction = me.settings.direction == 'vertical' ? true : false;
                me.pageCount = me.pageCount();
                me.index = (me.settings.index >= 0 && me.settings.index < me.pagesCount) ?me.settings.index : 0;
    
                me.canScroll = me.settings.canScroll;
    
                if(me.index || !me.direction){
                    me._initLayout();
                }
    
                if(me.settings.pagination){
                    me._initPaging();
                }
    
                me._initEvent();
            },
            /*获取滑动的数量 */
            pageCount : function(){
                return this.section.length;
            },
            /*获取滑动的高度或者宽度 */
            switchLength:function () {
                return this.direction==1?this.element.height():this.element.width();
            },
            prev:function () {
                var me = this;
                console.log(me.index);
                if(me.index>0){
                    me.index--;
                }else {
                    if(me.settings.loop){
                        me.index = me.pageCount-1;
                    }
                }
                console.log(me.index);
                me._scrollPage();
            },
            next:function () {
                var me = this;
                if(me.index<me.pageCount-1){
                    me.index++;
                }else if(me.settings.loop){
                    me.index = 0;
                }
                console.log(me.index);
                me._scrollPage();
            },
            /*说明：主要针对横屏情况进行页面布局*/
            _initLayout : function(){
                var me = this;
                var width = (me.pageCount*100)+"%",
                    cellWidth = (100/me.pageCount).toFixed(2)+"%"
                me.sections.width(Width);
                me.section.width(cellWidth).css("float","left");
            },
            /*说明：实现分页*/
            _initPaging : function(){
                var me = this,
                    pageClass = me.settings.selectors.page.substring(1),
                    activeClass = me.settings.selectors.active.substring(1);
                var pageHtml = "<ul class='"+pageClass+"'>";
                for(var i=0;i<me.pageCount;i++){
                    pageHtml += "<li></li>"
                }
                me.element.append(pageHtml);
                var pages = me.element.find(me.selectors.page);
                me.pageItem = pages.find('li');
                me.pageItem.eq(me.index).addClass(activeClass);
                if(me.direction){
                    pages.addClass("vertical");
                }else{
                    pages.addClass("horizontal");
                }
            },
            //滑动动画
            _scrollPage: function() {
                var me = this,activeClass = me.settings.selectors.active.substring(1),
                dest = me.section.eq(me.index).position();
                if(!dest) return false;
                me.canScroll = false;
                me.pageItem.removeClass(activeClass);
                me.pageItem.eq(me.index).addClass(activeClass);
                if(_prefix){
                    var translate = me.direction ? "translateY(-"+dest.top+"px)" : "translateX(-"+dest.left+"px)";
                    me.sections.css(_prefix+"transform",translate);
                    me.canScroll=true;
                }else{
                    var animateCss = me.direction ? {top: -dest.top}:{left:-dest.left};
                    me.sections.animate(animateCss,me.settings.duration,function () { me.canScroll=true; })
                }
            },
            /*初始化插件*/
            _initEvent:function () {
                var me = this;
                //点击li
                me.element.on("click",me.selectors.page+" li",function(){
                    me.index = $(this).index();
                    me._scrollPage();
                });
                //鼠标滚轮事件
                me.element.on("mousewheel DOMMouseScroll",function (e) {
                    e.preventDefault();
                    if(me.canScroll){
                        var dalta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                        console.log(dalta);
                        //鼠标向上
                        if(dalta>0 && (me.index>0 && !me.settings.loop||me.settings.loop)){
                            me.prev();
                        }else if(dalta<0 && (me.index < (me.pageCount-1) && !me.settings.loop || me.settings.loop)){
                            me.next();
                        }
                    }
                });
                //键盘事件
                if(me.settings.keyboard){
                    $(window).on("keydown",function(e){
                        var keyCode = e.keyCode;
                        console.log(keyCode);
                        if(keyCode == 37 || keyCode == 38){
                            me.prev();
                        }else if(keyCode == 39 || keyCode == 40){
                            me.next();
                        }
                    });
                }
                //页面改变大小时触发
                $(window).resize(function (){
                    var currentLength = me.switchLength(),
                    offset = me.settings.direction ? me.section.eq(me.index).offset().top : me.section.eq(me.index).offset().top;
                    if(offset>(currentLength/2) && me.index < (me.pageCount-1)){
                        me.index++;
                    }
                    if(me.index){
                        me._scrollPage();
                    }
                });

                //transitionEnd事件
                me.sections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(){
                    if(me.settings.callback && $.type(me.settings.callback) == 'function'){
                        me.canScroll = true;
                        me.settings.callback();
                    }
                });
            }
        };
        return PageSwitch;
    })();

    
    $.fn.PageSwitch = function(options){
        return this.each(function(){
            var me = $(this);
            
            var instance = me.data('PageSwitch');
            
            if(!instance){
                me.data('PageSwitch',(instance = new PageSwitch(me,options)));
            }

            if($.type(options)==="string"){
                return instance[options]();
            }
        })
    };
    $.fn.PageSwitch.defaults = {
        selectors :{
            sections : '.sections',
            section:'.section',
            page:'.pages',
            active:'.active'
        },
        direction:"vertical",
        keyboard:true,
        duration:50000,
        index:0,
        easing:"easing",
        pagination:true,
        loop:true,
        callback:"",
        canScroll:true
    }
    /**
     * 这是JQUERY的内置函数，表示网页加载进来时要执行的意思，和JAVASCRIPT原来的这个是一样的：
     */
    $(function(){
        $('#container').PageSwitch();
    });
})(jQuery);