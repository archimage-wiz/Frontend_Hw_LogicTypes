
let userName = "leo_tolstoy"
let user = 'netologist'
let orderOwner = 'leo_tolstoy'

let userBalance = 500
let orderSum = 3000
let mounthPurchases = 2

let additionalPurchasePercent = 10
let bonusPurchasePercent = 10
let frequentlyPurchasePercent = 5


resultPercent = additionalPurchasePercent
if (userBalance > 5000) {
    resultPercent += bonusPurchasePercent
}
if (mounthPurchases > 1) {
    resultPercent += frequentlyPurchasePercent
}

resultBonus = orderSum / 100 * resultPercent

document.write(`Процент от покупки: ${resultPercent}%, бонус: ${resultBonus}, итоговый баланс: ${userBalance + resultBonus}`)


