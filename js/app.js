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
    console.log(data)
    // Variables from Fetch
    let userFirstName = data.name.first;
    let userLastName = data.name.last;
    let userEmail = data.email;
    let userStationed = data.location.city;
    let userStret = `${data.location.street.number} ${data.location.street.name}, ${data.location.state} ${data.location.postcode}`
    let userPhoneNumber = data.phone;
    let userImage = data.picture.large;
    let userDobYear = data.dob.date.substring(2, 4)
    let userDobMonth = data.dob.date.substring(5, 7)
    let userDobDay = data.dob.date.substring(8, 10)
    // Logs the information with wich we will be working
    // console.log(`This is user: ${userFirstName} ${userLastName}\nThe user email: ${userEmail}\nThe user is stationed: ${userStationed}\nThe user phone number: ${userPhoneNumber}\nThe user street number: ${userStret}\nThe user photo: ${userImage}`)
    // Creates the user user card
    let addedUserCard = `
                <div class="user-card">
                    <i class="fa fa-times cancle-lightbox-button" aria-hidden="true"></i>
                    <img alt="empolye-picture" src="${userImage}">
                    <div class="user-card__type-section">
                        <p><span class="user-name">${userFirstName} ${userLastName}</span></p>
                        <p><span class="user-email">${userEmail}</span></p>
                        <p><span class="user-location">${userStationed}</span></p>
                    </div>
                    <hr>
                    <div class="type-section-meta">
                        <p><span class="user-phone-number">${userPhoneNumber}</span></p>
                        <p><span class="user-street-location">${userStret}</span></p>
                        <p><span class="user-date-of-birth">Birthday: ${userDobDay}/${userDobMonth}/${userDobYear}</span></p>
                    </div>
            </div>
            `
    columGrid.innerHTML += addedUserCard
}

// ---------------
// LIGHTBOX zone
// ---------------

// Creates the lightbox ovelay 
let lightBox = document.createElement("div");
lightBox.id="lightbox"
document.body.appendChild(lightBox)

// Open LIGHTBOX function
columGrid.addEventListener("click", (event)=>{
    if (event.target !== columGrid) {
        // Traverses up the DOM tree and finds our .user-card with the help of closest()
        const justUserCard = event.target.closest(".user-card")
        const userCard = event.target.closest(".user-card").innerHTML

        // Creates the expanded user card. Gathers all the information and ads a new class
        let expandedUserCard = document.createElement("div")
        expandedUserCard.classList.add("expanded-user-card")
            // Adds the content to the expandedUserCard
        expandedUserCard.innerHTML = userCard
        lightBox.appendChild(expandedUserCard)

        // Makes the overlay apper by adding the active class to the light box element
        lightBox.classList.add("active")
        
    }
})

// Close LIGHTBOX function
lightBox.addEventListener("click", (event)=> {
    // checks if the icon was clicked
    if (event.target.classList == "fa fa-times cancle-lightbox-button") {
        let expandedUserCard = document.querySelector(".expanded-user-card");
        lightBox.removeChild(expandedUserCard)
        // activates the lightbox
        lightBox.classList.remove("active")
    }
})





// ::::: TO DO :::::
// make the cancle button apear in the expanded card div and make it be able to dissapear elements
// To do make card disapear on click only one card mus be in light box
// Create a new card and dont only move the old card.               