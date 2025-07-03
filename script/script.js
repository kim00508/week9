//add an event listener to the full name input
document.querySelector("#fname").addEventListener("blur", function(){
    //create a new pattern to use to validate the user input
    //patterns can be something specific, like abc (looking for only those characters)
    //or you can probide groups, or ranges, of characters, like a-z
    //the [] create a group to search for
    //the ^ in a group reverses it (so it looks for anything that doesn't match)
    //there are also special characters, like \s to look for any space
    //when you want to find a character that has a specific fuction in a pattern, 
    //like a -, you have to escape it (use the backslash before it)
    
    const fnamePattern = /[a-zA-Z.,\s]/;
    
    //using the pattern, check (test) if there is a match in what the user has typed
    //give the user a message depending on the result of the check 
    if(fnamePattern.test(this.value)){
        //if the pattern is true, then it found something that isn't:
        //a lower case letter, an upper case letter, or a space (ie. a number)
        this.parentNode.querySelector(".validation").textContent = "That's not a name!";
        //toggle the error class
        this.classList.add("error");
    }else{
        //if we didn't find anything that shouldn't be there, remove the message
        this.parentNode.querySelector(".validation").textContent = "";
        //toggle the erroer class
        this.classList.remove("error");

    }
});


//event listenr for the postal code field 
document.querySelector("#pcode").addEventListener("change", (event) => {
    //when you use the arrow method, "this" doesn't refer to the target element,
    //it refers to the event...
    //we need a variable to hold the event, and we can refer to the event's target
    //console.log(event.target.value);

    //write the pattern for a canadian postal code
    //A1A 1A1 or A1A1A1 or a1a1a1 or a1a 1a1
    //there are also only specific letters: ABCEGHJKLMNPRSTVXYZ
    // \d means any number
    // a ? after a group makes whatever is contained in that group optional 
    //we can then add flags after the pattern, like i for case insensitive
    //a^ outside of [] means this must be the start of the content
    //a$ outside of [] means this must be the end of the content
    const postalPattern = /^[ABCEGHJKLMNPRSTVXYZ]\d[ABCEGHJKLMNPRSTVXYZ][ ]?\d[ABCEGHJKLMNPRSTVXYZ]\d$/i;

    if(postalPattern.test(event.target.value)){
        //if it's true, then if matches the postal code pattern...
        event.target.parentNode.querySelector("span").textContent = "";
    }else{
        //if the test fails, then it doesn't match the postal code pattern 
        event.target.parentNode.querySelector("span").textContent = "Not a valid postal code";
    }
});

//add event listener for email
document.querySelector("#email").addEventListener("change", function(){
    //add a pattern for emails...
    const emailPattern = /[^a-zA-Z0-9.,?:\-@%\/\s_]/;

    console.log("Email Pattern" + emailPattern.test(this.value));
})