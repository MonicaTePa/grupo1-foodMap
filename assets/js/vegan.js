let restaurant = new Restaurant;
restaurant.setName("Deleite");
restaurant.setCategory("vegan");
restaurant.setImage("./img/vegan.jpg");
restaurant.setScore(8.0);
restaurant.setFavorite("Platos saludables con productos orgánicos");


let category = new Category("Vegetariana y vegana");
category.setTitle("Vegetariana y vegana");
for (let index=0; index<20; index++){
    category.AddRestaurant(restaurant);
}
document.title = category.getTitle();
document.body.appendChild(category.initializeCategory());


let documentMain = document.querySelector('main');
let documentFooter = document.querySelector('footer');
let mainHeight = documentMain.offsetHeight + 50;
documentFooter.style.marginTop = mainHeight.toString() + "px";




