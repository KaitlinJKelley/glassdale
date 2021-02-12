import { useCriminals } from "./CriminalProvider.js"
import { getCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { getConvictions, useConvictions } from "../convictions/ConvictionProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")

export const criminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}


const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){

        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()

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
        render(matchingCriminals, facilities, crimFac)
    }
})

eventHub.addEventListener("officerSelected", event => {
    
    if (event.detail.officer !== "0"){
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()
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
            render(filteredCriminals, facilities, crimFac)
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

// If someone clicks Show Criminal button; conditional brings criminals back to DOM if Show Facilities was previously clicked
eventHub.addEventListener("ShowCriminalsClicked", event => {
    const facilityContainer = document.querySelector(".facilityContainer")
    criminalList()
    if (contentTarget.style.display === "none") {
        contentTarget.style.display = "flex";
        facilityContainer.style.display = "none";
      } 
})

// Toggle criminalContainer visibility when Facilities Button is clicked
eventHub.addEventListener("FacilitiesButtonClicked", event => {

  if (contentTarget.style.display === "none") {
    contentTarget.style.display = "flex";
  } else {
    contentTarget.style.display = "none";
  }
})