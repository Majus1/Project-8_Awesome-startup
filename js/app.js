// Global variables
let columGrid = document.querySelector("#column-gird")


// ---------------
// Fetch API zone
// ---------------

// Fetch API network request
    fetch("https://randomuser.me/api/?results=12")
    .then( response => response.json())
    .then (data => console.log(data.results.map( singleUser => generateUserCard(singleUser))))

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
                <div class="user-card" onclick="testnaFunkcija()">
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

// ---------------
// Testna funkcija
// ---------------
function testnaFunkcija() {
    console.log("Kr nekaj moram rečt")
}

// ---------------
// LIGHTBOX zone
// ---------------
let lightBox = document.createElement("div");
lightBox.id="lightbox"
let cancleLightboxButton = document.createElement("i")
cancleLightboxButton.className="cancle-lightbox-button"
// Dodamo element markupu
document.body.appendChild(lightBox)
lightBox.appendChild(cancleLightboxButton)

// Open LIGHTBOX function