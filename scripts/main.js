console.log("Welcome to the main module")
import { criminalList } from "./criminals/CriminalList.js"
import { officerList } from "./officers/OfficerList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { officerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { NoteList } from "./notes/NoteList.js"
import { useConvictions } from "./convictions/ConvictionProvider.js"
import "./criminals/alibis/AlibiClick.js"
import { DisplayFacilitiesButton } from "./facility/ShowFacilitiesButton.js"

ConvictionSelect()
NoteForm()
criminalList()
officerList()
officerSelect()
ShowNoteButton()
DisplayFacilitiesButton()


import { renderWitnessButton } from "./witnesses/ShowWitnessButton.js"
renderWitnessButton()
import { showCriminalsButton } from "./criminals/ShowCriminalsButton.js"
showCriminalsButton()

facilityList()




import "./witnesses/WitnessList.js"
import "./witnesses/WitnessProvider.js"
import { witnessList } from "./witnesses/WitnessList.js"
import { facilityList } from "./facility/FacilityList.js"

