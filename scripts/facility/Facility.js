export const Facility = (facility, criminals) => {
    return `
    <section class="facility">
    
        <h4>${facility.facilityName}</h4>
        <section class="facility__details">
            
            <p>Security: ${facility.securityLevel}</p>
            <p>Capacity: ${facility.capacity}</p>
            
            <section class ="criminals">
                <h2>Criminals</h2>
                <ul>
                    ${criminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
                </ul>
            </section>
            
        </section>

    </section>
    `
}