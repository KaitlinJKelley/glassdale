console.log("Welcome to the main module")
import { criminalList } from "./criminals/CriminalList.js"
import { officerList } from "./officers/OfficerList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { officerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { NoteList } from "./notes/NoteList.js"

ConvictionSelect()
NoteForm()
criminalList()
officerList()
officerSelect()
ShowNoteButton()

