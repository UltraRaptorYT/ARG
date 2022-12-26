document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("ans-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const ans = formData.get("answer");
        const uid = localStorage.getItem('user')

        var jsonData = `{
            "reply":"${ans}",
            "uid":"${uid}"
            
          }`
    
          $.ajax({
            url: "http://localhost:3001/act_3_p2",
            type: "POST",
            data: jsonData,
            contentType: "application/json",
            dataType: "json",
            complete: function (results) {
                let status=results.responseJSON["answer"]
                console.log(status)
            },
    
            error: function (xhr, textStatus, errorThrown) {
              alert(textStatus)
            },
          })
    
          return false;

    });

})