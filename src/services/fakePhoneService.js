import axios from 'axios';

const url = 'http://localhost:3000/phones';

export async function getPhones() {
  return await axios.get(url);
}

export async function getPhone(id) {
  return await axios.get(url + '/' + id);
}

// export function savePhone(phone) {
//     let phoneInDb = phones.find(m => m._id === phone.id) || {};
//     phoneInDb.name = phone.name;
//     phoneInDb.manufacturer = phone.manufacturer;
//     phoneInDb.description = phone.description;
//     phoneInDb.color = phone.color;
//     phoneInDb.price = phone.price;
//     phoneInDb.imageFileName = phone.imageFileName;
//     phoneInDb.screen = phone.screen;
//     phoneInDb.processor = phone.processor;
//     phoneInDb.ram = phone.ram;
  
//     if (!phoneInDb.id) {
//       phoneInDb.id = Date.now();
//       phones.push(phoneInDb);
//     }
  
//     return phoneInDb;
// }
  
// export function deletePhone(id) {
//     let phoneInDb = phones.find(m => m._id === id);
//     phones.splice(phones.indexOf(phoneInDb), 1);
//     return phoneInDb;
// }