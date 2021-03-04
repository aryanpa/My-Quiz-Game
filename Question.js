class Question {
    constructor() {
      
  this.input = createInput("Name");
  this.input1 = createInput("Answer");
  this.button = createButton("Submit");
  this.greeting = createElement("h3");
  this.question = createElement("h3");
  this.option1= createElement("h3");
  this.option2 = createElement("h3");
  this.option3 = createElement("h3");
  this.option4 = createElement("h3");


    }
  
 
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz Game");
      title.position(355, 50);
        
        this.question.html("Question:- What starts and ends with letter 'E', but has only one letter?");
        this.question.position(25,150);
        this.option1.html("1: Everyone");
        this.option1.position(25,175);
        this.option2.html("2: Envelope");
        this.option2.position(25,200);
        this.option3.html("3: Esetimate");
        this.option3.position(25,225);
        this.option4.html("4: Example");
        this.option4.position(25,250);

        this.input.position(200, 325);
        this.input1.position(400, 325);

       

        this.button.position(355, 375); 

        this.button.mousePressed(()=>{

          contestant.name =  this.input.value();
          contestant.answer =  this.input1.value();

          contestantCount+=1;
          contestant.index =  contestantCount;
          contestant.update()
          contestant.updateCount(contestantCount); 

        })
      
  
    }
  }
  