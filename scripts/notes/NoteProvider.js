
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}
let notes = []

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}
export const useNotes = () => notes.slice()

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        // POST sends data to the API
        method: "POST",
        // Because it's added from code
        headers: {
            "Content-Type": "application/json"
        },
        // actual note object must be sent as one string
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}



