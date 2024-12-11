var _a;
var tip;
var sum;
var numberOfFriends;
var friendSum;
var sumDivided;
var calculatedTip;
var total;
function calculateTip(sum, tip) {
    return sum * tip;
}
function divideTotal(total, numberOfFriends) {
    return total / numberOfFriends;
}
function showDividedSum(sum) {
    var friendSumElement = document.getElementById("friendSum");
    friendSumElement.innerHTML = "".concat(sum.toFixed(2));
}
(_a = document
    .getElementById("calculateButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b;
    var sumInput = document.getElementById("sum");
    var friendsInput = document.getElementById("numberOfFriends");
    var tipInput = document.getElementById("tip");
    sum = parseFloat(sumInput.value);
    tip = parseFloat(tipInput.value);
    numberOfFriends = parseInt(friendsInput.value);
    calculatedTip = calculateTip(sum, tip);
    total = sum + calculatedTip;
    sumDivided = divideTotal(total, numberOfFriends);
    showDividedSum(sumDivided);
    (_a = document.getElementById("inputForm")) === null || _a === void 0 ? void 0 : _a.classList.add("hide");
    (_b = document.getElementById("showSum")) === null || _b === void 0 ? void 0 : _b.classList.remove("hide");
});
