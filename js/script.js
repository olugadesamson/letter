$(document).ready(function () {
    $(".body").submit(function (e) {
        e.preventDefault();

        const addressInput = $("input#address").val();
        const cityInput = $("input#city").val();
        const countryInput = $("input#country").val();
        const emailInput = $("input#email").val();
        const dateInput = $("input#date").val();
        const name1Input = $("input#name1").val();
        const positionInput = $("input#position").val();
        const companyInput = $("input#company").val();
        const address1Input = $("input#address1").val();
        const date1Input = $("input#date1").val();
        const dearInput = $("input#dear").val();
        const titleInput = $("input#title").val();
        const maintextarea = $("textarea#main").val();
        const salInput = $("input#sal").val();
        const name2Input = $("input#name2").val();
        const date2Input = $("input#date2").val();

        $(".address").text(addressInput);
        $(".city").text(cityInput);
        $(".country").text(countryInput);
        $(".email").text(emailInput);
        $(".dear").text(dearInput);
        $(".title").html("<b>" + titleInput + "</b>");
        $(".date").text(dateInput);
        $(".name1").text(name1Input);
        $(".position").text(positionInput);
        $(".company").text(companyInput);
        $(".address1").text(address1Input);
        $(".date1").text(date1Input);
        $(".main").text(maintextarea);
        $(".sal").text(salInput);
        $(".name2").text(name2Input);
        $(".date2").text(date2Input);

        $(".let").show();
        $(".body").hide();
    });
});

$(document).ready(function () {
    $("#back").click(function () {
        $(".let").hide();
        $(".body").show();
    })
});

$(document).ready(function () {
    $("#print").click(function () {
        window.print(".let");
    })
});















// window.onload = function(){
//     document.getElementById("download")
//     .addEventListener("click",()=>{
//         const letter = this.document.getElementById("letter")
//         // var opt = {
//         //     margin: 1,
//         //     filename: 'myfile.pdf',
//         //     image: { type: 'jpeg', quality: 0.98 },
//         //     html2canvas: { scale: 2 },
//         //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait'}
//         // };
//         html2pdf().from(letter).set(opt).save();
//     })
// }