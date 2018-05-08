(function(){
    var YYY = (function(element,options){
        return function(){
            this.a = function () { return 1; };
            this.b = 'b';
        };
    })();
    
    $.fn.xxx = function (param) {
        return this.each(function(){
            var me = $(this),instance = me.data('xxx');
            if(!instance){
                me.data('xxx',instance = new YYY(me,param));
            }
            if($.type(param) == 'string'){
                return instance[param]();
            }
        });
    }
    console.log($('.ccc').xxx('a'));
})();