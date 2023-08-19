//----------Buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('mouseover', function() {
            button.classList.add('active');
        });
        button.addEventListener('mouseout', function() {
            button.classList.remove('active');
        });
    });
  });
  