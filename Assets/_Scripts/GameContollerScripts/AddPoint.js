#pragma strict

function OnTriggerEnter(obj : Collider) {  
    var name = obj.gameObject.tag;
 
    if (obj.gameObject.tag == "Player") {
        PointTracker.Point1 += 1;
    }

    if (obj.gameObject.tag == "Player2") {
        PointTracker.Point2 += 1;
    }
}