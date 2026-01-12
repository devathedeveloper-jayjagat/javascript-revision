const getEmployeeName = (name) => {
    if (name == "undefined" || name == null || name.typeof != "string"){
        throw new Error("name must be defined and should be sting")
    }
    return name
}
try {
    
    const employeeName = getEmployeeName(null)
    console.log(employeeName)
} catch (error) {
    console.log("Error:" ,error.message)
}