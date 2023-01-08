const p = document.createElement('h3');
p.style.marginTop = "20px";
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("password-submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const secret = document.getElementById('password-input').value
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(secret))
      .then(function (hash) {
        const hashedUserInput = Array.prototype.map.call(new Uint8Array(hash), x => (('00' + x.toString(16)).slice(-2))).join('');
      
        var jsonData = `{
          "secret":"${hashedUserInput}"
        }`

        $.ajax({
          url: "http://localhost:3001/secrets",
          type: "POST",
          data: jsonData,
          contentType: "application/json",
          dataType: "json",
          complete: function (results) {
            let answer =results.responseJSON["answer"]
            
            if (answer == 'correct') {
              p.style.color = "green";
              p.textContent = "Correct password!";
              submitButton.insertAdjacentElement('afterend', p);
              
            } else {
              p.style.color = "red";
              p.textContent = "Incorrect password!";
              submitButton.insertAdjacentElement('afterend', p);
            }
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(xhr,textStatus,errorThrown)
          },
          

        })
        return false;

      })


    // var jsonData = `{
    //   "secret":"${hashedUserInput}"
    // }`

    // $.ajax({
    //   url: "http://localhost:3001/secrets",
    //   type: "POST",
    //   data: jsonData,
    //   contentType: "application/json",
    //   dataType: "json",
    //   sucess: function (results, textStatus, xhr) {
    //     if (results == 'correct') {
    //       p.style.color = "green";
    //       p.textContent = "Correct password!";
    //     } else {
    //       p.style.color = "red";
    //       p.textContent = "Incorrect password!";
    //     }
    //   },
    //   error: function(xhr, textStatus, errorThrown){
    //     alert(textStatus)
    //   },

    // })
    // return false;


    // crypto.subtle.digest("SHA-256", new TextEncoder().encode(passwordInput.value))
    //   .then(function (hash) {
    //     const hashedUserInput = Array.prototype.map.call(new Uint8Array(hash), x => (('00' + x.toString(16)).slice(-2))).join('');
    //     if (hashedUserInput === hashedPassword) {
    //       p.style.color = "green";
    //       p.textContent = "Correct password!";
    //     } else {
    //       p.style.color = "red";
    //       p.textContent = "Incorrect password!";
    //     }
    //     submitButton.insertAdjacentElement('afterend', p);
    //   });




  });
})


