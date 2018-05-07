$(function () {
    $("#myform #submit").click(function (e) {
        e.preventDefault();

        $(this).attr("disabled", true);
        setTimeout(3000);

        // check email

        if (checkemail()) {
            $('#email').css('border-color', 'green')
        } else {
            $('#email').css('border-color', 'red')
            $(this).parent().before("<div>").prev()
            .addClass("alert alert-danger").text("Emaili duz yaz!").delay(2000).slideUp(2000);
            return;
        }
         // check password

        if (checkpassword()) {
           $('#password').css('border-color', 'green')
        } else {
             $('#password').css('border-color', 'red')
            $(this).parent().before("<div>").prev()
            .addClass("alert alert-danger").text("Password 8 simvol olmalidir!").delay(2000).slideUp(2000);
            return;
        }

         // check city

        if (checkcity()) {
           $('#choosecity').css('border-color', 'green')
        } else {
             $('#choosecity').css('border-color', 'red')
            $(this).parent().before("<div>").prev()
            .addClass("alert alert-danger").text("Sheher sechin!").delay(2000).slideUp(2000);
            return;
        }
   
        // check info

        if(checkinfo()){
             $('#about').css('border-color', 'green')
             $(this).parent().before("<div>").prev()
            .addClass("alert alert-success").text("Great Win!").delay(2000).slideUp(2000);
        }
            else{
                 $('#about').css('border-color', 'red')
                $(this).parent().before("<div>").prev()
            .addClass("alert alert-danger").text("Info daxil edin!").delay(2000).slideUp(2000);
            }
    })
})

function checkemail() {
    var email = $("#email").val();
    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

function checkpassword() {
    var password = $("#password").val();
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

function checkcity() {
    var option = $("#choosecity option:selected").html();
    if (option != "Select option...") {
        return true;
    } else {
        return false;
    }
}

function checkinfo() {
    var about = $("#about").val();
    if (about == "") {
        return false;
    } else {
        return true;
    }
}