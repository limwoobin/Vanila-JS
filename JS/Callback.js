// 콜백함수는 클로저
function callback(cb){
    cb();
}

function add(x , y){
    let sum = x+y;
    callback(function(){
        console.log(sum);
    })
}

add(3,5);


// 콜백은 this에 주의 -> 전역을 가리킴
var obj = {
    name : 'drogba',
    email : 'naver.com',

    setEmail : function(email){
        this.email = email;
    }
}

function callback(email , cb){
    cb(email);
}

callback('kakao.com' , obj.setEmail);

console.log(obj.email);
console.log(global.email);