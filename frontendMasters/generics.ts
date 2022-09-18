const phone: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};

phone.home;


console.log(phone);

interface IPhone {
  [key: string | number]: {
    country: string;
    area: string;
    number: string;
  }
}

const guy  = {
  name: "Guy",
  age: 30,
  phone: {
    country: "+1",
    area: "211",
    number: "652-4515",
    babes: ['sandeep', 'sachin', 'saurav',
       {
        name : 'mom',
    }  
    ]
  },
};
 
 