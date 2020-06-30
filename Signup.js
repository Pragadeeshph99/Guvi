$(document).ready(function () {
  //if user logged in direct it to home page on opening an new tabs
  if (localStorage.getItem("email")) {
    window.location = "Homepage.html";
  } else {
    $("#submit").click(function (e) {
      e.preventDefault();
      var firstName = $("#firstName").val();
      var secondName = $("#secondName").val();
      var email = $("#email").val();
      var city = $("#city").val();
      var country = $("#country").val();
      var password = $("#password").val();

      $.ajax({
        method: "POST",
        url: "signup.php",
        data: {
          firstName: firstName,
          secondName: secondName,
          city: city,
          country: country,
          password: password,
          email: email,
        },
        success: function (result) {
          alert(result);
          window.location = "Login.html";
        },
      });
    });
  }
});
