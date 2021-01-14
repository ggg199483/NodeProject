

$(function(){




    $("#registerBtn").on("click",function(){

        var userName = $("#userName").val();
        var passWd = $("#passWord").val();
        $.ajax({
            type:"POST",
            url:" http://127.0.0.1:8999/student/register",
            dataType:"json",
            data :{"userName":userName,
                'passWord':passWd},
            headers: {
                // "token": sessionStorage.getItem("token"),
                // "type": sessionStorage.getItem("type"),
            },
            success:function(data){
                console.log("response!");
                console.log(data)

            },
            error:function(jqXHR){
                console.log("Error: "+jqXHR.status);
            }
        });
    });






});