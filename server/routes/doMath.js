/**
 * Created by user on 10/30/15.
 */
function doMath(mathobject){
    var num1 = parseInt(mathobject["value1"]);
    var num2 = parseInt(mathobject["value2"]);
    var calc = mathobject["calculation"];
    switch (num1, num2, calc){
        case (calc="add"):
            answer=num1 + num2;
            break;
        default:
            answer=console.log("switch not working");
    }
    return answer;//This does console.log out. So, this portion is working, and the POST data from client is making it in.
}

module.exports = doMath;

