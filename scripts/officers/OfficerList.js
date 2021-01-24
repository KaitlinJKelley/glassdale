import { useOfficers } from "./OfficerProvider.js"
import { getOfficers } from "./OfficerProvider.js"
import { officerCard } from "./Officer.js"

export const officerList = () => {
    const element = document.querySelector(".officersContainer")

    getOfficers()
        .then(() => {
            const officers = useOfficers()

            let officerHtml = ""
            for (const officer of officers) {
                officerHtml += officerCard(officer)
            }

            element.innerHTML = `${officerHtml}`
        }
    )
}
