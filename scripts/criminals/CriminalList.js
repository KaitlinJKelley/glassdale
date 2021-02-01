import { useCriminals } from "./CriminalProvider.js"
import { getCriminals } from "./CriminalProvider.js"
import { criminalCard } from "./Criminal.js"
import { getConvictions, useConvictions } from "../convictions/ConvictionProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")

export const criminalList = () => {
    
    getCriminals()
    .then(
        () => {
                const appStateCriminals = useCriminals()
                render(appStateCriminals)
              
            }
        )
    }

export const render = criminalCollection => {

    contentTarget.innerHTML = 
    `
    <h2>Criminals</h2>
    ${criminalCollection.map(conviction => criminalCard(conviction)).join("")}
    `
}

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
       const appStateConvictions = useConvictions()
       const conviction = appStateConvictions.find(convictionObj => {
           return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
        }
        )
       
       
       const appStateCriminals = useCriminals()
       
       const matchingCriminals = appStateCriminals.filter(

            currentCriminal => {return currentCriminal.conviction === conviction.name
        }
        )

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
        // console.log(event.detail.crimeThatWasChosen)
        render(matchingCriminals)
    }
})

eventHub.addEventListener("officerSelected", event => {
    
    if (event.detail.officer !== "0"){
        // How can you access the officer name that was selected by the user?
        const officerName = event.detail.officer

        // How can you get the criminals that were arrested by that officer?
        const criminals = useCriminals()

        const filteredCriminals = criminals.filter(
            criminalObject => {
                if (criminalObject.arrestingOfficer === officerName) {
                    return true
                }
            }
            )
            render(filteredCriminals)
    }
})

// Listens for a click on Show Alibi button, checks to see if there is a matching criminal ID, and if yes, shows the criminal's alibi info
eventHub.addEventListener("alibiClicked", event => {

        const arrayOfCriminals = useCriminals()
        for(const criminal of arrayOfCriminals) {
            if (criminal.id === parseInt(event.detail.id)) {
                // window.confirm(`Associate: ${criminal.known_associates[0].name} Alibi: ${criminal.known_associates[0].alibi}`)
                window.confirm(criminal.known_associates.map(associateObj => 
                    `Associate: ${associateObj.name} Alibi: ${associateObj.alibi}`).join("\n"))
            }
        }

})

// If someone clicks Show Criminal button
eventHub.addEventListener("ShowCriminalsClicked", event => {
    criminalList()
})