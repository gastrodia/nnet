var nnet = require('../build/nnet');

var p = [[-1,1],[-1,1]];
var t = 1;

var net = nnet.newp(p,t);

var P = [[0,0,1,1],[0,1,0,1]];
var T = [0,1,1,1];
net = nnet.train(net,P,T);

var newP = [0,0.9];
var newT = nnet.sim(net,newP);

console.log(newT);
