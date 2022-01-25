class Category{
    constructor(name){
        this.categoryName = name;
        this.categoryTitle = "";
        this.categoryRestaurants = [];
    }

    getName(){
        return this.categoryName;
    }

    getTitle(){
        return this.categoryTitle;
    }

    getRestaurants(){
        return this.categoryRestaurants;
    }

    setName(name){
        this.categoryName = name;
    }

    setTitle(title){
        this.categoryTitle = title;
    }

    setRestaurants(restaurants){
        this.categoryRestaurants = restaurants;
    }

    AddRestaurant(restaurant){
        this.categoryRestaurants.push(restaurant);
    }

    initializeCategory(){

        let categoryTitle = document.createElement('div');
        categoryTitle.className = "category-title";
        categoryTitle.textContent = this.categoryTitle;

        let categoryContainer = document.createElement('div');
        categoryContainer.className = "category-container";

        this.categoryRestaurants.forEach(restaurant => {
            categoryContainer.appendChild(restaurant.initializeRestaurant());
        });      
        
        let categoryMain = document.querySelector('main');
        categoryMain.appendChild(categoryTitle);
        categoryMain.appendChild(categoryContainer);  
        
        return categoryMain;
    }
}


