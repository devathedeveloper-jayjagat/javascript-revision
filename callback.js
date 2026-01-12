function getUser(callback){
    setTimeout(() => {
        callback("devdeep")
    }, 2000);
}


getUser((user) => {
    console.log(user)
})

