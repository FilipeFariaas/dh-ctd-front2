// * ARRAY WITH PLAY OPTIONS
const plays = [

    `rock`,
    `paper`,
    `scissor`

];

// * THE COMPUTER PLAY FUNCTION WILL MAKE THE "COMPUTER" CHOOSE ONE OF THE THREE OPTIONS: PAPER, ROCK, OR SCISSOR
const computerPlay = () => {

    return plays[parseInt(Math.random() * 3)];

};

// * THE USER PLAY FUNCTION WILL RECEIVE THE USER INPUT AND VERIFY IF IT'S A VALID OPTION (MUST BE ONE OF THE THREE OPTIONS: PAPER, ROCK, OR SCISOR). IN CASE IT ISN'T VALID, AN ALERT WILL BE SHOWN
const userPlay = play => {

    if (plays.includes(play)) {

        return play;

    } else {

        alert(`Invalid option`);

    }

};

// * VERIFIES THE POSSIBLE RESULTS FOR EACH USER'S PLAY OPTION
const checkUserWins = (userPlay, computerPlay) => {

    // * USER WINS PLAYING ROCK
    if(userPlay === `rock`) {

        switch(computerPlay) {

            case `rock`:

                break;

            case `paper`:

                computerWins++;
                break;

            case `scissor`:

                userWins++;
                break;

        };

    // * USER WINS PLAYING PAPER
    } else if(userPlay === `paper`) {

        switch(computerPlay) {

            case `rock`:

                userWins++;
                break;

            case `paper`:

                break;

            case `scissor`:

                computerWins++;
                break;

        };

    // * USER WINS PLAYING SCISSOR
    } else if(userPlay === `scissor`) {

        switch(computerPlay) {

            case `rock`:

                computerWins++;
                break;

            case `paper`:

                userWins++;
                break;

            case `scisor`:

                break;

        };

    };

};

// * THE MAIN FUNCTION, RESPONSIBLE FOR EXECUTING THE WHOLE CODE
const playGame = () => {

    // * CAPTURES THE USER INPUT THROUGH PROMPT
    let userPlayed = userPlay(prompt(`Choose a option between: rock, paper or scisor`));

    let computerPlayed = computerPlay();

    // * CALLS THE FUNCTION THAT CHECKS THE RESULT
    checkUserWins(userPlayed, computerPlayed);

    // * DISPLAYS AN ALERT WITH THE ROUND INFO
    alert(`
        User chooses: ${userPlayed}
        Computer chooses: ${computerPlayed}

        Computer points: ${computerWins}
        User points: ${userWins}
    `);    

    // * IF A PLAYER REACH 2 AN ALERT IS SHOWN INFORMING WHO WINS
    if(userWins >= 2) {

        alert(`USER WINS`);

    } else if(computerWins >= 2) {

        alert(`COMPUTER WINS`);

    };

    // * EXECUTES THE CODE WHILE NONE OF THE PLAYERS REACH 2 POINTS
    while(userWins < 2 && computerWins < 2) {

        playGame();

    };

}

// * STORES THE POINTS FOR EACH PLAYER
let computerWins = 0;
let userWins = 0;

// * CALLS THE MAIN FUNCTION TO RUN THE GAME
playGame();