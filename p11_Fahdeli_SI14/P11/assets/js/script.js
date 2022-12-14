// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // jika di klik akan menjalankan fungsi computerChoise
    a.addEventListener("click", (element) => {
        computerChoise(element);
    })
);
function computerChoise(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung 
    // nilai hasil dari game
    let pilihanComputer = document.querySelector('#result');

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper","Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer sama dengan pilihan user(Draw)
    if(pilihanUser == pilihanComputer){
        alert("DRAW");
    }

    // jika pilihan user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("YOU WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Rock"){
        alert("YOU WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("YOU WIN");
    }


    // jika pilihan komputer yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Rock"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("COMPUTER WIN");
}
}