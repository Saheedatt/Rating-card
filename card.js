const displayCard=()=>{
    const selectedNumber = document.querySelector('input[name="ratings"]:checked').value;
    //to add the selected number
    document.getElementById('selectedNumber').innerHTML = `You selected ${selectedNumber}`;

    //now to show the thankyou card
    const modal = document.getElementById('cardModal');
    modal.style.display = 'block';
}