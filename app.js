let user_name = document.getElementById("name");
let user_fname = document.getElementById("fname");
let user_cnic = document.getElementById("cnic");
let user_address = document.getElementById("address");
let user_city = document.getElementById("city");
let user_country = document.getElementById("country");
let card = document.getElementById("card");

function generateCard() {
    let ramdom = Math.random() * 20000;
    ramdom = Math.round(ramdom);

    let name = user_name.value.charAt(0).toUpperCase() + user_name.value.slice(1) || "UNKNOWN";
    let fname = user_fname.value.charAt(0).toUpperCase() + user_fname.value.slice(1) || "UNKNOWN";
    let cnic = user_cnic.value || "UNKNOWN";
    let address = user_address.value.charAt(0).toUpperCase() + user_address.value.slice(1) || "UNKNOWN";
    let city = user_city.value.charAt(0).toUpperCase() + user_city.value.slice(1) || "UNKNOWN";
    let country = user_country.value.charAt(0).toUpperCase() + user_country.value.slice(1) || "UNKNOWN";

    card.innerHTML += `
    <div class="card">
        <div class="card-body">
            <h5>Name: ${name}</h5>
            <hr>
            <h5>Father Name: ${fname}</h5>
            <hr>
            <h5>CNIC: ${cnic}</h5>
            <hr>
            <h5>Address: ${address}</h5>
            <hr>
            <h5>City: ${city}</h5>
            <hr>
            <h5>Country: ${country}</h5>
            <hr>
            <h5 class="roll-no">Roll No: ${ramdom}</h5>
        </div>
    </div>`;
}
