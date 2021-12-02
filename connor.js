let text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,µ
                 quae provident accusantium tempora illo architecto? Quam saepe vero,µ
                  soluta ex omnis dicta minus. Atque nulla voluptates quod perferendis quia repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,µ
                  quae provident accusantium tempora illo architecto? Quam saepe vero,µ
                   soluta ex omnis dicta minus. Atque nulla voluptates quod perferendis quia repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,µ
                   quae provident accusantium tempora illo architecto? Quam saepe vero,µ
                    soluta ex omnis dicta minus. Atque nulla voluptates quod perferendis quia repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,µ
                    quae provident accusantium tempora illo architecto? Quam saepe vero,µ
                     soluta ex omnis dicta minus. Atque nulla voluptates quod perferendis quia repellendus!µ
`

let container = document.getElementById('type-js-auto')


let emplacement = 0

let stock_text = ""

function write_text(){

    if(text[emplacement] == "µ"){
        stock_text += "<br>"
    }else{
        stock_text += text[emplacement]
    }

    container.innerHTML = stock_text

    emplacement += 1


    if( emplacement >= text.length){
        container.innerHTML = stock_text + "<span class='blink'>|</span>"
        clearInterval(inter)
        emplacement = 0
    }
}


let inter = setInterval( function() {
    write_text()
}, 50)