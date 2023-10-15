
let userName = "leo_tolstoy"
let userBalance = 5200
let user = 'netologist'
let orderOwner = 'leo_tolstoy'

if (userName === "admin") {
    document.write("Администратор")
} else if (!userName) {
    document.write("Гость")
} else {
    if (userBalance > 5000) {
        document.write("Вип-клиент")
    } else if (userBalance > 1000) {
        document.write("Постоянный покупатель")
    }
}

document.write("<br>")

if (userName === "admin" || orderOwner === userName) {
    document.write("Редактирование разрешено")
} else {
    document.write("Заказ нельзя редактировать")
}
