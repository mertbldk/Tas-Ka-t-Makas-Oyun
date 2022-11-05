let play = document.getElementById('play');
let popupcap = document.getElementById('popupcap');
let mark = document.querySelectorAll('#mark');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let markimg = document.querySelectorAll('#markimg');

let player1 = '';
let player2 = '';

let marks = ['kağıt','taş','makas'];

let randomnumber = '';

let widthbar = {
    bar1width : 100,
    bar2width : 100,
}

bar1.style.width = widthbar.bar1width + "%";
bar2.style.width = widthbar.bar2width + "%";

play.addEventListener('click',()=>{

    popupcap.style.display = 'none';

    widthbar.bar1width = 100;
    widthbar.bar2width = 100;

    bar1.style.width = '100%';
    bar2.style.width = '100%';

});

mark.forEach((element)=>{

    element.addEventListener('click',()=>{

        player1 = element.dataset.name;

        randomnumber = Math.ceil(Math.random() * 2);

        player2 = marks[randomnumber];

        markimg[0].style.animation = "shake 500ms linear";
        markimg[1].style.animation = "shake 500ms linear";

        setTimeout(()=>{
            markimg[0].style.animation = "";
            markimg[1].style.animation = "";
        },600);

        mark.forEach((e)=>e.disabled = true);

        setTimeout(MatchResult,600);

        setTimeout(()=>{
            mark.forEach((e)=>e.disabled = false)
        },1000);

    });

});

function MatchResult(){

    markimg[0].src = `./img/${player1}.png`;
    markimg[1].src = `./img/${player2}.png`;

    if(player1 == 'kağıt' && player2 == 'taş'){
        process('bar2');
    }
    if(player1 == 'taş' && player2 == 'kağıt'){
        process('bar1');
    }
    
    if(player1 == 'kağıt' && player2 == 'makas'){
        process('bar1');
    }
    if(player1 == 'makas' && player2 == 'kağıt'){
        process('bar2');
    }
    
    if(player1 == 'taş' && player2 == 'makas'){
        process('bar2');
    }
    if(player1 == 'makas' && player2 == 'taş'){
        process('bar1');
    }
    
}

function results(winner){
    alert(`Winner ${winner}`);
    popupcap.style.display = 'flex';
    markimg[0].src = './img/taş.png';
    markimg[1].src = './img/taş.png';
}

function process(name){

    switch (name) {
        case 'bar1':
            bar1.style.width = widthbar.bar1width - 25 + "%";
            widthbar.bar1width = widthbar.bar1width - 25;
            widthresult('bar1',widthbar.bar1width);
            break;
        case 'bar2':
            bar2.style.width = widthbar.bar2width - 25 + "%";
            widthbar.bar2width = widthbar.bar2width - 25;
            widthresult('bar2',widthbar.bar2width);
            break;
    }
}

function widthresult(name,number){

    switch (name) {
        case 'bar1':
            if(number == 0) setTimeout(results.bind(null,'Player2'),500);
            break;
        case 'bar2':
            if(number == 0) setTimeout(results.bind(null,'Player1'),500);
            break;
    }

}