/*image gallery */
function selectImage(event){
    const button = event.currentTarget;
    //remove todas as classes .active
    console.log(button);
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    console.log(buttons);
    function removeActiveClass(button) {
        button.classList.remove("active")
        console.log(button);
    }
    //Selecionar o container de image
    const image = button.children[0]
    console.log(image);
    const imagecontainer = document.querySelector(".orphanage-details > img")
    console.log(imagecontainer);
    //atualizar o cotainer de image
    imagecontainer.src = image.src
    //adcionar a classe .active para este botao
    button.classList.add('active')
}
let tipoUsuario = 1;
const img =  document.querySelector(".orphanage-details > img")

setInterval(() => {
    switch (tipoUsuario) {
    case 1:
        img.src = "https://source.unsplash.com/random?id=1";
        tipoUsuario++
        break;
    case 2:
        img.src = "https://source.unsplash.com/random?id=2";
        tipoUsuario++
        break;
    case 3:
        img.src = "https://source.unsplash.com/random?id=3https://source.unsplash.com/random?id=3";
        tipoUsuario++
        break;
    case 4:
        img.src = "https://source.unsplash.com/random?id=4";
        tipoUsuario++
        break;
    case 5:
        img.src = "https://source.unsplash.com/random?id=5";
        tipoUsuario++
        break;
    case 6:
        img.src = "https://source.unsplash.com/random?id=6";
        tipoUsuario = 1;
        break;
}
}, 4000);