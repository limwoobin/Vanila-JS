function fetchItems() {
    return new Promise(function(resolve, reject) {
      var items = [1,2,3];
      resolve(items)
    });
  }
  

  function Items() {
      return [1,2,3];
  }

  async function logItems() {
    var resultItems = await fetchItems();
    // var resultItems = await fetchItems();
    console.log(resultItems); // [1,2,3]
  }

  logItems();