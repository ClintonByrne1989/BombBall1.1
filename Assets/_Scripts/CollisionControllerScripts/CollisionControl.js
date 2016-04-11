#pragma strict
// Game Objects
var DevText : GameObject;
var rb : Rigidbody;

//Public Variables//
public var player1 : float = 20;
public var player2 : float = 5;
public var colheight : float = 2;

//Static Variables//
static var Player1Col = false;
static var Player2Col = false;
static var hitstrength : float = 1;
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
    hitstrength = Input.acceleration.x;
    Angle = Input.acceleration.z;




   // Reset Angle and hitstrength 
    if(Player2Col == true){
        Angle = 0;
    }
    if(Player2Col == true){
        hitstrength = 0;
    }
}

function OnTriggerEnter(obj : Collider) {  
    var name = obj.gameObject.tag;
    
    if (obj.gameObject.tag == "Player") {
        Player1Col = true;
    		
    }		

    if (obj.gameObject.tag == "Player2") {
        Player2Col = true;
    }
}

    function player1collision (){
        if (Player1Col == true){
            rb.velocity = Vector3(Angle,colheight,player1 + hitstrength);
            Player1Col = false;
        }
    }
    function player2collision(){
        if (Player2Col == true){
            rb.velocity = Vector3((Random.Range(-5, 5)),colheight,player2);
            Player2Col = false;
        }
    }









    /*TimerGUI.GetComponent.<Text>().text = "Time: " + CountDownTime;*/