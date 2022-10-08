// extends creates a new type with the properties of the previous one

interface CartItem {
  name: string
  person: string
}

interface City extends CartItem {
  city: string
}

const cartItem: City = {
  name: '',
  person: '',
  city: ''
}