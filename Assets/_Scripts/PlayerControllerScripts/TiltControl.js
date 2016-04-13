#pragma strict
var DevText : GameObject; //Centre Dev Text

public var MoveSpeed : float;

function Update () {
    
    GetComponent.<Rigidbody>().velocity.x = Input.GetAxis("Horizontal") * MoveSpeed;
}




function OnGUI() {
    while (GUI.Button(new Rect(Screen.width*0.85,Screen.height*0.25,Screen.width*0.15,Screen.height*0.15), "+") ){
        CollisionControlAndroid.HitStrength += 1;
        
    }

    while (GUI.Button(new Rect(Screen.width*0.85,Screen.height*0.4,Screen.width*0.15,Screen.height*0.15), "-") ){
        CollisionControlAndroid.HitStrength -= 1;
        
    }
    while (GUI.Button(new Rect(Screen.width*0.0,Screen.height*0.8,Screen.width*0.2,Screen.height*0.2), "<") ){
        CollisionControlAndroid.Angle -= 1;
        
    }
    while (GUI.Button(new Rect(Screen.width*0.8,Screen.height*0.8,Screen.width*0.2,Screen.height*0.2), ">") ){
        CollisionControlAndroid.Angle += 1;
             
    }
    debugmessages(CollisionControlAndroid.Angle.ToString());
}

function debugmessages(msg : String){
    DevText.GetComponent.<Text>().text = msg;
    Debug.Log(msg);
}
