// we need to use for of to loop through array and create a new one based on certain criteria

let usersData = [
  {
    id: 'fkmmodo09fjfd09fd09f',
    age: 23,
    location: {
      latitude: 40.7128,
      longitude: -74.006,
      address: 'New York, NY',
      zipcode: '10001',
    },
    academicBackground: [
      "Bachelor's in Computer Science",
      "Master's in Data Science",
    ],
    salaryRange: {
      min: 50000,
      max: 80000,
      currency: 'USD',
    },
  },
  {
    id: 'dfjkdslmfoi3490fj9',
    age: 30,
    location: {
      latitude: 34.0522,
      longitude: -118.2437,
      address: 'Los Angeles, CA',
      zipcode: '90001',
    },
    academicBackground: [
      "Bachelor's in Economics",
      "Master's in Business Administration",
    ],
    salaryRange: {
      min: 60000,
      max: 90000,
      currency: 'USD',
    },
  },
  // Add 8 more similar objects here
  {
    id: 'fhjkh98f0djkd90jf0dj',
    age: 28,
    location: {
      latitude: 51.5074,
      longitude: -0.1278,
      address: 'London, UK',
      zipcode: 'SW1A 1AA',
    },
    academicBackground: ["Bachelor's in Engineering", "Master's in Finance"],
    salaryRange: {
      min: 55000,
      max: 85000,
      currency: 'GBP',
    },
  },
  {
    id: 'dskjfd0jf09d8jf09dj',
    age: 35,
    location: {
      latitude: 35.6895,
      longitude: 139.6917,
      address: 'Tokyo, Japan',
      zipcode: '100-0001',
    },
    academicBackground: [
      "Bachelor's in Mathematics",
      "Master's in Computer Engineering",
    ],
    salaryRange: {
      min: 7000000,
      max: 10000000,
      currency: 'JPY',
    },
  },
  {
    id: 'sdf9usdf89suf9sdf8',
    age: 26,
    location: {
      latitude: -33.8688,
      longitude: 151.2093,
      address: 'Sydney, Australia',
      zipcode: '2000',
    },
    academicBackground: ["Bachelor's in Biology", "Master's in Marketing"],
    salaryRange: {
      min: 70000,
      max: 100000,
      currency: 'AUD',
    },
  },
  {
    id: '90fjg0f9j0f9jf90j',
    age: 31,
    location: {
      latitude: 40.4168,
      longitude: -3.7038,
      address: 'Madrid, Spain',
      zipcode: '28001',
    },
    academicBackground: ["Bachelor's in History", "Master's in Linguistics"],
    salaryRange: {
      min: 45000,
      max: 75000,
      currency: 'EUR',
    },
  },
  {
    id: 'kf90jdf90j9f90j9f0',
    age: 29,
    location: {
      latitude: -23.5505,
      longitude: -46.6333,
      address: 'São Paulo, Brazil',
      zipcode: '01000-000',
    },
    academicBackground: ["Bachelor's in Sociology", "Master's in Psychology"],
    salaryRange: {
      min: 60000,
      max: 90000,
      currency: 'BRL',
    },
  },
  {
    id: 'dflkj09fj09df09j',
    age: 27,
    location: {
      latitude: 55.7558,
      longitude: 37.6173,
      address: 'Moscow, Russia',
      zipcode: '101000',
    },
    academicBackground: [
      "Bachelor's in Physics",
      "Master's in Political Science",
    ],
    salaryRange: {
      min: 80000,
      max: 120000,
      currency: 'RUB',
    },
  },
  {
    id: 'dskfj09j0fj90df90',
    age: 32,
    location: {
      latitude: 25.276987,
      longitude: 55.296249,
      address: 'Dubai, UAE',
      zipcode: '00000',
    },
    academicBackground: [
      "Bachelor's in Chemistry",
      "Master's in Environmental Science",
    ],
    salaryRange: {
      min: 100000,
      max: 150000,
      currency: 'AED',
    },
  },
  {
    id: 'sdkfj09d8jf09djf09',
    age: 25,
    location: {
      latitude: 28.6139,
      longitude: 77.209,
      address: 'New Delhi, India',
      zipcode: '110001',
    },
    academicBackground: ["Bachelor's in Medicine", "Master's in Public Health"],
    salaryRange: {
      min: 550000,
      max: 800000,
      currency: 'INR',
    },
  },
];

console.log(usersData);
