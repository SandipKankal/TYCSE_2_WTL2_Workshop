const helperPromise = function () {
    const promise = new Promise(function (resolve, reject) {
      const x = "LearnNode";
      const y = "LearnNode";
      if (x === y) {
        resolve("Strings are same");
      } else {
        reject("Strings are not same");
      }
    });
 
    return promise;
  };
 
  async function demoPromise() {
    try {
      let message = await helperPromise();
      console.log(message);
    } catch (error) {
      console.log("Error: " + error);
    }
  }
 
  demoPromise();
