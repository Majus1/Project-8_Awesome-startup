// Global variables
let columGrid = document.querySelector("#column-gird")

console.log("Maj is working on the fetxh API Part");

// Fetch API network request
for (let z = 0; z < 12; z++) {
    fetch("https://randomuser.me/api/")
    .then( response => response.json())
    .then (data => generateUserCard(data.results[0]))

}
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
    let userImage = data.picture.large;
    // Logs the information with wich we will be working
    console.log(`This is user: ${userFirstName} ${userLastName}\nThe user email: ${userEmail}\nThe user is stationed: ${userStationed}\nThe user phone number: ${userPhoneNumber}\nThe user street number: ${userStret}\nThe user photo: ${userImage}`)
    // Creates the user user card
    let addedUserCard = `
                <div class="user-card">
                <img alt="empolye-picture" src="${userImage}">
                <div class="user-card__type-section">
                    <p><span class="user-name">${userFirstName} ${userLastName}</span></p>
                    <p><span class="user-email">${userEmail}</span></p>
                    <p><span class="user-location">${userStationed}</span></p>
                </div>
            </div>
            `
    columGrid.innerHTML += addedUserCard

}