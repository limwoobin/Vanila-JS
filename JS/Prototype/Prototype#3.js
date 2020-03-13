//constructor
function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
};

var p = new Parent('myName');


// 위의 코드는 아래의 코드처럼 해석할 수 있다.


var p = new Parent('myName');

// 엔진 내부에서 하는 일
p = {}; // 새로운 객체를 만들고
Parent.call(p, 'myName'); // call이용해 Parent함수의 this를 p로 대신해서 실행해주고
p.__proto__ = Parent.prototype; // 프로토타입을 연결한다.

p.getName(); // 'myName'



//=================================================================
var a = {
    attr1 : 1
}

function ghost(){

}

ghost.prototype = a;

var b = new ghost();

console.log(b.__proto__);
console.log(b.attr1);

