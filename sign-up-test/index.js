var SUPABASE_URL = 'https://lvixgdrkzecihyzpessj.supabase.co'
var SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2aXhnZHJremVjaWh5enBlc3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4OTI3MjEsImV4cCI6MTk4NjQ2ODcyMX0.o8MGdLzgvOeQCRyL0uFkldN2wwlOBWZtx8SUBY29OlY'

var database = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

let save = document.querySelector("#save");

save.addEventListener("click", async (e) => {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let res = await database
    .from("test")
    .insert([{
        username: username,
        password: password
    }])
    if (res) {
        alert("Student Add Successfully")

    } else {
        alert("Student Not Add Successfully")
    }
})