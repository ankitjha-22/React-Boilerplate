// Worker code runs in a separate thread
self.onmessage = (event) => {
  const { type, payload } = event.data;
  const url = payload;
  const workerSource = new EventSource(url);
  workerSource.onopen = (event) => {
    console.log("Connection opened:", event);
  };

  workerSource.onmessage = (message) => {
    console.log(message);
    self.postMessage({ result: message.data });
  };

  workerSource.onerror = (error) => {
    console.log(error);
    if (workerSource) {
      workerSource.close();
    }
  };

  //  client.write(`event: specialEvent\n`); on server
  workerSource.addEventListener("specialEvent", (event) => {
    console.log("Custom Special Event", event);
  });

  self.postMessage({ result: "Hi User" }); // Send the result back to the main thread
};
