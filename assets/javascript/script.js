// establish user's name
var yourName = window.prompt("What is your name?");

// establish gf's name
var gfName = window.prompt("What is your goth gf's name?");

// establish list of foods
var someSnacks = ["hotdog", "hamburger", "slice of pizza"]

var hungryGirl = function() {
    // gf has a problem, establish askHer variable
    askHer = window.prompt("Your goth gf lets out a long sigh. Do you want to ask her what's wrong? Type YES or NO.");

    // if askHer is true
    if (askHer === "yes" || askHer === "Yes" || askHer === "YES") {
        window.alert(gfName + " lets out another long sigh and says, 'Nothing.'");
        askAgain = window.prompt("Do you want to ask again? Type YES or NO.");

        // if askAgain is true
        if (askAgain === "yes" || askAgain === "Yes" || askAgain === "YES") {
            window.alert(gfName + " doesn't say anything, but her stomach growls.");
            feedHer = window.prompt("Do you want to give her something to eat? Type YES or NO.");

            // if feedHer is true
            if (feedHer === "yes" || feedHer === "Yes" || feedHer === "YES") {
                window.alert("You feed " + gfName + " a " + someSnacks[0] + ".");
                window.alert(gfName + " is still hungry, so you feed her a " + someSnacks[1] + ".");
                window.alert(gfName + " is still hungry, so you feed her a " + someSnacks[2]) + ".";
                window.alert("You don't have any more food to feed " + gfName + ". " + gfName + " storms off and shouts, 'I can't fucking stand you, " + yourName + "!'");
                hungryGirl();
            }

            // if feedHer is false
            if (feedHer === "no" || feedHer === "No" || feedHer === "NO") {
                window.alert(gfName + " storms off and shouts, 'You never care about me, " + yourName + "!'");
                hungryGirl();
            }

            // if feedHer is neither true nor false
            else {
                window.alert(gfName + " just stares at you. You need to pick YES or NO.");
                hungryGirl();
            }
        }
        
        // if askAgain is false
        if (askAgain === "no" || askAgain === "No" || askAgain === "NO") {
            window.alert(gfName + " storms off and shouts, 'You never care about me, " + yourName + "!'");
            hungryGirl();
        }

        // if askAgain is neither true nor false
        else {
            window.alert(gfName + " just stares at you. You need to pick YES or NO.");
            hungryGirl();
        }
    }

    // if askHer is false
    if (askHer === "no" || askHer === "No" || askHer === "NO") {
        window.alert(gfName + " storms off and shouts, 'You never care about me, " + yourName + "!'");
        hungryGirl();
    }

    // if askHer is neither true nor false
    else {
        window.alert("Your goth gf just stares at you. You need to pick YES or NO.");
        hungryGirl();
    }
}

hungryGirl();