let restaurant = new Restaurant;
restaurant.setName("Canelazo bar");
restaurant.setCategory("drinks");
restaurant.setImage("./img/drinks.jpg");
restaurant.setScore(7.9);
restaurant.setFavorite("Mojito, cerveza artesanal");


let category = new Category("drinks");
category.setTitle("Bebidas");
for (let index=0; index<20; index++){
    category.AddRestaurant(restaurant);
}
document.title = category.getTitle();
document.body.appendChild(category.initializeCategory());


let documentMain = document.querySelector('main');
let documentFooter = document.querySelector('footer');
let mainHeight = documentMain.offsetHeight + 50;
documentFooter.style.marginTop = mainHeight.toString() + "px";




