#pragma strict
//Public Variables//
public var rb : Rigidbody;
public var PowerA : float = 10;
public var PowerB : float = 10;
public var ServeHeight : float = 3;
//Static Variables//
static var buttona = true;
static var buttonb = true;

function Start () {
    rb = GetComponent.<Rigidbody>();
}

function OnGUI() {
    if(buttona == true){
        while (GUI.Button(new Rect(Screen.width*0.4,Screen.height*0.9,Screen.width*0.05,Screen.height*0.1), "A") ){
            rb.velocity = Vector3(0,ServeHeight,PowerA);
            buttona = false;
            buttonb = false;
        }
    }

    if(buttonb == true){
        while (GUI.Button(new Rect(Screen.width*0.5,Screen.height*0.9,Screen.width*0.05,Screen.height*0.1), "B") ){
            rb.velocity = Vector3(0,ServeHeight,PowerB);
            buttona = false;
            buttonb = false;
        }	
    }
}