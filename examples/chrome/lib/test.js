var worker = new Worker('rusha.js');

worker.onmessage = function (evt) {
  console.log("Called back by the worker!\n");
  console.log(evt);
};

worker.postMessage({id: 1, data: "helloworld"}); // start the worker.