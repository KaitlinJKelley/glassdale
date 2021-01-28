export const NoteHTMLConverter = (noteObject) => {
    return `<section class="note">
            <div class="note__text">${noteObject.noteText}</div>
            <div class="note__date">Timestamp: ${new Date(noteObject.dateOfNote).toLocaleDateString('en-US')}</div>
            <div class="note__suspect">Title: ${noteObject.suspectName}</div>
            </section>
            `
            // <div class="note__author">Author: ${ noteObject.author }</div>
}