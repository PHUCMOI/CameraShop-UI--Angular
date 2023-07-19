export interface Order {
    orderId: number;
    userId: number;
    username: string;
    address: string;
    payment: string;
    status: string;
    price: number;
    message: string;
    orderDetails: OrderDetail[];
  }
  
  export interface OrderDetail {
    orderId: number;
    cameraId: number;
    quantity: number;
    status: string;
    camera: Camera;
  }
  
  export interface Camera {
    categoryId: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    img: string;
  }
  