import { useOfficers } from "./OfficerProvider.js"
import { getOfficers } from "./OfficerProvider.js"
import { officerCard } from "./Officer.js"

const element = document.querySelector(".officersContainer")

export const officerList = () => {

    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        }
    )
}
    
export const render = (officers) => {
    let officerHtml = ""
    for (const officer of officers) {
        officerHtml += officerCard(officer)
    }

    element.innerHTML = `
    <h2>Officers</h2>
    ${officerHtml}`
}

