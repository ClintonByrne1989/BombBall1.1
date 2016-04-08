#pragma strict
//Public Variables//
public var player1 : float = 20;
public var player2 : float = 5;
public var colheight : float = 2;
public var rb : Rigidbody;
//Static Variables//
static var Player1Col = false;
static var Player2Col = false;

function Start () {
    rb = GetComponent.<Rigidbody>();
}

function FixedUpdate(){
    player1collision();
    player2collision();
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
            rb.velocity = Vector3((Random.Range(-5, 5)),colheight,player1);
            Player1Col = false;
        }
    }
    function player2collision(){
        if (Player2Col == true){
            rb.velocity = Vector3((Random.Range(-5, 5)),colheight,player2);
            Player2Col = false;
        }
    }
