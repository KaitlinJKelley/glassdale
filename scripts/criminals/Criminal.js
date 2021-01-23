export const criminalCard = (criminalObj) => {
       return `
        <section>
            <p>Name: ${criminalObj.name}</p>
            <p>Age: ${criminalObj.age}</p>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Term Start: ${criminalObj.incarceration.start}</p>
            <p>Term End: ${criminalObj.incarceration.end}</p>
        </section>
        `
}