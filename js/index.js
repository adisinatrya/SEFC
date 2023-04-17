document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.getElementById("gender").value;
    var message = document.getElementById("message").value;

    // Display result
    var result = "Name: " + name + "<br>" +
                 "Birthday: " + birthday + "<br>" +
                 "Gender: " + gender + "<br>" +
                 "Message: " + message;
    document.getElementById("result").innerHTML = result;
});
