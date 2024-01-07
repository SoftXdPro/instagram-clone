let usersData = {
    tusers: 1,
    users: {
        "1": {
            name: "Aryan",
            noORemail: "19929939949",
            username: "user",
            pass: "1234"
        }
    }
}

const [loginUsername, loginPassword] = [document.getElementById("username-login"), document.getElementById("pass-login")]

// Updating the data whenever new account or a new login found


const checkInputs = () => {
    if (loginUsername.value != '' && loginPassword.value != '') {
        document.getElementById("login").disabled = false;
    } else if (loginPassword.value == '' || loginUsername.value == '') {
        document.getElementById("login").disabled = true;

    }
}

document.getElementById("login-form").addEventListener("input", checkInputs)
const loginUser = () => {
    for (let id = 1; id <= usersData.tusers; id++) {

        let user = usersData.users[id]
        if ((user.username == loginUsername.value || user.noORemail == loginUsername.value) && user.pass == loginPassword.value) {
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('loggerID', `${id}`)
            window.open('./main-page/main.html', '_self')
            return;
        };
    }
    document.getElementById("wrong-login").style.display = "initial";


}
const strToBool = (arg) => {
    if (arg.toLowerCase() == "true") {
        return true;
    } else {
        return false;
    }
}

const loadData = () => {

    // Setting Login Page as default
    document.getElementsByTagName("form")[1].style.display = "none";
    document.getElementById("login-to-sign").style.display = "none";
    document.getElementById("wrong-login").style.display = "none";
    // Loading User Data
    usersData = JSON.parse(localStorage.getItem("totalUsers"))
}

const saveData = () => {
    localStorage.setItem("totalUsers", JSON.stringify(usersData))
}



const switchPage = (page) => {
    if (page == 'sign') {

        document.getElementsByTagName("form")[0].style.display = "none";
        document.getElementsByTagName("form")[1].style.display = "initial";
        document.getElementById("sign-to-login").style.display = "none";
        document.getElementById("login-to-sign").style.display = "initial";


    } else if (page == "login") {
        document.getElementsByTagName("form")[0].style.display = "initial";
        document.getElementsByTagName("form")[1].style.display = "none";
        document.getElementById("login-to-sign").style.display = "none";
        document.getElementById("sign-to-login").style.display = "initial";


    }
}


saveData()
loadData()