import axios from 'axios';

const phones = [
    {
      id: 0,
      name: "Iphone 12",
      manufacturer: "Apple",
      description: "lorem ipsum dolor sit amet consectetur",
      color: "black",
      price: 769,
      imageFileName: "Iphone_12.png",
      screen: "4,7 inch IPS",
      processor: "A10 Fusion",
      ram: 2,
    },
    {
      id: 1,
      name: "Iphone 8",
      manufacturer: "Apple",
      description: "lorem ipsum dolor sit amet",
      color: "grey",
      price: 969,
      imageFileName: "Iphone_8.png",
      screen: "4,7 inch IPS",
      processor: "A11 Fusion",
      ram: 3,
    },
    {
      id: 2,
      name: "Galaxy A6",
      manufacturer: "Samsung",
      description: "dolor sit amet consectetur",
      color: "black",
      price: 200,
      imageFileName: "Galaxy_A6.png",
      screen: "5,7 inch IPS",
      processor: "A11 Fusion",
      ram: 3,
    },
    {
      id: 3,
      name: "Blade A512",
      manufacturer: "ZTE",
      description: "amet consectetur",
      color: "white",
      price: 149,
      imageFileName: "Blade_A512.png",
      screen: "4,7 inch IPS",
      processor: "A12 Fusion",
      ram: 3,
    },
    {
      id: 4,
      name: "Galaxy A71",
      manufacturer: "Samsung",
      description: "lorem ipsum dolor sit amet consectetur",
      color: "blue",
      price: 769,
      imageFileName: "Galaxy_A71.png",
      screen: "4,7 inch IPS",
      processor: "A10 Fusion",
      ram: 2,
    },
];

const url = 'http://localhost:3002/phones';

export async function getPhones() {
  return await axios.get(url).then(res => res.data).catch(err=> console.log(err));
}

export function getPhone(id) {
    return phones.find(m => m.id === id);
}

export function savePhone(phone) {
    let phoneInDb = phones.find(m => m._id === phone.id) || {};
    phoneInDb.name = phone.name;
    phoneInDb.manufacturer = phone.manufacturer;
    phoneInDb.description = phone.description;
    phoneInDb.color = phone.color;
    phoneInDb.price = phone.price;
    phoneInDb.imageFileName = phone.imageFileName;
    phoneInDb.screen = phone.screen;
    phoneInDb.processor = phone.processor;
    phoneInDb.ram = phone.ram;
  
    if (!phoneInDb.id) {
      phoneInDb.id = Date.now();
      phones.push(phoneInDb);
    }
  
    return phoneInDb;
}
  
export function deletePhone(id) {
    let phoneInDb = phones.find(m => m._id === id);
    phones.splice(phones.indexOf(phoneInDb), 1);
    return phoneInDb;
}