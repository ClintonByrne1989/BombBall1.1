#pragma strict
import UnityEngine.UI;

var TimerGUI : GameObject;
public var TotalTime : float;
static var CountDownTime : int;
static var GameState = true;


function Update(){
    countdowntime();
    endofgame();
    Debug.Log(GameState);
}

function countdowntime(){

    if(GameState == true){
        CountDownTime = TotalTime - Time.time;
            TimerGUI.GetComponent.<Text>().text = "Time: " + CountDownTime;
    }
}

function endofgame(){

    if(CountDownTime == 0){
        GameState = false;
            Time.timeScale = 0;
    }
}