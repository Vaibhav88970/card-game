let card_type=['♣','♠','♦','♥'];
let card_number=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
let suit=[];
let you=0, count=0,color="",computer=0,yourScore=0,computerScore=0,youcn=0,youct=0,compcn=0,compct=0,card={};
function InitialValue()
{
    you=0;
    computer=0;
    yourScore=0;
    computerScore=0;
     youcn=0;
     youct=0;
     compcn=0;
     compct=0;
     card={};
     color="";
     count=0;   
}
//creating combination of card_type and card_number
function initialsuit()
{
for(let i=0;i<4;i++)
{
    for(let j=0;j<card_number.length -1;j++)
    {
        card={CardType:card_type[i], CardNumber:card_number[j]};
        suit.push(card);
    }
}
}
initialsuit();

//randomize the suit
 
function randomize(){
    
        suit.sort(() => Math.random() - 0.5);   
}
//console.log(suit);



$(".shuffle").on("click", function()
{
    let s="";

        for(let i=1;i<=7;i++)
         {
         s=".A"+i;
         $(s).addClass("animate");
          ran=Math.random()+"s";
          $(s).css({
          "animation-duration":ran,
          });
            randomize();
        }
        s="";
        setTimeout(()=>{
            for(let i=1;i<=7;i++)
            {   
                s=".A"+i;
                $(s).removeClass("animate");
            } 
        },1000);
    }
    
)

$(".distribute").on("click", function(){
   initialiseCard();
   $(".you").addClass("distribute");
   $(".comp").addClass("computeranimate");
  function distribute(ani)
   {      
    $(ani).css({"position":"relative",
    "background":"url(https://tse4.mm.bing.net/th?id=OIP.Bs9EpXBvazxnWrM4x2LtEwHaKi&pid=Api&P=0&w=114&h=162)",
    "background-size":"190px",
    "animation-duration":"0.3s",
    });
}
distribute(".you");
distribute(".comp");
    
   you=suit.pop();
   computer=suit.pop();
   console.log(you);
   console.log(computer);
   setTimeout(()=>{
    $(".you").removeClass("distribute");
    $(".comp").removeClass("computeranimate");
   }, 300);
})


//calculating the score by comparing card_type and card_number
function calScore(){
    youct=card_type.indexOf(you.CardType);
    youcn=card_number.indexOf(you.CardNumber);
    compct=card_type.indexOf(computer.CardType);
    compcn=card_number.indexOf(computer.CardNumber);
    if(youct>=compct)
    {
        yourScore++;
    }
    else if(youct==compct&& youct>compct)
    {
        yourScore++;
    }
    else{
        computerScore++;
    }

   // console.log(yourScore);
    //console.log(computerScore);
}
function initialiseCard()
{
    $("#back span").text("");
    $("#cback span").text("");
}


//to restart the game, initialise all the value to zero
function checkwinner()
{
        if(yourScore>computerScore)
        {
            winner("#you");
        }
        else{
            winner("#comp");
        }
    
    function winner(win)
    {
       $(win).text("Winner");
       InitialValue();
    initialsuit();
    }
}
$("#rs").on("click",function(){
    InitialValue();
    initialsuit();
    initialiseCard();
    $(".you").css({"position":"relative",
    "background":"url(https://tse4.mm.bing.net/th?id=OIP.Bs9EpXBvazxnWrM4x2LtEwHaKi&pid=Api&P=0&w=114&h=162)","background-size":"190px",
    "animation-name":"distribute",
    "animation-duration":"0.3s",
    "animation-direction":"reverse"
    })
})

//to show the cards
function textColor(ct)
{
    if((card_type.indexOf(ct))<=1)
    {
        color="black";
    }
    else{
        color="red";
    }
}
function showcard(back)
{
    $(back).css({"background":"white",
    "color":color,
    "text-align":"center",
    "font-size":"100px",
    "padding":"70px 20px 20px 15px",
    "positiom":"absolute",
    "transition":"transfrom 0.6s",
    "transform-style":"preserve-3d",
    "border":"solid 2px black",
    "transform":"rotateY(180deg,180deg)"}); 
}


$(".show").on("click",function(){
    count++;
    if(count>26)
    {
        checkwinner();
    }
    else{     
    calScore();
    $("#you span").text(yourScore);
    $("#comp span").text(computerScore);
    
    $("#back span").text(you.CardType+you.CardNumber);
    textColor(you.CardType);
    showcard("#back");

    $("#cback span").text(computer.CardType+computer.CardNumber);
    textColor(computer.CardType);
    showcard("#cback");
    color="";
    }
});