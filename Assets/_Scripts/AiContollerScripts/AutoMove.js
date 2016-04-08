#pragma strict
var ball : GameObject;
var Player2 : GameObject;
//var Player1 : GameObject;

function Update () {
    Player2.transform.position.x = ball.transform.position.x;	
  //  Player1.transform.position.x = ball.transform.position.x;	    	 		
}


//simple z.transform script that matches player2's z position to the balls current .z pos