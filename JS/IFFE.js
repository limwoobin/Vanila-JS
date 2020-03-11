// 일반 함수
function A(){
    console.log('함수선언식');
}
A();

var test = function(){
    console.log('함수표현식')
}
test();

// 함수표현식 + 즉시실행함수
var test2 = (function(){
    console.log('???');
}());

// 즉시실행함수
(function(){
    console.log('IFFE_2');
}());

// 즉시실행함수 변수전달
(function(id){
    console.log(id);
}('TEST'));


console.log((function(){
    return 'TEST2';
}()));