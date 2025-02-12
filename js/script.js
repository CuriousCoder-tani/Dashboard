function handleEnterClick(event) {
    event.preventDefault();
    const enter= document.getElementById('enter');
    enter.style.transform='scale(60)';
    enter.style.color='#fbead1';

    setTimeout(()=>{window.location.href = 'about.html'}, 600); 
}

//About 

function startTyping() {
    const txt = document.getElementById('txt');
    const text = txt.innerText;
    txt.innerText = ''; 
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            txt.innerText += text[index];
            index++;
            setTimeout(typeLetter, 50); 
        }
    }

    typeLetter();
}

window.onload = startTyping;

