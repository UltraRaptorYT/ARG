document.addEventListener("DOMContentLoaded", () => {

    const classRegex = /([A-Z]+)\/(FT)\/[0-3][A-B]\/\d+$/g;
    const adminNumberRange = [0, 2_300_000];

    function validateStudentClass(studentClass) {
        return classRegex.test(studentClass);
    }

    function validateAdminNumber(adminNumber) {
        return !isNaN(adminNumber) && adminNumber >= adminNumberRange[0] && adminNumber <= adminNumberRange[1];
    }

    const form = document.getElementById("signup-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const email = formData.get("email");
        const full_name = formData.get("full_name");
        const password = formData.get("password");
        const _admin_number = formData.get("admin_number");
        const student_class = formData.get("student_class");

        const admin_number = parseInt(_admin_number, 10);

        if (!validateStudentClass(student_class)) {
            alert("Invalid student class");
            return;
        }
        if (!validateAdminNumber(admin_number)) {
            alert("Invalid admin number");
            return;
        }

        var jsonData = `{
        "email":"${email}",
        "full_name":"${full_name}",
        "password":"${password}",
        "admin_number":"${admin_number}",
        "student_class":"${student_class}"
      }`

        $.ajax({
            url: "http://localhost:3001/signup",
            type: "POST",
            data: jsonData,
            contentType: "application/json",
            dataType: "json",
            complete: function (results) {
                console.log('successfully sign up')
            },

            error: function (xhr, textStatus, errorThrown) {
                console.log(xhr,textStatus,errorThrown)
            },
        });

        return false;
    });
})