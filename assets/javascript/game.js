 
  <script>
var randomWordArr = ["hamster","death","ill","design","designed","designation","system","systematic","Pashtunwali","Punjabi","Amazigh",
      "Seize","Orlando","Universal","immoral","Eraser","Porter","Spirit","Beehive","Clockwork", "Yehoshua","Jesus","Iesous","Yahweh","Persia","Salvation","Arjuna","Krishna","Gopher","Antarctica","Abomination","Argentina","Why","Georgia"]
      var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];


      var s;
      var count = 0;
      var answerArray = []

      function startUp()
      {

        for (var i = 0; i < randomWord.length; i++)
         {

          answerArray[i] = "_";
          
         }

      }


      s = answerArray.join(" ");
      document.getElementById("answer").innerHTML = s;

      function Letter()
      {
        var letter = document.getElementById("letter").value;

        if (letter.length > 0)
        {
          for (var i=0; i < randomWord.length; i++)
          {
            if (randomWord[i] === letter)
            {
              answerArray[i] = letter
            }

          }

          count++

          document.getElementById("counter").innerHTML = "No of clicks: " + count;
          document.getElementById("answer").innerHTML = answerArray.join(" ");


        }


   
      if(count === 3){
        alert("7 tries left.")
      }



      if(count === 5){
        alert("5 tries left.")
      }


      if(count === 8){
        alert("2 tries left.")
      }

        if(count>10)
        {
          alert("You're dead.");
        }


      }
