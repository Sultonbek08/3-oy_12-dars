for (let i = 1; i <= 10; i++) {
    var ismi = prompt("Foydalanuvchi ismini kiriting")
    while (!isNaN(ismi)) {
        ismi = +prompt("Foydalanuvchi ismini kiriting")
    }
    var yosh = +prompt("Foydalanuvchi yoshini kiriting")
    while (yosh == "" || isNaN(yosh) || yosh < 0) {
        yosh = +prompt("Foydalanuvchi yoshini kiriting")
    }

    let user = {
        'name': ismi ,
        'age': yosh
    }

    console.log(`Foydalanuvchi id si = ${i} , ismi = ${user.name} , yoshi = ${user.age}` )
}
 