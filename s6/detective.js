/**
 * Created by MBENBEN on 2018/4/15.
 */
!function (global) {
    function BaseDetective(configs) {
        if (!this instanceof BaseDetective) {
            throw new Error('Don\'t implement BaseDetective');
        }

        this.configs = configs;
        this.analyze();
    }

    BaseDetective.prototype.detecte = function () {
        throw new Error('Not implement');
    };

    BaseDetective.prototype.analyze = function () {
        console.log('analyze...');
        this.data = '###data$$$';
    };

    function LinkDetective(link) {
        if (!this instanceof LinkDetective) {
            throw new Error('Don\'t implement LinkDetective');
        }
        this.link = link;
        BaseDetective.apply(this, arguments);
    }

    function ContainerDetective(container) {
        if (!this instanceof ContainerDetective) {
            throw new Error('Don\'t implement LinkDetective');
        }
        this.container = container;
        BaseDetective.apply(this, arguments);
    }

    inherit(LinkDetective, BaseDetective);
    inherit(ContainerDetective, BaseDetective);

    LinkDetective.prototype.detecte = function () {
        console.log('Loading data...');
        console.log('Link start...');
        console.log('Scanning link...' + this.link);
    }

    ContainerDetective.prototype.detecte = function () {
        console.log('Loading data...');
        console.log('Container start...');
        console.log('Scanning containers...' + this.container);
    }

    function inherit(subClass, parentClass) {
        subClass.prototype = Object.create(parentClass.prototype);
        subClass.prototype.constructor = subClass;
    }

    Object.freeze(BaseDetective);
    Object.freeze(BaseDetective.prototype);
    Object.freeze(LinkDetective);
    Object.freeze(LinkDetective.prototype);
    Object.freeze(ContainerDetective);
    Object.freeze(ContainerDetective.prototype);

    Object.defineProperties(global, {
        LinkDetective: {value: LinkDetective},
        ContainerDetective: {value: ContainerDetective},
        BaseDetective:{value:BaseDetective}
    });

}(global);

var ld = new LinkDetective('www.baidu.com');
var cd = new ContainerDetective('#aaa #bbb #ccc');

ld.detecte();
cd.detecte();