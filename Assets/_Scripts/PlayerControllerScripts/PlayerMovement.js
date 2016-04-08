#pragma strict

public var LeftSpeed : float = 2;
public var RightSpeed : float = -2;
public var MoveSpeed : float = 2;


function Update(){
    GetComponent.<Rigidbody>().velocity.x = Input.GetAxis("Horizontal") * MoveSpeed;
}

function OnGUI() {

    while (GUI.RepeatButton(new Rect(Screen.width*0.0,Screen.height*0.8,Screen.width*0.1,Screen.height*0.1), "Left") ){
        transform.Translate(LeftSpeed,0,0);
            
    } 
    while (GUI.RepeatButton(new Rect(Screen.width*0.1,Screen.height*0.8,Screen.width*0.1,Screen.height*0.1), "Right") ){
        transform.Translate(RightSpeed,0,0);

    }
}