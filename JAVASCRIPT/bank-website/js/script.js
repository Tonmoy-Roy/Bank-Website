
document.getElementById('btn').addEventListener('click', function () {
    const emailfield = document.getElementById('email');
    const email = emailfield.value;
    const passwordfield = document.getElementById('password');
    const password = passwordfield.value;
    console.log(email, password);
    if (email == 'roytonmoy901@gmail.com' && password == '1234')
        window.location.href = 'bank.html';
    else alert('email and password do not match');
    emailfield.value='';
    passwordfield.value='';
})