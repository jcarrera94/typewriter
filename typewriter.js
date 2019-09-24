const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  delay = delay + 50;
  if(delay === (sentence.length) * 50) {
    setTimeout(() => console.log(char), delay);
    break;

  }
  setTimeout(() => process.stdout.write(char), delay)

}