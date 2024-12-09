function send() {
    let userInput = document.getElementById("txtF").value;
    document.getElementById("user1").innerHTML = `<h3 id="user1">${userInput}</h3>`

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "contents": [
            {
                "parts": [
                    {
                        "text": userInput
                    }
                ]
            }
        ]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD1n-cB2kdG_bFXbDCB3GVjp2iIEPCUVb4", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result.candidates[0].content.parts[0].text)
            document.getElementById("user2").innerHTML = `<h3 id="user2">${result.candidates[0].content.parts[0].text}</h3>`
        })
        .catch((error) => console.error(error));
}