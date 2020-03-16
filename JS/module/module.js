// namespace 패턴
var myApp = myApp || {}; // 네임 스페이스 선언

myApp.hanq= function() {
    return 'hanq';
};

myApp.helloworld = function() {
    return 'hello world';
}

// 모듈 페턴


var Messages = {h : 'hello', w : 'world', insane:'insanehanq'};

var myApp = (function(msg) {
  var helloworld = msg.h+'  '+msg.w;
  var helloinsanehanq = msg.h+' '+msg.insane;

  var printInsane = function () {
     return helloinsanehanq;
  };

  var printhello = function() {
    return helloworld;
  };  

  return {
    foo1 : printInsane,
    foo2 : printhello
  };

})(Messages);

console.log(myApp.foo1);
console.log(myApp.foo2);