import { officerList } from "./OfficerList.js"
import { getOfficers, useOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")

export const officerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
        .then( () => {
            // Get all officers from application state
            const arrestingOfficers = useOfficers()
            render(arrestingOfficers)
        }
    )
}

const render = officersCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the officersCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(officerObj => {
                    return `<option value="${officerObj.name}">${officerObj.name}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})