// Renders Show Witnesses buttong to DOM
const contentTarget = document.querySelector(".criminal-witness-button-holder")

export const renderWitnessButton = () => {
   contentTarget.innerHTML = "<button id='witnessButton'>Show All Witnesses</button>"
}


// Disptaches an event listener to create a custom event when Show Witnesses is clicked
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if(event.target.id === "witnessButton") {
        const customEvent = new CustomEvent("ShowWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})


