export type Review = {
        reviewerName: string;
        reviewerEmail: string;
        comment: string;
        rating: number;
        date: string;
    }

export type Vehicle = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    returnPolicy: string;
    shippingInformation: string;
    warrantyInformation: string;
    availabilityStatus: string;
    minimumOrderQuantity: number;
    weight:number;
    sku: string;
    reviews: Review[];

    brand: string;
    category: string;
    images: string[];
    tags: string[];
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
};

export type Filter = {
    availability: "inStock" | "outOfStock" | "all",
    brand: string,
    rating?: 1 | 2 | 3 | 4,
    price: {
        min?: number,
        max?:number
    }
}


export type Comment = {
    vehicleId?:number;
    rating: number;
    comment: string;
    reviewerName: string;
    reviewerEmail:string;
    date:string;
}