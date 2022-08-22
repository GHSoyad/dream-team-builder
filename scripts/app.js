// Add event listener for player cost button
document.getElementById('player-calc-btn').addEventListener('click', function () {
    const playerList = document.getElementById('selected-players');
    const playerNumber = playerList.children.length;
    const playerCost = getInputValueById('player-cost');
    console.log(playerNumber)

    if (playerNumber <= 0) {
        return alert('Select players first!!')
    }

    if (isNaN(playerCost) || playerCost < 0) {
        return alert('Enter valid player cost!!')
    }

    const playerExpense = playerCost * playerNumber;

    setElementValueById('player-expenses', playerExpense);

    const managerCost = document.getElementById('manager-cost');
    const coachCost = document.getElementById('coach-cost');
    const totalCost = document.getElementById('total-cost');
    managerCost.value = '';
    coachCost.value = '';
    totalCost.innerText = 0;
})

// Add event listener for total cost button
document.getElementById('total-calc-btn').addEventListener('click', function () {
    const playerExpense = getElementValueById('player-expenses');
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

// Add event listener for select buttons
document.getElementById('players-list').addEventListener('click', function (event) {
    let selectButtons = event.target;

    if (selectButtons.classList.contains('select')) {
        const selectedPlayersList = document.getElementById('selected-players');

        if (selectedPlayersList.children.length === 5) {
            return alert('5 players already selected!!')
        }

        const selectedPlayer = document.createElement('li');
        const getplayerName = event.target.parentElement.firstElementChild.innerText;
        const setPlayerName = document.createTextNode(getplayerName);

        selectedPlayer.appendChild(setPlayerName);
        selectedPlayersList.appendChild(selectedPlayer);
        selectButtons.setAttribute('disabled', true);
    }
})