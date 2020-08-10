// var name = $("#fname").value;
// var status = $("#status");
// var error = $("#error-message");

// var text;
// var validate;

// window.validation = function (){
//     var name = document.getElementById("fname").value;
//     var status = document.getElementById("status");
//     var error = document.getElementById("error-message");
//     error.style.padding = "25px";
//     var text;
    // var name = $("#fname").val();
    // var status = $("#status");
    // var error = $("#error-message");

    // var text;
    // var validate;
    // $("#error-message").css("padding", "25px");
    // if(name.length == 0){
    //     text = "Please enter your name";
    //     error.html(text);
    //     validate = false;
    //     return validate;
    // } else {

        $("#submit-form").submit((e)=>{   
            var name = $("#fname").val();
            var status = $("#status option:selected").text();
            var error = $("#error-message");
            var plocation = $("#permanent-location option:selected").text();
            var wlocation = $("#work-location option:selected").text();
            var agegroup = $("#age option:selected").text();
            var num= $("#number").val();
            var text;
            
            if(name.length == 0){
                $("#error-message").css("padding", "13px");
                text = "Please enter your name";
                error.html(text);
                validate = false;
                return validate;
            }
            else if(status == "Status"){
                $("#error-message").css("padding", "13px");
                text = "Choose your status";
                error.html(text);
                validate = false;
                return validate;
            }
            else if( location == "Choose District"){
                $("#error-message").css("padding", "13px");
                text = "Please select district";
                error.html(text);
                validate = false;
                return validate;
            }
            else if( plocation == "Choose District"){
                $("#error-message").css("padding", "13px");
                text = "Please select district";
                error.html(text);
                validate = false;
                return validate;
            }
            else if( wlocation == "Choose District"){
                $("#error-message").css("padding", "13px");
                text = "Please select district";
                error.html(text);
                validate = false;
                return validate;
            }
            else if( agegroup == "Choose Age Group"){
                $("#error-message").css("padding", "15px");
                text = "Please select age group";
                error.html(text);
                validate = false;
                return validate;
            }
<<<<<<< HEAD
            else if( num.length != 10){
=======
            else if( num.length != 0){
>>>>>>> f8380d502a937bacf5453eb6214095ebd3fe9925
                $("#error-message").css("padding", "13px");
                text = "Please enter a valid number";
                error.html(text);
                validate = false;
                return validate;
            }
            else{
                $(".animation-container").addClass("loader-container");
                $(".animation").addClass("loader");

            }

            



            e.preventDefault();
                $.ajax({
                    url:"https://script.google.com/macros/s/AKfycbyIaImQ5DsTbu3NHyBzxGH0e-wJK-T0vNAm3xeumyJxJtwQfUU/exec",
                    data:$("#submit-form").serialize(),
                    method:"post",
                    success:function (response){
                        //alert("Form submitted successfully")
                        //window.location.reload()
                        window.location.href="success.html";
                    },
                    error:function (err){
                        alert("Something Error");

                    }
                });
            
        
    });
        // return true
    
// };

// $("#submit-form").submit((e)=>{
//     e.preventDefault();
//     function validation(){
//         var name = $("fname").value;
//         var status = $("status");
//         var error = $("error-message");
//         error.style.padding = "25px";
//         var text;
//         alert("false");

//         if(name.length == 0){
//             text = "Please enter your name";
//             error.innerHTML = text;
//             return false;
//         }
//         alert("false");
//         return false;

//     }
//     validation();
//     if(validation){
//         $.ajax({
//             url:"https://script.google.com/macros/s/AKfycbyIaImQ5DsTbu3NHyBzxGH0e-wJK-T0vNAm3xeumyJxJtwQfUU/exec",
//             data:$("#submit-form").serialize(),
//             method:"post",
//             success:function (response){
//                 //alert("Form submitted successfully")
//                 //window.location.reload()
//                 window.location.href="success.html";
//             },
//             error:function (err){
//                 alert("Something Error");

//             }
//         });
//     }
// });
