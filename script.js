console.log("Hello");
document.querySelector('.cross').style.display = 'none';//cross icon will remove.
document.querySelector('.hamburger').addEventListener("click", () => {

    document.querySelector('.sidebar').classList.toggle('sidebargo');
    //if sidebar conatins sidebargo class then if will exceute(conatains is inbuit method)
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';

        }, 300);
    }


})
