
// random dating history generator

var yourName = window.prompt("What's your name, loser?"); {
    while (yourName === null || yourName === "") {
        yourName = prompt("What's your name, loser?");
    } 
    window.alert(`Oh, so your name is ${yourName}? Pathetic.`);
    console.log(yourName);
    }

var gfName = window.prompt("What is your goth gf's name?"); {
    while (gfName === null || gfName === "") {
        gfName = window.prompt("What is your goth gf's name?");
    }
    window.alert(`Your girlfriend's name is ${gfName}, all rejoice and despair at her immense power.`);
    console.log(yourName);
    }

var randomYears = Math.floor(Math.random() * 5 + 2);

// establish list of foods
var someSnacks = ["hotdog", "hamburger", "slice of pizza"]

var hungryGirl = function() {
    // gf has a problem, establish askHer variable

    askHer = window.prompt(`${gfName} lets out a long sigh. Do you want to ask her what's wrong? Type YES or NO.`);

    // if askHer is true
    if (askHer === "yes" || askHer === "Yes" || askHer === "YES") {
        window.alert(`${gfName} lets out another long sigh and says, "Nothing."`);
        askAgain = window.prompt(`Do you want to ask again? Type YES or NO.`);

        // if askAgain is true
        if (askAgain === "yes" || askAgain === "Yes" || askAgain === "YES") {
            window.alert(`${gfName} doesn't say anything, but her stomach growls.`);
            feedHer = window.prompt(`Do you want to give her something to eat? Type YES or NO.`);

            // if feedHer is true
            if (feedHer === "yes" || feedHer === "Yes" || feedHer === "YES") {
                for (i = 0; i < someSnacks.length; i++) {
                    window.alert(`You feed ${gfName} a ${someSnacks[i]}.`)
                }
                
                window.alert(`You don't have any more food to feed ${gfName}. ${gfName} storms off and shouts, "I can't fucking stand you, ${yourName}!"`);
                hungryGirl();
            }

            // if feedHer is false
            if (feedHer === "no" || feedHer === "No" || feedHer === "NO") {
                window.alert(`${gfName} storms off and shouts, "You literally don't care about me at all, ${yourName}! I've wasted ${(Math.floor(Math.random() * randomYears))} years of my life on YOU."`);
                hungryGirl();
            }

            // if feedHer is neither true nor false
            else {
                window.alert(`${gfName} just stares at you. You need to pick YES or NO.`);
                hungryGirl();
            }
        }
        
        // if askAgain is false
        if (askAgain === "no" || askAgain === "No" || askAgain === "NO") {
            window.alert(`${gfName} storms off and shouts, "Seriously, ${yourName}?? We've been together for ${(Math.floor(Math.random() * randomYears) + 1)} freakin' years!"`);
            hungryGirl();
        }

        // if askAgain is neither true nor false
        else {
            window.alert(`${gfName} just stares at you. You need to pick YES or NO.`);
            hungryGirl();
        }
    }

    // if askHer is false
    if (askHer === "no" || askHer === "No" || askHer === "NO") {
        window.alert(`${gfName} storms off and shouts, "Screw you, ${yourName}! We've been dating for ${(Math.floor(Math.random() * randomYears) + 1)} fucking years!`);
        hungryGirl();
    }

    // if askHer is neither true nor false
    else {
        window.alert(`${gfName} just stares at you. You need to pick YES or NO.`);
        hungryGirl();
    }
}

hungryGirl();