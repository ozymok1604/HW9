const randomChar = () => {
  let k = Date.now().toString();
  let char = String.fromCharCode(+k.slice(k.length - 5, k.length));
  return char;
};

async function getRandomChinese(length) {
  let word = "";
  for (let i = 0; i < length; i++) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve((char = randomChar())), 500);
    });

    let result = await promise;

    word += char;
  }
  console.log(word);
}

getRandomChinese(5);
