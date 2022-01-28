let para = document.getElementsByTagName("p");

document.addEventListener ("keypress", (event) => {
    console.log(event);
    eventKey2.innerHTML = event.key;
    para[1].textContent = event.key;
    para[3].textContent = event.code;
    para[5].textContent = event.which;
});