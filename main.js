function timeit(fn) {
  return function tt() {
    const args = arguments;
    return new Promise(async function (myResolve) {
      const st = Date.now();
      const answer = await fn(...args);
      const et = Date.now();
      myResolve({ value: answer, time: et - st });
    });
  };
}
