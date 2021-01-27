const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="textarea" id="note-text">
        <input type="date" id="note-date">
        <input type="text" id="note-suspect">

        <button type="button" id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}