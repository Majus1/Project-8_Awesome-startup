// Global variables
let columGrid = document.querySelector("#column-gird")

console.log("Maj is working on the fetxh API Part");
console.log(columGrid);

// Fetch API network request
fetch("https://randomuser.me/api/")
    .then( response => response.json())
    .then (data => generateUserCard(data.results[0]))

// The function zone
function generateUserCard(data) {
    console.log(data)
    // Variables from Fetch
    let userFirstName = data.name.first;
    let userLastName = data.name.last;
    let userEmail = data.email;
    let userStationed = data.location.city;
    let userStret = `${data.location.street.number}, ${data.location.street.name}`
    let userPhoneNumber = data.phone;
    console.log(`This is user: ${userFirstName} ${userLastName}\nThe user email: ${userEmail}\nThe user is stationed: ${userStationed}\nThe user phone number: ${userPhoneNumber}\nThe user street number: ${userStret}`)
}