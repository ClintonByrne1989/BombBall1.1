#pragma strict
import UnityEngine.UI;

var centretextgui : GameObject;
var Player1PointGUI : GameObject;
var Player2PointGUI : GameObject;


static var Point1 : int;
static var Point2 : int;

function Update () {
    Player1PointGUI.GetComponent.<Text>().text = "Player 1 : " + Point1;
    Player2PointGUI.GetComponent.<Text>().text = "Player 2 : " + Point2;
    wintext();
}

function wintext(){
    if(Timer.GameState == false){

        if(Point1 >= Point2){
            centretextgui.GetComponent.<Text>().text = "Player 1 Wins";

        }
        if(Point1 <= Point2){
            centretextgui.GetComponent.<Text>().text = "Player 2 Wins";

        }
    }
}
