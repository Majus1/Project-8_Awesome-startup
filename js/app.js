// Global variables
let columGrid = document.querySelector("#column-gird")


// ---------------
// Fetch API zone
// ---------------

// Fetch API network request
    fetch("https://randomuser.me/api/?results=12")
    .then( response => response.json())
    .then (data => data.results.map( singleUser => generateUserCard(singleUser)))

// The function zone
function generateUserCard(data) {
    // console.log(data)
    // Variables from Fetch
    let userFirstName = data.name.first;
    let userLastName = data.name.last;
    let userEmail = data.email;
    let userStationed = data.location.city;
    let userStret = `${data.location.street.number}, ${data.location.street.name}`
    let userPhoneNumber = data.phone;
    let userImage = data.picture.large;
    // Logs the information with wich we will be working
    // console.log(`This is user: ${userFirstName} ${userLastName}\nThe user email: ${userEmail}\nThe user is stationed: ${userStationed}\nThe user phone number: ${userPhoneNumber}\nThe user street number: ${userStret}\nThe user photo: ${userImage}`)
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

// ---------------
// LIGHTBOX zone
// ---------------
// Created elements for lgihtbox
let lightBox = document.createElement("div");
lightBox.id="lightbox"

let cancleLightboxButton = document.createElement("i")
cancleLightboxButton.className="fa fa-times cancle-lightbox-button"
cancleLightboxButton.setAttribute("style", "color: #ffffff")

// Adding element to markup


// Open LIGHTBOX function
columGrid.addEventListener("click", (event)=>{
    if (event.target !== columGrid) {
        // Traverses up the DOM tree and finds our .user-card with the help of closest()
        const userCard = event.target.closest(".user-card")
        console.log(`You clicked on the card it is stored in variable userCard and is ready for use!`)
        console.log(userCard)

        // Makes the overlay apper by adding the active class to the light box element
        lightBox.classList.add("active")
            // Creates and appends cancle button
        let cancleLightboxButton = document.createElement("i")
        cancleLightboxButton.className="fa fa-times cancle-lightbox-button"
        cancleLightboxButton.setAttribute("style", "color: #ffffff")
        document.body.appendChild(lightBox)
        lightBox.appendChild(cancleLightboxButton)
            // Creates and appends cancle button
        let expandedUserCard = userCard
        lightBox.appendChild(expandedUserCard)


    }
})

