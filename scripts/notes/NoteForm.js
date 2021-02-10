import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { NoteList } from "./NoteList.js"
import { saveNote } from "./NoteProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")



export const render = () => {
    let optionTags = ""
    // Creates option tags for each criminal
        getCriminals()
            .then(() => {
                let criminals = useCriminals()
    
                optionTags += criminals.map((criminal) => {return `<option value="${ criminal.id }">${ criminal.name }</option>`})
                
                
                // Puts NoteForm on the DOM
                contentTarget.innerHTML = `
                <textarea id="note-text" placeholder="Note"></textarea>
                <input type="date" id="note-date"></input>
                <select id="noteForm--criminal" class="criminalSelect">
                    <option value="0">Please select a criminal</option>
                    ${optionTags}
                </select>
                
                <button type="button" id="saveNote">Save Note</button>
                `
            })
}

export const NoteForm = () => {  
    // debugger
    render()
}



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // debugger
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            noteText: document.querySelector("#note-text").value,
            dateOfNote: document.querySelector("#note-date").value,
            criminalId: parseInt(selectedCriminalId)
        }
        // Change API state and application state
        saveNote(newNote)
    }
})

let selectedCriminalId = ""
eventHub.addEventListener("change", event => {
    if (event.target.id === "noteForm--criminal") { 
        // When a change occurs in the dropdown, the value of the selection (criminal's ID) is stored in the criminalId variable
        selectedCriminalId = event.target.value
        
    }
    
})



