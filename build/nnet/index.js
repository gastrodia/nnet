/// <reference path="../../typings/tsd.d.ts"/>
var nnet = (function () {
    function nnet() {
    }
    nnet.newp = function () {
        console.log('创建感知器');
    };
    nnet.train = function () {
        console.log('训练感知器网络');
    };
    nnet.sim = function () {
        console.log('对训练好的网络进行仿真');
    };
    return nnet;
})();
module.exports = nnet;
//# sourceMappingURL=index.js.map