var a = {
    attr1 : 1
}

function ghost(){

}

ghost.prototype = a;

var b = new ghost();

console.log(b.__proto__);
console.log(b.attr1);