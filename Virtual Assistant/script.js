let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display ="block"
    btn.style.display ="none"
})
function takeCommand(message){
   voice.style.display = "none"
    btn.style.display = "flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello, How may I help you?")
    }
    else if(message.includes("who are you")){
        speak("i am a virtual assistant, my name is Luma")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open spotify")){
        speak("opening spotify...")
        window.open("spotify://")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("open MyAsus")){
        speak("opening MyAsus..")
        window.open("MyASUS://")
    }
    else if(message.includes("open Notepad")){
        speak("opening Notepad..")
        window.open("Notepad://")
    }
    else if(message.includes("open steam")){
        speak("opening steam..")
        window.open("Steam://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Luma","") || message.replace("Luma","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Luma","")}`,"_blank")
    }
}
