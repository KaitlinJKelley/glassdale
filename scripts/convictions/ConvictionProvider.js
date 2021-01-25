let convictions = []

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then((parsedConvictions) => {
        convictions = parsedConvictions
    }
    )

}  

export const useConvictions = () => convictions.slice()