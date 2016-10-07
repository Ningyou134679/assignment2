function test_submit(){
  $(".error").hide();

  var x = document.getElementById("form1");
  if(x.elements["name"].value==""){
    $("#name_error").show();
    document.getElementById("name_error").innerHTML="Input cannot be null";
    return false;
  }
  $("#name_error").hide();

  x = document.getElementById("pswd").value.length
  if(x<5||x>10) {
    $("#password_error").show();
    document.getElementById("password_error").innerHTML="Enter a password between length 5-10";
    return false;
  }
  $("#password_error").hide();

  if(!check_radio()){
    $("#gender_error").show();
    document.getElementById("gender_error").innerHTML="Please select a gender";
    return false;
  }
  $("#gender_error").hide();

  if(document.getElementById("inputImg1").files.length == 0 ){
    //alert("no file selected");
    if(!confirm("No file selected, still submit?")){
      return false;
    }
  }

  alert("successfully submitted");
  submit();
}

//http://stackoverflow.com/questions/13060313/checking-if-at-least-one-radio-button-has-been-selected-javascript
function check_radio(){
     var radios = document.getElementsByName("gender");

     for (var i = 0, len = radios.length; i < len; i++) {
          if (radios[i].checked) {
              return true;
          }
     }

     return false;
 }