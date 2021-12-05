

//------------------------------------------------------------------------------------------------
//-----------------------------------ANVÄNDARE----------------------------------------------------
//------------------------------------------------------------------------------------------------

var users = new Array();

user1 = new Object();
user1 = {
    username: "janne",
    password: "test"
}
users.push(user1)

user2 = new Object();
user2 = {
    username: "tom",
    password: "tompa"
}

users.push(user2)

user3 = new Object();
user3 = {
    username: "john",
    password: "jompa"
}

users.push(user3)

var currentUser = localStorage.getItem('currentUser')
if( currentUser != null){  
    var currentUser = JSON.parse(currentUser)
    document.getElementById("loggedIn").classList.remove("hidden")
    document.getElementById("logginForm").classList.add("hidden")
    document.getElementById("hejUser").append("Hej "+ currentUser.currentUsername +"!")
}

//------------------------------------------------------------------------------------------------
//-----------------------------------LOCAL STORAGE/INLOGG-----------------------------------------
//------------------------------------------------------------------------------------------------


localStorage.setItem("allUsers", JSON.stringify(users))

const continueBtn = document.getElementById("continueBtn")
continueBtn .addEventListener("click", function(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    event.preventDefault();
    var users = new Array()
    users = JSON.parse(localStorage.getItem("allUsers"))
    for(const user of users) {
        if (user.username === username && user.password === password){
            document.getElementById("loggedIn").classList.remove("hidden")
            document.getElementById("logginForm").classList.add("hidden")
            var currentLoggedIn = {
                currentUsername: username,
                currentPassword: password
             }
            localStorage.setItem("currentUser",JSON.stringify(currentLoggedIn));
            document.getElementById("hejUser").append("Hej "+ currentLoggedIn.currentUsername +"!")
        }
    }

})

const linkCreateAccount = document.getElementById("linkCreateAccount")
linkCreateAccount .addEventListener("click", function() {
    document.getElementById("createForm").classList.remove("hidden")
    document.getElementById("logginForm").classList.add("hidden")
})



//------------------------------------------------------------------------------------------------
//-----------------------------------SKAPA ANVÄNDARE----------------------------------------------
//------------------------------------------------------------------------------------------------

const createBtn = document.getElementById("createUserBtn")
createBtn .addEventListener("click", function(){
    var inputusername = document.getElementById("createUsername").value
    var inputpassword = document.getElementById("createPassword").value
    event.preventDefault();
   var array = new Array()
   array=JSON.parse((localStorage.getItem("allUsers")));
   array.push({
              username: inputusername , 
              password: inputpassword 
    });
   localStorage.setItem('allUsers',JSON.stringify(array));
})


const goBack = document.getElementById("goBack")
goBack .addEventListener("click", function() {
    document.getElementById("createForm").classList.add("hidden")
    document.getElementById("logginForm").classList.remove("hidden")
})


//------------------------------------------------------------------------------------------------
//-----------------------------------INLOGGAD-----------------------------------------------------
//------------------------------------------------------------------------------------------------


const logoutBtn = document.getElementById("logoutBtn")
logoutBtn .addEventListener("click", function() {
    document.getElementById("loggedIn").classList.add("hidden")
    document.getElementById("logginForm").classList.remove("hidden")
    localStorage.removeItem("currentUser")
})