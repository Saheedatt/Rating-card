const ratings = document.querySelectorAll('.rating-circle');
const submitButton = document.querySelector('.submit-button');

ratings.forEach(circle =>{
    circle.addEventListener('click', () =>{
        //to remove selected class from all circles
        ratings.forEach(circle =>circle.classList.remove('selected'));
        //add selected class to clicked circle
        circle.classList.add('selected');
    })
});
submitButton.addEventListener('click', () => {
  window.location.href = 'submit.html';
});

submitButton.addEventListener('click', (displayCard)=>{
  submitButton.classList.toggle('submitted');
});


