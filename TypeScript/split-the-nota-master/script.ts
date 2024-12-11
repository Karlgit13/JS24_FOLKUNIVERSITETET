let tip: number;
let sum: number;
let numberOfFriends: number;
let friendSum: number;
let sumDivided: number;
let calculatedTip: number;
let total: number;

function calculateTip(sum: number, tip: number): number {
  return sum * tip;
}

function divideTotal(total: number, numberOfFriends: number): number {
  return total / numberOfFriends;
}

function showDividedSum(sum: number): void {
  const friendSumElement = document.getElementById("friendSum") as HTMLElement;
  friendSumElement.innerHTML = `${sum.toFixed(2)}`;
}

document
  .getElementById("calculateButton")
  ?.addEventListener("click", function () {
    const sumInput = document.getElementById("sum") as HTMLInputElement;
    const friendsInput = document.getElementById(
      "numberOfFriends"
    ) as HTMLInputElement;
    const tipInput = document.getElementById("tip") as HTMLInputElement;

    sum = parseFloat(sumInput.value);
    tip = parseFloat(tipInput.value);
    numberOfFriends = parseInt(friendsInput.value);

    calculatedTip = calculateTip(sum, tip);
    total = sum + calculatedTip;
    sumDivided = divideTotal(total, numberOfFriends);

    showDividedSum(sumDivided);

    document.getElementById("inputForm")?.classList.add("hide");
    document.getElementById("showSum")?.classList.remove("hide");
  });
