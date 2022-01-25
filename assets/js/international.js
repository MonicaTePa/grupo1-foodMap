let restaurant = new Restaurant;
restaurant.setName("Manjares");
restaurant.setCategory("international");
restaurant.setImage("./img/international.jpg");
restaurant.setScore(9.8);
restaurant.setFavorite("Guacamole y tortillas");


let category = new Category("international");
category.setTitle("Internacional");
for (let index=0; index<20; index++){
    category.AddRestaurant(restaurant);
}
document.title = category.getTitle();
document.body.appendChild(category.initializeCategory());


let documentMain = document.querySelector('main');
let documentFooter = document.querySelector('footer');
let mainHeight = documentMain.offsetHeight + 50;
documentFooter.style.marginTop = mainHeight.toString() + "px";




