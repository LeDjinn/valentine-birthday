export interface HotelData {
    url: string;                // The URL of the hotel page
    title: string;              // The title of the hotel
    description: string;        // A brief description of the hotel
    images: ImageData[];        // Array of image URLs and descriptions
    facilities: string[];       // Array of facilities (strong points)
    price: string;              // The price in TND
  }
  
  export interface ImageData {
    url: string;                // The image URL
    description: string;        // The alt text (description)
  }