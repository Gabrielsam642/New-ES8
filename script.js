//                   String padding

// .pad.Start()
console.log("samuel")

// .pad.End()
console.log("samuel")



//                  
const fun =  (samuel, Gabriel, Oluwafemi, myself,) => {
    console.log(Oluwafemi);
} 
    fun(1, 2, 3, 4,)


//          object.values, object.entries, object.key

let obj = {
    username0: 'Samuel',
    username1: 'Gabriel',
    username2: 'Oluwafemi',
}
Object.keys(obj).forEach((key, index) =>{
    console.log(key, obj[key]);
});

Object.values(obj).forEach(values =>{
    console.log(values);
});

Object.entries(obj).forEach(values =>{
    console.log(values);
});

Object.entries(obj).map(value =>{
    return value[1] + value[0].replace('username', '');
});










