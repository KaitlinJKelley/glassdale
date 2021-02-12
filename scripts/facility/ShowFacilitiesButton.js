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
