#pragma strict
//Public Variables//
public var player1 : float = 20;
public var player2 : float = 5;
static var hitstrength : float = 1;
static var Angle : float = 0;
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
function Update(){
    if(Player2Col == true){
        Angle = 0;
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
    
    function OnGUI() {
        while (GUI.Button(new Rect(Screen.width*0.8,Screen.height*0.3,Screen.width*0.2,Screen.height*0.2), "+") ){
            hitstrength += 1;
            Debug.Log("+1");
    
        }

        while (GUI.Button(new Rect(Screen.width*0.6,Screen.height*0.3,Screen.width*0.2,Screen.height*0.2), "-") ){
            hitstrength -= 1;
            Debug.Log("-1");
        }
        while (GUI.Button(new Rect(Screen.width*0.0,Screen.height*0.7,Screen.width*0.2,Screen.height*0.2), "<") ){
            Angle -= 1;
            Debug.Log("<");
        }
        while (GUI.Button(new Rect(Screen.width*0.8,Screen.height*0.7,Screen.width*0.2,Screen.height*0.2), ">") ){
            Angle += 1;
            Debug.Log(">");
        }
    }