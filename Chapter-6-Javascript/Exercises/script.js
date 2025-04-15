const pricePerLiterInput = document.getElementById('pricePerLiter');
const litersPurchasedInput = document.getElementById('litersPurchased');
const calculateBtn = document.getElementById('calculateBtn');
const totalCostDisplay = document.getElementById('totalCost');

function calculateTotalCost() {
    const pricePerLiter = parseFloat(pricePerLiterInput.value);
    const litersPurchased = parseFloat(litersPurchasedInput.value);
    if (!isNaN(pricePerLiter) && !isNaN(litersPurchased) && pricePerLiter >= 0 && litersPurchased >= 0) {
        const totalCost = pricePerLiter * litersPurchased;
        totalCostDisplay.textContent = `Total Cost: €${totalCost.toFixed(2)}`;
    } else {
        totalCostDisplay.textContent = 'Total Cost: Invalid Input';
    }
}

calculateBtn.addEventListener('click', calculateTotalCost);