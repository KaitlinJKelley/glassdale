import { useCriminals } from "../criminals/CriminalProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { Facility } from "./Facility.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

const contentTarget = document.querySelector(".facilityContainer")
export const facilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {
            const facilities = useFacilities()
            const criminalFacilities = useCriminalFacilities()
            const criminals = useCriminals()

            render(facilities, criminals, criminalFacilities)
        }
    )
}


const render = (allFacilities, allCriminals, relationships) => {
    contentTarget.innerHTML = allFacilities.map(facility => {
        const criminalRelationshipsForFacility = relationships.filter(relationshipObj => facility.id === relationshipObj.facilityId)
        
        const criminals = criminalRelationshipsForFacility.map(crf => {
            const matchingCriminal = allCriminals.find(criminal => criminal.id === crf.criminalId)
            return matchingCriminal
        })
        return Facility(facility, criminals)
        }
    ).join("")
}

// Toggle criminalContainer visibility when Facilities Button is clicked
const eventHub = document.querySelector(".container")

eventHub.addEventListener("FacilitiesButtonClicked", event => {

    if (contentTarget.style.display === "flex") {
      contentTarget.style.display = "none";
    } else {
      contentTarget.style.display = "flex";
    }
  })