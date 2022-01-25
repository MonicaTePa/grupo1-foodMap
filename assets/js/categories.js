let restaurant = new Restaurant;
restaurant.setName("Mis carnes parrilla");
restaurant.setCategory("fastFood");
restaurant.setImage("./img/mis-carnes.jpg");
restaurant.setScore(6.5);
restaurant.setFavorite("humberguesas, parrilla");


let category = new Category("fast-food");
category.setTitle("Comida rápida");
for (let index=0; index<20; index++){
    category.AddRestaurant(restaurant);
}
document.title = category.getTitle();
document.body.appendChild(category.initializeCategory());


let documentMain = document.querySelector('main');
let documentFooter = document.querySelector('footer');
let mainHeight = documentMain.offsetHeight + 50;
documentFooter.style.marginTop = mainHeight.toString() + "px";

