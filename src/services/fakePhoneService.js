import axios from 'axios';

const url = 'http://localhost:3000/phones';

export async function getPhones() {
  return await axios.get(url);
};

export async function getPhone(id) {
  return await axios.get(url + '/' + id);
};

export async function deletePhone(id) {
  return await axios.delete(url + '/' + id);
}

export async function savePhone(phone) {
  if(phone.id) {
    return await axios.put(url + '/' + phone.id, phone)
  }

  return await axios.post(url, phone);
}
  
