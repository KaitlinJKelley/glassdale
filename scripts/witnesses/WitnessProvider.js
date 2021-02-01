
let witnessArray = []

export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then (response => response.json())
        .then(
            parsedwitnesses => {
                witnessArray = parsedwitnesses        
            }
        )
}

export const useWitnesses = () => {
    return witnessArray.slice()
}