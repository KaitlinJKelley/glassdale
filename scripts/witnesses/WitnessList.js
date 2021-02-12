import { witnessCard } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")

// gets witnesses and then renders to DOM
export const witnessList = () => {
    getWitnesses()
        .then(() => {
            const witnessArray = useWitnesses()
            rendertoDom(witnessArray)

        })
}

// Renders an array to DOM
const rendertoDom = (arrayOfWitnesses) => {
    
    contentTarget.innerHTML = `
    <h2>Witnesses</h2>
    ${arrayOfWitnesses.map((witness) => witnessCard(witness)).join("")}`
}


// Renders witnesses to DOM when Show Witnesses button is clicked
const eventHub = document.querySelector(".container")

eventHub.addEventListener("ShowWitnessesClicked", () => {
    const facilityContainer = document.querySelector(".facilityContainer")
    
    witnessList()
    
    if (contentTarget.style.display === "none") {
        contentTarget.style.display = "flex";
        facilityContainer.style.display = "none";
      } 
})