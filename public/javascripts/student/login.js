

$(function(){



    $("#testBtn").on("click",function(){

        var userName = $("#userName").val();
        var passWd = $("#passWord").val();

        var requestData = { 'userName':userName , 'passWord': passWd};
        $.ajax({
            type:"POST",
            url:" http://127.0.0.1:8999/student/register",
            dataType:"json",
            data: requestData,
            headers: {
                "token": sessionStorage.getItem("token"),
                "type": sessionStorage.getItem("type"),
            },
            success:function(data){
                console.log("response!");


                // console.log("uuuuuuuuuuu")
                // localStorage.setItem("cookie","jkfhakjlhfalhfka");
                // console.log(localStorage.getItem("cookie"))
            },
            error:function(jqXHR){
                console.log("Error: "+jqXHR.status);
            }
        });
    });






});