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
    sku: string;
    reviews: {
        reviewerName: string;
        reviewerEmail: string;
        comment: string;
        rating: number;
        date: string;
    }[];

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