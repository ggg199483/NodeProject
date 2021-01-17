

$(function(){



    $("#testBtn").on("click",function(){

        var userName = $("#userName").val();
        var passWd = $("#passWord").val();

        var requestData = { 'userName':userName , 'passWord': passWd};
        $.ajax({
            type:"POST",
            url:" http://127.0.0.1:8999/student/login",
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






    $("#testBtn2").on("click",function(){


        var requestData ;
        $.ajax({
            type:"GET",
            url:" http://127.0.0.1:8999/student/test2",
            dataType:"json",
            data: requestData,
            headers: {
                // "token": sessionStorage.getItem("token"),
                // "type": sessionStorage.getItem("type"),
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

    $("#testBtn3").on("click",function(){
console.log("start 3")
        var userName = $("#userName").val();
        var passWd = $("#pwd").val();

        var requestData = { 'userName':userName , 'passWord': passWd};
        console.log(requestData)
        $.ajax({
            type:"POST",
            url:" http://127.0.0.1:8999/student/test3",
            dataType:"json",
            data: requestData,
            headers: {
                "token": sessionStorage.getItem("token"),
                "type": sessionStorage.getItem("type"),
                contentType:"application/json"
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


    $("#testBtn4").on("click",function(){

        var userId = $("#userId").val();

        var requestData = { 'userId':userId };
        console.log(requestData)
        $.ajax({
            type:"POST",
            url:" http://127.0.0.1:8999/student/test4",
            dataType:"json",
            data: requestData,
            headers: {
                "token": sessionStorage.getItem("token"),
                "type": sessionStorage.getItem("type"),
                contentType:"application/json"
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