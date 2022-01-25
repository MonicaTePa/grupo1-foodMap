class Restaurant{
    constructor(){
        this.name = "";
        this.image = "";
        this.score = 0;
        this.category = "";
        this.favorite = [];
        this.imageAlt = "";
    }

    getName(){
        return this.name;
    }

    getImage(){
        return this.image
    }

    getScore(){
        return this.score;
    }

    getCategory(){
        return this.category;
    }

    getFavorite(){
        return this.favorite;
    }

    getImageAlt(){
        return this.imageAlt;
    }

    setName(name){
        this.name = name;
    }

    setImage(image){
        this.image = image;
    }

    setScore(score){
        this.score = score;
    }

    setCategory(category){
        this.category = category;
    }

    setFavorite(favorite){
        this.favorite = favorite;
    }

    setImageAlt(imageAlt){
        this.imageAlt = imageAlt;
    }
    

    initializeRestaurant(){
       let restaurantItem = document.createElement('div');
       restaurantItem.className = "restaurant-item";

       let restaurantImgContainer = document.createElement('div');
       restaurantImgContainer.className = "restaurant-img-container";

       let restaurantImg = document.createElement('img');
       restaurantImg.className = "restaurant-img";
       restaurantImg.src = this.image;
       restaurantImg.alt = this.imageAlt;

       let restaurantScore = document.createElement('div');
       restaurantScore.className = "restaurant-score";

       let scoresHeartIcon = document.createElement('img');
       scoresHeartIcon.className = "scores-heart-icon";
       scoresHeartIcon.src = "./img/heart.png";
       scoresHeartIcon.alt = "Like Icon";

       let scoreNumber = document.createElement('p');
       scoreNumber.className = "score-number";
       scoreNumber.textContent = this.score;

       let restaurantInfo = document.createElement('div');
       restaurantInfo.className = "restaurant-info";

       let restaurantName = document.createElement('h3');
       restaurantName.className = "restaurant-name";
       restaurantName.textContent = this.name;

       let infoAuxiliarCotainer = document.createElement('div');
       infoAuxiliarCotainer.className = "info-auxiliar-container";

       let restaurantInfoSubtitle = document.createElement('p');
       restaurantInfoSubtitle.className = "restaurant-info-subtitle";
       restaurantInfoSubtitle.textContent = "Platos estrella";

       let restaurantFavorite = document.createElement("restaurant-favorite");
       restaurantFavorite.textContent = this.favorite;             

       restaurantItem.appendChild(restaurantImgContainer);
       restaurantImgContainer.appendChild(restaurantImg);
       restaurantImgContainer.appendChild(restaurantScore);
       restaurantScore.appendChild(scoresHeartIcon);
       restaurantScore.appendChild(scoreNumber);
       restaurantItem.appendChild(restaurantInfo);
       restaurantInfo.appendChild(restaurantName);
       restaurantInfo.appendChild(infoAuxiliarCotainer);
       infoAuxiliarCotainer.appendChild(restaurantInfoSubtitle);
       infoAuxiliarCotainer.appendChild(restaurantFavorite);3

       return restaurantItem;
       
    }

}