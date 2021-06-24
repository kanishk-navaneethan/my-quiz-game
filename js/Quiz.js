class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
  question.hide();




    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz
    fill("blue")
    textSize(25)
    text("Result of the Quizzzzzz",340,50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined) {
 //     undebugger;
      var display_Answer = 250;
    }

    //write code to add a note here
    fill("red")
  textSize(20)
    text("NOTE:::The contestent who answer correctly will be highlighted")

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
   //   debugger;
      var correctAns="2";
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red")

      display_Answer+=30;
      textSize(20);
      text(allContestants[plr].name+" : "+allContestants[plr].answer,250,display_Answer);
    }
  }

}
