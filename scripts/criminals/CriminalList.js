import { useCriminals } from "./CriminalProvider.js"
import { getCriminals } from "./CriminalProvider.js"
import { criminalCard } from "./Criminal.js"

export const criminalList = () => {
    const element = document.querySelector(".criminalsContainer")

    getCriminals()
        .then(
            () => {
                const criminals = useCriminals()

                let criminalHtml = ""
                for (const criminal of criminals) {
                    criminalHtml += criminalCard(criminal)
                }
                element.innerHTML = `
                    ${criminalHtml}
                `
            }
        )
}