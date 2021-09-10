window.onload = () => {
    const loginUser = document.getElementById('loginUser');
    loginUser.onpaste = e => e.preventDefault();
    const sifreamk = document.getElementById('loginPass');
    sifreamk.onpaste = e => e.preventDefault();
}

var usernameInput;

function keyListenerUser(event) {
    usernameInput = $('.loginPass').val();
    if (event.keyCode == 13 && usernameInput != "") {
        $(".loginPass").slideDown(500);
    }
}

// </> Nolpents