let names = ["Guadalupe","Ollie","Aki"];
let event = "birthday"

function writeCards(names, event) {
    const message = [];
  for (let i = 0; i < names.length; i++) {
   const message = `Thank you ${names[i]} for the wonderful ${event} gifts`
     
    messages.push(message);
  }
  return message ;
}

function countDown () {
    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--)

    }
}
