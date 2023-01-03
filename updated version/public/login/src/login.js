// import supabase from "./config.mjs";

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("login-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");

        // if (email == '' || password == '') {
        //     res.status(500).send('An input is empty')
        //     return
        //   } else {
        //     async function signInWithEmail({email, password}){
        //       const {data, error} = await supabase.auth.signInWithPassword({
        //         email:email,
        //         password:password,
        //       });
        //       if (error){
        //         console.log(error)
        //       }else{
        //         console.log(data)
        
        //       }
        //     }
        //     signInWithEmail({email, password})
        //   }


        var jsonData = `{
            "email":"${email}",
            "password":"${password}"
            
          }`
    
          $.ajax({
            url: "http://localhost:3001/login",
            type: "POST",
            data: jsonData,
            contentType: "application/json",
            dataType: "json",
            complete: function (results) {
                localStorage.clear()
                let id=results.responseJSON["user"]
                localStorage.setItem("user", id)
            },
    
            error: function (xhr, textStatus, errorThrown) {
              alert(textStatus)
            },
          })
    
          return false;

    });

})