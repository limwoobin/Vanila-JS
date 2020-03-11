function Outer(){
    var a = 'Closure';
    function Inner(){
        console.log(a);
    }
    return Inner;
}

var exec = Outer();
exec();

// =========================================================================

var i;
for (i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// =========================================================================

var i;
for (i = 0; i < 10; i++) {
    (function(id){
        setTimeout(function() {
            console.log(id);
        }, 1000);
    }(i));
}

// =========================================================================

var arr = []
 
for(var i = 0; i < 5; i++){
  arr[i] = (function(){
    console.log(i);
    return i;
    //i는 
  }());
}
 
for(var index in arr) {
    arr[index];
}

// =========================================================================

function factory_movie(title){
    return {
        getTitle : function(){
            return title;
        },
        setTitle : function(_title){
            title = _title;
        }
    }
}

var ghost = factory_movie();

ghost.setTitle('test');
console.log(ghost.getTitle())