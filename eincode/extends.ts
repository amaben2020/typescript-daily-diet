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