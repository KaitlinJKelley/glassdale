const eventHub = document.querySelector(".container")

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id.startsWith("associates")) {

       const [associates, chosenId] = clickEvent.target.id.split("--")

        const customEvent = new CustomEvent("alibiClicked", {
            detail: {
                id: chosenId
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})