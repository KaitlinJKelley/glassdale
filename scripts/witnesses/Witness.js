export const witnessCard = (witnessObj) => {
    return ` 
     <section>
        <p>${witnessObj.name}</p>
        <p>Statement: ${witnessObj.statements}</p>
     </section>
     `
}