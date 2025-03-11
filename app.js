let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg")
const scoreuser = document.querySelector("#user-score")
const scorecomp = document.querySelector("#comp-score")
const zamachoice = document.querySelector("#zamachoice")
const computerchoice = document.querySelector("#computerchoice")



const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randidx = Math.floor(Math.random() * 3)
    return options[randidx]
}

const showwinner = (userwin) => {
    if (userwin) {
        console.log("you win")
        msg.innerText= ("You win")
        msg.style.backgroundColor ="green";
        userscore++
        scoreuser.innerText=userscore
    }
    else {
        console.log("You lose")
        msg.innerText= ("You Lose")
        msg.style.backgroundColor ="red";
        compscore++
        scorecomp.innerText=compscore

    }

}


const draw = () => {

    console.log("match draw!")
    msg.innerText =("Game Draw!")
    msg.style.backgroundColor="#081b31"
    
}

const playgame = (userchoice) => {
    console.log("User Choice =", userchoice)
    zamachoice.innerText=`Your Choice is ${userchoice}`

    const compchoice = gencompchoice();
    console.log("computer choice =", compchoice)
    computerchoice.innerText=`computer choice is ${compchoice}`

    if (userchoice === compchoice) {
        draw();

    }

    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true

        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true
        }
        else {
            userwin = compchoice === "rock" ? false : true
        }

        showwinner(userwin);
    }
}





const choices = document.querySelectorAll(".choice")
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)

    })
})







