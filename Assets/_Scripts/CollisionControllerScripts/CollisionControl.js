#pragma strict
// Game Objects
var DevText : GameObject;
var rb : Rigidbody;

//Public Variables//
public var Player1 : float = 20;
public var Player2 : float = 5;
public var ColHeight : float = 2;

// True / False Variables//
static var Player1Col = false;
static var Player2Col = false;

//Static Variables//
static var HitStrength : float = 1;
static var Angle : float = 0;

function Start () {
    rb = GetComponent.<Rigidbody>();
}

function FixedUpdate(){
    player1collision();
    player2collision();
}
function Update(){
    //DevText.GetComponent.<Text>().text = hitstrength;
    HitStrength = Input.acceleration.x;
    Angle = Input.acceleration.z;

   // Reset Angle and hitstrength 
    if(Player2Col == true){
        Angle = 0;
    }
    if(Player2Col == true){
        HitStrength = 0;
    }
}

// Detect Collisions

function OnTriggerEnter(obj : Collider) {  
    var name = obj.gameObject.tag;
    
    if (obj.gameObject.tag == "Player") {
        Player1Col = true;
    }		

    if (obj.gameObject.tag == "Player2") {
        Player2Col = true;
    }
}
// Collision Functions

function player1collision (){
        if (Player1Col == true){
            rb.velocity = Vector3(Angle,ColHeight,Player1 + HitStrength);
            Player1Col = false;
    }
}
function player2collision(){
        if (Player2Col == true){
            rb.velocity = Vector3((Random.Range(-5, 5)),ColHeight,Player2);
            Player2Col = false;
    }
}