const ofAge = parseInt(prompt("How old r u?"));

// let isOfAge = ofAge >= 18 ? "U r of age" : "U r not of age";

if(!isNaN(ofAge)) {

    if(ofAge >= 18) {

        console.log(`U r of age`);

    } else {

        console.log(`U r not of age`);

    }

} else {

    console.log("Invalid input");

}

// console.log(isOfAge);