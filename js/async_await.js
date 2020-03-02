const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 500);
  });

const simpleFunc = async () => {
  const data = await Promise.all([
    asyncTimer(),
    fetch("/js/data.json").then(responseStream => {
      return responseStream.json();
    })
  ]);
  return data;
};

simpleFunc()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
