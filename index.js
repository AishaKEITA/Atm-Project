/* 1. make an array of objects of users
2. each user has name, pincod, 
3. 3 headings choose to take money or see how much balance left, or add money 

1. pin verification (block the card) 
2. Print balance 
3. withdrawal (with limits and not being able to do with 0 balance) 
4. Cash in*/
let foundUser = null;
let users = [
    {
        name: "Sandra",
        pincode: 4332,
        amount: 5000
    },

    {
        name: "Sibo",
        pincode: 9111,
        amount: 9000
    },

    {
        name: "Buba",
        pincode: 2500,
        amount: 15000
    }];

function validationForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;

    for (let i = 0; i < users.length; i++) {
        if (username == users[i].name && password == users[i].pincode) {
            foundUser = users[i];
            break;
        }
    }

    if (!foundUser) {
        alert("Wrong username or password");
        return;
    }

    loggedInUser = foundUser;
    document.getElementById("loggedinuser").innerText = loggedInUser.name;

    alert(`${loggedInUser.name} logged in successfully`);
}

function printBalance() {
    if(!loggedInUser) {
        alert("You need to log in first!");
        return;
    }

    alert(`${loggedInUser.name} this is your balance: ${loggedInUser.amount}`);
}
function withdraw() {
    if(!loggedInUser) {
        alert("You need to log in first!");
        return;
    }

    let amount = +prompt("Enter amount");
    if (loggedInUser.amount >= amount) {
        loggedInUser.amount -= amount;
    } else {
        alert("You have insufficient funds!")
    }
}

function deposit() {
    if(!loggedInUser) {
        alert("You need to log in first!");
        return;
    }

    let amount = +prompt("Enter amount");
    loggedInUser.amount += amount; 
}

document.getElementById("btn").addEventListener("click", validationForm);
document.getElementById("balance").addEventListener("click", printBalance);
document.getElementById("withdraw").addEventListener("click", withdraw);
document.getElementById("deposit").addEventListener("click", deposit);

let loggedInUser = null;
