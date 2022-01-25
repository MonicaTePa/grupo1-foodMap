let text = `Registre su restaurante ingrasando los siguientes datos: `;
let image = `/img/imgRegister/pngChefs.png`;
const parragraph = document.querySelector(`#instructions`);
let InitialText = parragraph.textContent;
const newInstructions = document.createTextNode(` `)
const eventType = `click`;
const buttonR = document.querySelector(`#buttonRegister`);
const buttonL = document.querySelector(`#buttonLogin`);
const createP = document.createElement(`p`);
const textForLogin = `Bienvenido otra vez! Revisa tus notificaciones.`
const textForRegister = `Bienvenido a FoodMap! Comienza a subir todos los detalles de tu restaurante.`
const mainText = document.querySelector(`#mainText`);
const buttonSend = document.querySelector(`.sendInfo`);
let numberSwitch = 0;



const modifyToRegisterSection = () => {
    numberSwitch += 1;
    let buttonColor = buttonR.style.backgroundColor = `#eda537`;
    let buttonColor2 = buttonL.style.backgroundColor = `transparent`
    let buttonRadius = buttonR.style.borderRadius = `2px`;
    let instructions = parragraph.textContent = text;
    document.querySelector(`.mainImageRegister`).src = image;
    document.querySelector(`.newInput1`).type = `text`;
    document.querySelector(`.newInput1`).placeholder = `Nombre del Restaurante`;
    document.querySelector(`.newInput2`).type = `text`;
    document.querySelector(`.newInput2`).placeholder = `Direccion`;
}

buttonR.addEventListener(eventType, modifyToRegisterSection);

const modifyToLoginSection = () => {
    numberSwitch +=0;
    let buttonColor = buttonR.style.backgroundColor = `transparent`;
    let buttonColor2 = buttonL.style.backgroundColor = `#eda357`;
    let buttonRadius = buttonL.style.borderRadius = `2px`;
    let instructions = parragraph.textContent = InitialText;
    document.querySelector(`.mainImageRegister`).src =
    `/img/imgRegister/kisspng-indian-cuisine-asian-cuisine-chef-s-uniform-cookin-cooking-pan-5ab6d284077121.1020671215219308840305.png`
    document.querySelector(`.newInput1`).type = `hidden`;
    document.querySelector(`.newInput1`).placeholder = ` `;
    document.querySelector(`.newInput2`).type = `hidden`;
    document.querySelector(`.newInput2`).placeholder = ` `;
    
}

buttonL.addEventListener(eventType, modifyToLoginSection);


const modifyMainText = () => {
    if(numberSwitch===0){
        mainText.textContent = textForLogin;
    }else if (numberSwitch===1){
        mainText.textContent = textForRegister;
    }
}    


buttonSend.addEventListener(eventType, modifyMainText);