
function greetings(name) {
    if (typeof name === "string") {
        return `hello ${name}`;
    }
    throw new Error("name must be string");
}

try{
    
    const dev = "Devdeep"
    let data = greetings(dev);
    console.log(data);
}catch (error){
    console.log("Error: ", error.message);
}

