const eventHub = document.querySelector(".container")

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id.startsWith("associates")) {

        // Get the chosen color
        const [associates, chosenId] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
        const customEvent = new CustomEvent("alibiClicked", {
            detail: {
                id: chosenId
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})