/**
 * Created by user on 10/30/15.
 */

var toBeCalculated = {};

$(document).ready(function(){
    $("#post1").on('click', calcValOne);
    $("#post2").on('click', calcValTwo);
    $("#addition").on('click', function(){
       toBeCalculated.calculation = "add";
        getAnswer();
        //return console.log(toBeCalculated);
    });
    $("#subtraction").on('click', function(){
        toBeCalculated.calculation = "subtract";
        getAnswer();
        //return console.log(toBeCalculated);
    });
    $("#multiplication").on('click', function(){
        toBeCalculated.calculation = "multiply";
        getAnswer();
        //return console.log(toBeCalculated);
    });
    $("#division").on('click', function(){
        toBeCalculated.calculation = "divide";
        getAnswer();
        //return console.log(toBeCalculated);
    });

    $("#clearBtn").on('click', '.clear', function(){
        $(".result").empty();
    });


});







function calcValOne (){
    $.each($("#inputValOne").serializeArray(), function(i, field){
        toBeCalculated[field.name]=field.value;
    });

    $("#inputValOne").find("input[type=text]").val("");

}

function calcValTwo(){
    $.each($("#inputValTwo").serializeArray(), function(i, field){
        toBeCalculated[field.name]=field.value;
    });

    $("#inputValTwo").find("input[type=text]").val("");

}

function getAnswer(){
    $.ajax({
        type: "POST",
        url: "/math",
        data: toBeCalculated,
        //beforeSend: function() {
            //console.log("Here is the calculation object ", toBeCalculated);
       // },
    success: function postAnswer(data){
        console.log(data);
        $(".result").text(data);;
    }

});

}

//function postAnswer(data){
//    $('#input-answer').text(data);
//}





