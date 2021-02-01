const contentTarget = document.querySelector(".criminal-witness-button-holder")

export const showCriminalsButton = () => {
    contentTarget.innerHTML += "<button id='criminalsButton'>Show All Criminals</button>"  
} 


const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if(event.target.id === "criminalsButton") {
        const customEvent = new CustomEvent("ShowCriminalsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})
