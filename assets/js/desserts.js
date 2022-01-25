let restaurant = new Restaurant;
restaurant.setName("Sauce Chantilly");
restaurant.setCategory("desserts");
restaurant.setImage("./img/desserts.jpg");
restaurant.setScore(7.4);
restaurant.setFavorite("Helado de chocolate y avellanas");


let category = new Category("desserts");
category.setTitle("Dulces y postres");
for (let index=0; index<20; index++){
    category.AddRestaurant(restaurant);
}
document.title = category.getTitle();
document.body.appendChild(category.initializeCategory());


let documentMain = document.querySelector('main');
let documentFooter = document.querySelector('footer');
let mainHeight = documentMain.offsetHeight + 50;
documentFooter.style.marginTop = mainHeight.toString() + "px";




