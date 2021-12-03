let text = `
La Confrérie croit en un solide ensemble de valeurs régissant leur mode de vie nommé, "le Credo". Ce Credo est constitué de trois préceptes :µ

                    "Ta lame ne versera pas le sang d'un innocent."µ
                    "Montre-toi, mais reste invisible."µ
                    "Jamais tu ne mettras la Fraternité en danger."µµµ
                    <center> Requiescat in pace... </center>
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