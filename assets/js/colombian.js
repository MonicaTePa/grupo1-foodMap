let restaurant = new Restaurant;
restaurant.setName("Cocidos con sabor");
restaurant.setCategory("colombian");
restaurant.setImage("./img/colombian.jpg");
restaurant.setScore(9.7);
restaurant.setFavorite("Sopas y sudados");


let category = new Category("colombian");
category.setTitle("Típica colombiana");
for (let index=0; index<20; index++){
    category.AddRestaurant(restaurant);
}
document.title = category.getTitle();
document.body.appendChild(category.initializeCategory());


let documentMain = document.querySelector('main');
let documentFooter = document.querySelector('footer');
let mainHeight = documentMain.offsetHeight + 50;
documentFooter.style.marginTop = mainHeight.toString() + "px";




