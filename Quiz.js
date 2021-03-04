class Quiz{

constructor(){



}

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
        if( contestantCountRef.exists()){
            contestantCount =  contestantCountRef.val();
            contestant.getCount();
        }
        question = new Question()
        question.display();
   
 }


}


play(){

  background("yellow");

  question.hide();

  var result = createElement('h2');
  result.html("Result Of The Quiz ");
  result.position(355, 50);

  getContestantInfo();


  textSize(25);
  fill("blue");
  text("Note:- Contestants who answerd correct are highlighted in green color",25,300);

  for(var plr in allContestants){
    var correctAns = "2";
    if(correctAns === allContestants[plr].answer){
      
       fill("green");

    }else{

     fill("red");

    }

  }
  
}


}