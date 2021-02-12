// Renders Show Facilities button to DOM
const contentTarget = document.querySelector(".facility__button")

export const DisplayFacilitiesButton = () => {
   contentTarget.innerHTML = "<button id='showFacilitiesButton'>Show Facilities</button>"
}


// Disptaches an event listener to create a custom event when Show Witnesses is clicked
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if(event.target.id === "showFacilitiesButton") {
        const customEvent = new CustomEvent("FacilitiesButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

// Toggles Show Facilities button text when button is clicked
eventHub.addEventListener("FacilitiesButtonClicked", event => {
    const button = document.querySelector("#showFacilitiesButton")
    if (button.innerHTML === "Show Facilities") {
        button.innerHTML = "Hide Facilities"
    } else {
        button.innerHTML = "Show Facilities"
    }
})