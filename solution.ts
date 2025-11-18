


const formatValue = (value: string | number | boolean): string | number | boolean => {

  if (typeof value === 'string') {

    return value.toUpperCase();


  } else if (typeof value === 'number') {

    return value * 10;

  } else {

    return !value;

  }
};






const getLength = (value: string | unknown[]): number => {


    if (typeof value === 'string') {

        return value.length;

    } else if (Array.isArray(value)) {

        return value.length;

    }


    return 0; 


};






class Person {
  
  name: string;

  age: number;

  constructor(name: string, age: number) {

    this.name = name;
    this.age = age;
  }


  getDetails(): string {

    return `Name: ${this.name}, Age: ${this.age}`;
    
  }
}







type BookItem = {

  title: string;
  rating: number;

};


const filterByRating = (items: BookItem[]): BookItem[] => {

  return items.filter(item => item.rating >= 4);

  
};











interface User {

  id: number;
  name: string;
  email: string;
  isActive: boolean;

}

const filterActiveUsers = (users: User[]): User[] => {

  return users.filter(user => user.isActive);

};







interface Book {
  
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;

}

const printBookDetails = (book: Book): void => {

  const availability = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);

};









const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {


  const combined = [...arr1, ...arr2];
  const unique: (string | number)[] = [];

  for (let i = 0; i < combined.length; i++) {

    const item = combined[i];
    let isDuplicate = false;

    
    for (let j = 0; j < unique.length; j++) {

      if (unique[j] === item) {

        isDuplicate = true;
        break;

      }

    }

    if (!isDuplicate) {
      
      unique[unique.length] = item; 

    }


  }

  return unique;
};







interface Product {


  name: string;
  price: number;
  quantity: number;
  discount?: number;

}



const calculateTotalPrice = (products: Product[]): number => {


  return products.reduce((total, product) => {

    const itemTotal = product.price * product.quantity;

    const discountRate = product.discount ? product.discount / 100 : 0;

    const finalPrice = itemTotal * (1 - discountRate);


    return total + finalPrice;

  }, 0);


};

