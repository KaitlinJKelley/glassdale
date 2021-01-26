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

const render = criminalCollection => {

    contentTarget.innerHTML = 
    `
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
       const appStateCriminals = useCriminals()
       const appStateConvictions = useConvictions()
       const conviction = appStateConvictions.find(item => item.event.detail.crimeThatWasChosen)
        
        
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
