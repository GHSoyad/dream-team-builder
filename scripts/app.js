// Add event listener for player cost button
document.getElementById('player-calc-btn').addEventListener('click', function () {
    const playerList = document.getElementById('player-list');
    const playerNumber = playerList.children.length;
    const playerCost = getInputValueById('player-cost');

    if (isNaN(playerCost) || playerCost < 0) {
        return alert('Enter valid player cost!!')
    }

    const playerExpense = playerCost * playerNumber;

    setElementValueById('player-expenses', playerExpense);
})

// Add event listener for total cost button
document.getElementById('total-calc-btn').addEventListener('click', function () {
    const playerExpense = getElementValurById('player-expenses');
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');

    if (playerExpense === 0) {
        return alert('Calculate player expense first!!')
    }
    if (isNaN(managerCost) || managerCost < 0) {
        return alert('Enter valid manager cost!!')
    }
    if (isNaN(coachCost) || coachCost < 0) {
        return alert('Enter valid coach cost!!')
    }

    const totalCost = playerExpense + managerCost + coachCost;

    setElementValueById('total-cost', totalCost);
})