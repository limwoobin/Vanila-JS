// Pending - 대기
// Fulfilled - 이행(완료)
// Rejected - 실패

var _promise = function (param) {

	return new Promise(function (resolve, reject) {
		global.setTimeout(function () {
			if (param) {
				resolve("해결 완료");
			}
			else {
				reject(Error("실패!!"));
			}
		}, 1000);
	});
};


_promise(true)
.then(text => {
    console.log(text);
})
.then((data) => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});

new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve(1);
    }, 2000);
  })
  .then(function(result) {
    console.log(result); // 1
    return result + 10;
  })
  .then(function(result) {
    console.log(result); // 11
    return result + 20;
  })
  .then(function(result) {
    console.log(result); // 31
  });


new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log(0);
        resolve(111);
    }, 1000);
})
.then((data) => {
    console.log(data);
    return data+111;
})
.then((data) => {
    console.log(data);
    return data+111;
})
.then((data) => {
    console.log(data);
    return data+111;
})
.then((data) => {
    console.log(data);
    return data+111;
})
.catch((err) => {
    console.log(err);
})

