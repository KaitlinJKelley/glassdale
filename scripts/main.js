console.log("Welcome to the main module")
import { criminalList } from "./criminals/CriminalList.js"
import { officerList } from "./officers/OfficerList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

ConvictionSelect()
criminalList()
officerList()


