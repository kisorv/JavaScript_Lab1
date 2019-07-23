let name = "Veronica Kisor";
let age = 33;
let birthday = "May 17th";
let detroitGC = true;
let lifeEvents = [
  "I was born in Detroit, MI.",
  "I attended Michigan State University for my BA in Mathematics.",
  "I got married in 2012.",
  "I have a 5-year old son."
];

if (detroitGC === true) {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Detroit, Michigan.  I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      " ."
  );
} else {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Grand Rapids, Michigan.  I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      " ."
  );
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let randomNumber = Math.floor(Math.random() * 10);
let counter = 0;

while (true) {
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !==5`);
    randomNumber = Math.floor(Math.random() * 10) + 1;
    counter++;
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
