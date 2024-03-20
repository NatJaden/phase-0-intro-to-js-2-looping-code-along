const names = ["Guadalupe", "Ollie", "Aki"];
let event = "birthday";

function writeCards(names, event) {
  const message = [];
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return message;
}
const message = writeCards(names, event);
console.log(message);

function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown--);
  }
}
