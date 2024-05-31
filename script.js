document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clicker');
    const upgradeButton = document.getElementById('upgrade');
    const countDisplay = document.getElementById('count');
    const errorDisplay = document.getElementById('error');
    const title = document.getElementById('title');

    // Load the count, click value, and upgrade cost from localStorage if they exist
    let count = localStorage.getItem('count');
    let clickValue = localStorage.getItem('clickValue');
    let upgradeCost = localStorage.getItem('upgradeCost');

    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count);
    }

    if (clickValue === null) {
        clickValue = 1;
    } else {
        clickValue = parseInt(clickValue);
    }

    if (upgradeCost === null) {
        upgradeCost = 10;
    } else {
        upgradeCost = parseInt(upgradeCost);
    }

    // Update the displayed count and upgrade button text
    countDisplay.textContent = count;
    upgradeButton.textContent = `Upgrade Click (Cost: ${upgradeCost})`;

    // Function to add click effect
    const addClickEffect = (element) => {
        element.style.transform = 'scale(0.9)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 100);
    };

    // Add event listener to the click button to increment the count and save it
    button.addEventListener('click', () => {
        count += clickValue;
        countDisplay.textContent = count;
        localStorage.setItem('count', count);
        addClickEffect(button); // Add click effect
    });

    // Add event listener to the upgrade button to increase click value
    upgradeButton.addEventListener('click', () => {
        if (count >= upgradeCost) {
            count -= upgradeCost;
            clickValue++;
            upgradeCost *= 5;
            countDisplay.textContent = count;
            upgradeButton.textContent = `Upgrade Click (Cost: ${upgradeCost})`;
            localStorage.setItem('count', count);
            localStorage.setItem('clickValue', clickValue);
            localStorage.setItem('upgradeCost', upgradeCost);
        } else {
            errorDisplay.textContent = "Not enough points to upgrade!";
        }
        addClickEffect(upgradeButton); // Add click effect
    });

    // Add event listener to the title for resetting the counter
    title.addEventListener('dblclick', () => {
        count = 0;
        clickValue = 1;
        upgradeCost = 10;
        countDisplay.textContent = count;
        upgradeButton.textContent = `Upgrade Click (Cost: ${upgradeCost})`;
        localStorage.setItem('count', count);
        localStorage.setItem('clickValue', clickValue);
        localStorage.setItem('upgradeCost', upgradeCost);
        addClickEffect(title); // Add click effect
    });
});