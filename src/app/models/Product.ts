class Product {
    id: number;
    name: string;
    category: string;
    subCategory:string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
    constructor(id: number, name: string, category: string,subCategory:string, description: string, price: number, imageUrl: string, rating: number) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.subCategory=subCategory;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.rating = rating
    }
}