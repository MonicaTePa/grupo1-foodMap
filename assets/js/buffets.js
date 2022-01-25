let restaurant = new Restaurant;
restaurant.setName("Buffet King");
restaurant.setCategory("buffets");
restaurant.setImage("./img/buffet.jpg");
restaurant.setScore(6.5);
restaurant.setFavorite("Buffet a la carta");


let category = new Category("buffet");
category.setTitle("Buffets");
for (let index=0; index<20; index++){
    category.AddRestaurant(restaurant);
}
document.title = category.getTitle();
document.body.appendChild(category.initializeCategory());


let documentMain = document.querySelector('main');
let documentFooter = document.querySelector('footer');
let mainHeight = documentMain.offsetHeight + 50;
documentFooter.style.marginTop = mainHeight.toString() + "px";




