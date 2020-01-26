//zadanie 5

let buttons = document.getElementsByTagName('button')


for(let i = 0;i<buttons.length;i++){

    buttons[i].onclick = () => {

        let text = buttons[i].getAttribute('data-text')

        document.getElementById('container').innerText = text

    }

}