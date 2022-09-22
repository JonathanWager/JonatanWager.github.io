var character = document.getElementById("you");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){
        return
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var gameOver = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=220){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
}, 10);

function myFunction(){
    let name;
    name = document.getElementById("namn").value;
    if (name == ""){
        document.getElementById("paragraph").innerHTML = "Du måste skriva någonting i fältet."
        return;
    }
    else{
        document.getElementById("paragraph").innerHTML = "Hej "+ name
        let named = name.replace(/\s/g, "");
        document.getElementById("paragraph2").innerHTML = "Ditt namn har "+named.length+" bokstäver"
    }
}
function myFunction2(){
    let from;
    let toEnd;
    let myArray  = new Array;
    from = document.getElementById("från").value
    toEnd = document.getElementById("till").value
    if(isNaN(from)){
        document.getElementById("counter").innerHTML = "";
        document.getElementById("paragraph3").innerHTML="Du får inte ha bokstäver i dessa fällt."
        return;
    }
    if(isNaN(toEnd)){
        document.getElementById("counter").innerHTML = "";
        document.getElementById("paragraph3").innerHTML="Du får inte ha bokstäver i dessa fällt."
        return;
    }
    if(from == "" || toEnd == ""){
        document.getElementById("counter").innerHTML = "";
        document.getElementById("paragraph3").innerHTML = "Du måste skriva någonting i fälten."
        return;
    }
    if(from>toEnd){
        document.getElementById("counter").innerHTML = "";
        document.getElementById("paragraph3").innerHTML = "Den första siffran får inte vara högre än den andra."
        return;
    }
    else{
        document.getElementById("paragraph3").innerHTML = "";
        document.getElementById("counter").innerHTML = "";
        for(let i = Number(from); i <= Number(toEnd); i++){
            myArray.push(i);
        }
        for(let i=0; i<myArray.length;i++){
            counter.innerHTML += "<p>"+myArray[i]+"</p><br>";
        }
    }
}
function myFunction3(){
    let whatPainting;
    let answer;
    let points;
    let button;
    button = document.getElementById("skicka");
    points = +document.getElementById("poäng").textContent;
    whatPainting = document.getElementById("painting").textContent;
    answer = document.getElementById("tavla").value;
    answer = answer.toLowerCase();
    if(whatPainting=="mona lisa"){
        if(answer=="mona lisa"){
            document.getElementById("answer").innerHTML="Korekt";
            points = points + 1;
            document.getElementById("poäng").innerHTML=points;
            button.disabled=true;

        }
        else{
            document.getElementById("answer").innerHTML="Inkorekt, rätt svar är Mona Lisa.";
            button.disabled=true;
        }
    }
}

function myFunction4(){
    let whatPainting2;
    let answer2;
    let points2;
    let button2;
    button2 = document.getElementById("skicka2");
    points2 = +document.getElementById("poäng").textContent;
    whatPainting2 = document.getElementById("painting2").textContent;
    answer2 = document.getElementById("tavla2").value;
    answer2 = answer2.toLowerCase();
    document.getElementById("answer2").innerHTML="Korekt";
    if(whatPainting2=="gpe"){
        if(answer2=="flicka med pärlörhänge"){
            document.getElementById("answer2").innerHTML="Korekt";
            points2 = points2 + 1;
            document.getElementById("poäng").innerHTML=points2;
            button2.disabled=true;

        }
        else{
            document.getElementById("answer2").innerHTML="Inkorekt, rätt svar är Flicka med pärlörhänge.";
            button2.disabled=true;
        }
    }
}

function myFunction5(){
    let whatPainting3;
    let answer3;
    let points3;
    let button3;
    button3 = document.getElementById("skicka3");
    points3 = +document.getElementById("poäng").textContent;
    whatPainting3 = document.getElementById("painting3").textContent;
    answer3 = document.getElementById("tavla3").value;
    answer3 = answer3.toLowerCase();
    document.getElementById("answer3").innerHTML="Korekt";
    if(whatPainting3=="venus födelse"){
        if(answer3=="venus födelse"){
            document.getElementById("answer3").innerHTML="Korekt";
            points3 = points3 + 1;
            document.getElementById("poäng").innerHTML=points3;
            button3.disabled=true;

        }
        else{
            document.getElementById("answer3").innerHTML="Inkorekt, rätt svar är Venus födelse.";
            button3.disabled=true;
        }
    }
}

function myFunction6(){
    let whatPainting4;
    let answer4;
    let points4;
    let button4;
    button4 = document.getElementById("skicka4");
    points4 = +document.getElementById("poäng").textContent;
    whatPainting4 = document.getElementById("painting4").textContent;
    answer4 = document.getElementById("tavla4").value;
    answer4 = answer4.toLowerCase();
    document.getElementById("answer4").innerHTML="Korekt";
    if(whatPainting4=="stjärnenatt"){
        if(answer4=="stjärnenatt"){
            document.getElementById("answer4").innerHTML="Korekt";
            points4 = points4 + 1;
            document.getElementById("poäng").innerHTML=points4;
            button4.disabled=true;

        }
        else{
            document.getElementById("answer4").innerHTML="Inkorekt, rätt svar är Stjärnenatt.";
            button4.disabled=true;
        }
    }
}

function myFunction7(){
    let whatPainting5;
    let answer5;
    let points5;
    let button5;
    button5 = document.getElementById("skicka5");
    points5 = +document.getElementById("poäng").textContent;
    whatPainting5 = document.getElementById("painting5").textContent;
    answer5 = document.getElementById("tavla5").value;
    answer5 = answer5.toLowerCase();
    document.getElementById("answer5").innerHTML="Korekt";
    if(whatPainting5=="skriet"){
        if(answer5=="skriet"){
            document.getElementById("answer5").innerHTML="Korekt";
            points5 = points5 + 1;
            document.getElementById("poäng").innerHTML=points5;
            button5.disabled=true;

        }
        else{
            document.getElementById("answer5").innerHTML="Inkorekt, rätt svar är Skriet.";
            button5.disabled=true;
        }
    }
}

function myFunction8(){
    let whatPainting6;
    let answer6;
    let points6;
    let button6;
    button6 = document.getElementById("skicka6");
    points6 = +document.getElementById("poäng").textContent;
    whatPainting6 = document.getElementById("painting6").textContent;
    answer6 = document.getElementById("tavla6").value;
    answer6 = answer6.toLowerCase();
    document.getElementById("answer6").innerHTML="Korekt";
    if(whatPainting6=="nattvakten"){
        if(answer6=="nattvakten"){
            document.getElementById("answer6").innerHTML="Korekt";
            points6 = points6 + 1;
            document.getElementById("poäng").innerHTML=points6;
            button6.disabled=true;

        }
        else{
            document.getElementById("answer6").innerHTML="Inkorekt rätt svar är Nattvakten.";
            button6.disabled=true;
        }
    }
}