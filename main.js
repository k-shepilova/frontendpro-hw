function showDivOnFocus(){
    const textField = document.querySelector('#textField');
    const ghostDiv = document.getElementById('ghost');

    textField.addEventListener('focus', () =>{
            ghostDiv.style.opacity = 1;
    });

    textField.addEventListener('blur', () =>{
        ghostDiv.style.opacity = 0;
    });
}

showDivOnFocus();