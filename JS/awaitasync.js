// function wait(num){
//     setTimeout(() => {
//         return new Date().toISOString();
//     }, num * 1000);
// }

function wait(num){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, num * 1000);
    })
}


function myFunc(){
    return 'func';
}

async function myAsync(){
    const time = await wait(3);
    console.log('time' , time);
    return 'async';
}

myAsync().then((result) => {
    console.log(result); // async
})

function fetchItems() {
    return new Promise(function(resolve, reject) {
      var items = [1,2,3];
      resolve(items)
    });
  }
  
  async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems); // [1,2,3]
  }