
let userName = "Vasya"
let userBalance = 5200

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