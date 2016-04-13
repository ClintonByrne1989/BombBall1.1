#pragma strict

var DevText : GameObject; //Centre Dev Text
private var rb : Rigidbody;

public var Player1 : float;
public var Player2 : float;
public var ColHeight : float;

static var Player1Collision = false;
static var Player2Collision = false;
static var HitStrength : float;
static var Angle : float;

function Start(){
    rb = GetComponent.<Rigidbody>();
}

function Update(){
    player1collision(); 
    player2collision();
 //   debugmessages();

    if(Player1Collision == true){
        Angle = 0;  // resets the angle back to 0
        HitStrength = 0; // resets the hitstrength back to 0
    }
    //caps Angle and HitStrength
    if(Angle >= 5){
        Angle = 5;
    }
    if(Angle <= -5){
        Angle = -5;
    }
    if(HitStrength >= 10){
        HitStrength = 10;
    }
    if(HitStrength <= -10){
        HitStrength = -10;
    }
}



function OnTriggerEnter(obj : Collider) {  
    var name = obj.gameObject.tag;
    
    if (obj.gameObject.tag == "Player") {
        Player1Collision = true;    //activates the player1collision function
    }		

    if (obj.gameObject.tag == "Player2") {
        Player2Collision = true;    //activates the player2collision function
    }
}
function player1collision (){
    if (Player1Collision == true){ //checks if the ball has collided with player1
        rb.velocity = Vector3(Angle,ColHeight,Player1 + HitStrength); //if the collision is true returns the ball.
        Player1Collision = false; //resets the player1collision detection
        }
}
function player2collision(){
    if (Player2Collision == true){ //checks if the ball has collided with player2
        rb.velocity = Vector3((Random.Range(-5, 5)),ColHeight,Player2); //if the collision is true returns the ball.
        Player2Collision = false; //resets the player2collision detection
       }
}
