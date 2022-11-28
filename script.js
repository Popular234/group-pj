console.log("hello world")


function stgame(){
    let choiceone = prompt("you start in a small cabin deep in the woods, your objective is to discover the 3 pages. You wake up early in the morning to hear scratching at your wall above your head. you decide to get up and check it out. Before you head out front to check out the noise you have a few options, you can choose to go to the right, out the back of the cabin, straight, to the kitchen to make food, or left, outside to investigate the noise.");
    
    const right= "right";
    const straight= "straight";

    if (choiceone === right){
        console.log("you chose right");
        var choosetool = prompt("you go to the back of the cabin, you see in the back of the cabin near your wood pile there is a dullaxe, on the table to your left there is a db-shotgun and hanging against the back wall of your cabin you have a grim-reaper-costume complete with plastic scythe. please choose axe, shotgun, or costume.");
    }
    
    else if(choiceone === straight){
        choosefood();
    }
   
    else{
        alert("you chose to just go outside and not get anything for the road, good luck")
        onyourway()
    }

    const axe = "axe"
    const shotgun = "shotgun"
    const costume = "costume"

    if (choosetool == axe){
        alert("you chose axe, good luck on your travels")
        onyourway()
    }

    else if (choosetool == shotgun){
        alert("you chose shotgun, you better hit your shots")
        onyourway()
    }

    else if (choosetool== costume){
        alert("you chose the costume, dumb choice but okay")
        onyourway()
    }
}


function choosefood(){
     let choosefood = prompt("you chose to go to the kitchen, now you see 3 sandwiches and you can choose only one. please choose between pbj, tuna, or pbh.");
    
    const pbj = "pbj"
    const tuna = "tuna"

     if (choosefood === pbj){
        alert("you chose the pbj and you felt a little sick, suddenly you struggle to breathe and collapse ''you lived a good life'' Ending 1 of ")
    }

    else if (choosefood === tuna){
        alert("good choice, you satisfied your hunger and remembered you had a peanut alergy")
        onyourway()
    }

    else{
        alert("you just had to go for it, you collapse on the ground and proceed to start seeing the pink elephant before you ultimatly fade into darkness. Ending 2 of")
    }

}



function onyourway(){
    let onyourway = prompt("once you start on your way out the front door you have a couple choices, you see a cellar to your left, the woods straight ahead, and a pool to your right")

    const left = "left"
    const right = "right"

    if (onyourway === left){
        alert("you open the door of the cellar and you take a step down, there you slip and fall down the steps and crack your skull open. slow and steadty wins the race. Ending 3 of")

    }
    else if (onyourway === right){
        var object = prompt("you make it to your pool and you see what looks to be a gold item lurking on the bottom of the pool, do you choose to go in a grab it?")
    }
    else{
        alert("you chose to continue on your way, suit yourself")
        nextstep()
    }

    
  

    const yes = "yes"
    const no = "no"

    if (object === yes){
        alert("you found a duck, good for you.")
        nextstep()
    }
    else if (object === no){
        alert("you chose to not grab the item, that could have been your best friend, good for you")
        nextstep()
    }
    else{
        alert("you chose to continue on your way, suit yourself")
        nextstep()
    }

}



function nextstep(){
    var attack = prompt("you hear a noise through the trees and you see a sudden flash, then a faceless figure appears in front of you wearing a black suit with tentacles appearing out of it back. you feel yourself freeze, do you choose to attack and defend yourself or run and hope for your life? please type attack or run ")
    
    var choosetool

    const yes = "yes"
    const no = "no"

   if (attack == attack && choosetool == axe){
    alert("you couldnt get close close enough to hit the figure with the axe, you died by tentacle through the chest. Ending ")
   } 
   else if (attack == attack && choosetool == shotgun){
    alert("you tried to aim your shotgun, you fired your shots and missed all but two. two is not enough. Ending")
   }
//    else if ()
}




