let users = [
    { name: "Carlos", age: 20 },
    { name: "Juana", age: 17 },
    { name: "Oliver", age: 25 },
    { name: "Katherine", age: 30 },
  ];

  let mayoriaEdad = users.filter(function(users){
    return users.age >= 18
  }
)
let edadEnDias = mayoriaEdad.map(function(users){
    return {
        ...users,
        age_in_days: users.age * 365
    }
})
console.log(edadEnDias)

