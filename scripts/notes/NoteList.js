import { getNotes, saveNote, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'


// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

// Create a state variable set to false
let stateChanged = false

// When Show Notes button is clicked, the existing notes show, and the state variable is reassigned to true
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
    stateChanged = true
    
})

// Any time the state of the note API changes, if the state changed === true, invoke NoteList again to render the added notes OR
// in coments if the element with a class of noteList is not empty (meaning show notes was clicked and that container was populated) then 
// invoke NoteList again to re-render the notes
eventHub.addEventListener("noteStateChanged", customEvent => {
    // if (contentTarget.innerHTML !== "") {
    //     NoteList()
    // }
    if (stateChanged === true) {
        NoteList()
    }
})

// convert the notes objects to HTML with NoteHTMLConverter
const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the criminal whose id matches the criminalId in the note that's currently being iterated
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()

            render(notes, criminals)
        })
}


