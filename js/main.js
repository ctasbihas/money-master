function spandIncome(idName) {
     const expensesInText = document.getElementById(idName).value;
     const expenses = parseFloat(expensesInText);
     return expenses;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
     const income = spandIncome('income-input');
     const foodExpenses = spandIncome('food-expenses');
     const rentExpenses = spandIncome('rent-expenses');
     const clothesExpenses = spandIncome('clothes-expenses');
     const totalCost = foodExpenses + rentExpenses + clothesExpenses;

     const totalExpenses = document.getElementById('total-expenses');
     totalExpenses.innerText = totalCost;

     const balance = document.getElementById('balance');
     balance.innerText = income - totalCost;

});

document.getElementById('save-btn').addEventListener('click', function () {
     const savingAmount = document.getElementById('save-amount').value;
     const perMonthIncome = document.getElementById('income-input').value;
     const savedAmount = document.getElementById('saved-amount');
     savedAmount.innerText = perMonthIncome / savingAmount;
     const remainingBalance = document.getElementById('remaining-balance');
     const foodExpenses = spandIncome('food-expenses');
     const rentExpenses = spandIncome('rent-expenses');
     const clothesExpenses = spandIncome('clothes-expenses');
     const totalCost = foodExpenses + rentExpenses + clothesExpenses;
     remainingBalance.innerText = totalCost - savedAmount;
})