console.log(this);

var a = {
    t : function(){
        console.log(this);
    }
}

a.t();


function tt(){
    console.log(this);
}

tt();


function Outer(){
    function Inner(){
        console.log(this);
    }
    Inner();
}

Outer();