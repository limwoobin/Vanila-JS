function Person(){

} // 함수

var personObj = new Person();
// 함수로 객체 생성



var obj = {}; 
var obj = new Object();
// Object 로 객체 생성 위의 두 코드는 동일한 코드
// 즉 JS 에서의 객체는 언제나 함수로 생성됨 


console.log('-------------------------------------------');
function Person(){

}

Person.prototype.zazi = '5cm';
Person.prototype.size = 'small';


var man1 = new Person();
var man2 = new Person();

console.log(man1.zazi);

console.log(man1.__proto__);
console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(Person);


var obj = {

}
console.log(obj);
