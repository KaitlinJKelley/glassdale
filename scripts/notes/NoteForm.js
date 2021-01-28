import { NoteList } from "./NoteList.js"
import { saveNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


export const render = () => {
    // Added label tags for each input; do input tags have to have a label tag?
    contentTarget.innerHTML = `
            <textarea id="note-text" placeholder="Note"></textarea>
            <input type="date" id="note-date"></input>
            <input type="text" id="note-suspect" placeholder="Suspect Name"></input>

            <button type="button" id="saveNote">Save Note</button>
    `
}
export const NoteForm = () => {
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
            suspectName: document.querySelector("#note-suspect").value
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


