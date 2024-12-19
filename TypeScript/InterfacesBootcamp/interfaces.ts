export interface Person {
  name: string;
  age: number;
  address: string;
}

export interface Car {
  brand: string;
  model: string;
  year: number;
}

export interface Book {
  title: string;
  author: string;
  pages: number;
}

export interface Computer {
  brand: string;
  processor: string;
  ram: string;
  storage: string;
}

export interface Movie {
  title: string;
  director: string;
  genre: String;
}

export interface Student {
  name: string;
  id: string;
  courses: string[];
}

export interface Phone {
  brand: string;
  model: string;
  os: string;
}

export interface Customer {
  name: string;
  customerNumber: string;
  purchaseHistory: string[];
}

export interface Product {
  name: string;
  price: number;
  category: string;
}

export interface Order {
  orderNumber: string;
  productList: string[];
  totalPrice: number;
}
