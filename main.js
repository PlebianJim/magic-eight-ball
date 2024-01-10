function magicEightBall() {
  //Array of possible outcomes
  const fortunes = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Absolutely",
    "Affirmative",
    "All signs point to yes",
    "As I see it, yes",
    "Beyond a shadow of a doubt",
    "By all means",
    "Certainly",
    "Confidently",
    "Count on it",
    "Definitely",
    "Doubtful",
    "Far from certain",
    "Figure it out yourself",
    "I'm not sure",
    "In your dreams",
    "It can go either way",
    "It is possible",
    "Maybe",
    "No way",
    "Of course",
    "Outlook is good",
    "Prospect good",
    "Seems like it to me",
    "There is a chance",
    "Unlikely",
    "Unsure at this point",
    "Who knows",
    "Why are you asking me?",
    "You'll have to wait",
    "You may never know",
    "You will have to decide for yourself",
  ];

  //Get DOM elements
  const button = document.getElementById("questionButton");
  const answerEl = document.getElementById("answer");

  //Nested function to generate a random number
  const getRandomNumber = () => {
    //Returns a random number between 0 and fortunes.length
    return Math.floor(Math.random() * fortunes.length);
  };

  //Add click event listener to button
  button.addEventListener("click", () => {
    //Get random index number
    const randomIndex = getRandomNumber();

    //Get random fortune
    const randomFortune = fortunes[randomIndex];

    //Update DOM with fortune
    answerEl.textContent = randomFortune;

    //Update the src attribute of the image
    const image = document.getElementById('8ball');
    image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";
  });
}

magicEightBall();
