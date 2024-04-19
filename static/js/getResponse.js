function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        const timeSinceLastCall = now - lastCall;
        if (timeSinceLastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}
async function getResponse() {
    const resultsContainer = document.getElementById("results-container");
    while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild);
}   
    document.getElementById("btn-print").disabled = true;

    // Get user inputs (assuming you have input elements with IDs like userInput1, userInput2, etc.)
    const userInput1 = document.getElementById("userInput1");
    const userInput2 = document.getElementById("userInput2");
    const userInput3 = document.getElementById("userInput3");
    const userInput4 = document.getElementById("userInput4");
    const userInput5 = document.getElementById("userInput5");

    const formattedUserPrompt = `?user_prompt=What is the aim of our project/business? ${userInput1.value.trim()}. What are we selling? ${userInput2.value.trim()}. We would describe our core [JTBD] (job to be done) in the following way - Situation (What are people doing when they are thinking about our product or services?) : ${userInput3.value.trim()} Motivation (What are the key motivations of our target customers?) : ${userInput4.value.trim()} Expectation (The result or change the customer is seeking by hiring our product/ service) : ${userInput5.value.trim()}.`;

    // Prepare the request body
    const requestBody = new URLSearchParams(formattedUserPrompt);
    
        try {
            const response = await fetch("/get_responses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: requestBody,
            });
    
            if (!response.ok) {
                //can log in errLog file
                console.error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            responseFormatter(data);
        } catch (error) {
            //can log in errLog file
            console.error("Fetch Error:", error);
        }
  }

const throttledGetResponse = throttle(getResponse, 10000); 
