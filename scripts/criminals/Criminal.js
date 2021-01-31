export const criminalCard = (criminalObj) => {
       return `
        <section>
            <p>${criminalObj.name}</p>
            <p>Age: ${criminalObj.age}</p>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
            
            <button id="associates--${criminalObj.id}">Associate Alibis</button>
        </section>
        `
}