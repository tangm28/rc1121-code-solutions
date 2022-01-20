let count = 3;
const countdown = setInterval(
  () => {
    console.log(count--);
    if (count === 0) {
      clearInterval(countdown);
      console.log('Blast off!');
    }
  }, 1000);
