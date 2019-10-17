$(document).ready(function(){
$("#registerForm").submit(function(click){
click.preventDefault();
const firstName = $("#firstName").val();
const lastName = $("#lastName").val();
const email = $("#email").val();
const phone = $("#phone").val();
const password = $("#password").val();

//Ensuring all Fields are filled //


if(!firstName || !lastName || !email || !phone || !password){
    $(".register-heading").html("Kindly fill in all fields!!..");
    return;
}

$.ajax({
    method: "GET",
    url: `http://localhost:3000/users`,
    data: {
        email,
    },
    success: function(response){
        if(response.length){
            $(".regMessage").html("user already exist");
        } else {
                $.ajax({
                    method: "POST",
                    url: `http://localhost:3000/users`,
                    data: {
                            firstName,
                            lastName,
                            email,
                            phone,
                            password,
                        }, 
                        beforeSend: function(){
                        $(".regMessage").html("Loading Please Wait..");
                        },  
                    success: function(){
                        $(".regMessage").html("Registration Successful");
                    },
                })
            }   
        
    },
    
})
});
});