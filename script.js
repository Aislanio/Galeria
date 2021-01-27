const link = document.querySelector("#link")
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
    imagecontainer.src = image.src;
    link.src = image.src;
    link.innerHTML = image.src;
    //adcionar a classe .active para este botao
    button.classList.add('active')
};
document.querySelector("#cop").addEventListener("click", () => {
    document.querySelector(".mesager").style.display = "flex";
    const link_img = link.src
    navigator.clipboard.writeText(link_img);
});
document.querySelector(".feche").addEventListener("click", () => {
    document.querySelector(".mesager").style.display = "none";
})