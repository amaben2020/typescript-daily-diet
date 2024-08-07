import { is } from 'drizzle-orm';
import { z, ZodError } from 'zod';

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson), // results: [{name: ""}, {name: ""}]
});

export const fetchStarWarsPeople = async () => {
  const data = await fetch('https://swapi.dev/api/people/').then((res) =>
    res.json()
  );

  const parsedData = StarWarsPeopleResults.parse(data);

  return parsedData.results;
};

const logStarWarsPeopleResults = (
  data: z.infer<typeof StarWarsPeopleResults>
) => {
  //                                    ^ 🕵️‍♂️
  data.results.map((person) => {
    console.log(person.name);
  });
};

const UserSchema = z.object({
  fullName: z.string().trim(),
  username: z.string().min(5).max(9),
  email: z.string().email(),
  address: z.string().min(5).max(50),
  phoneNumber: z.string().length(13).startsWith('+234').trim(),
  height: z.number().positive().gt(170),
  yearsOfExperience: z.number().gte(2),
  numberOfDependants: z.number().lte(3),
  age: z.number().gte(18).int(),
  dateOfBirth: z.date().max(new Date('2006–01–01')).min(new Date('1900–01–01')),
  isMarried: z.boolean(),
  isProgrammer: z.boolean().default(true),
  website: z.string().url(),
  hobby: z.enum(['Programming', 'Weight Lifting', 'Music']),
});

const userInformation = {
  name: 'John',
  age: 2,
};

type TUser = z.infer<typeof UserSchema>;
const parsedUser: TUser = UserSchema.parse({
  fullName: 'John',
  age: 29,
  isMarried: true,
  isProgrammer: true,
  website: 'https://www.google.com',
  hobby: 'Programming',
  phoneNumber: '+234703123433',
  dateOfBirth: new Date('1992-01-01'),
  yearsOfExperience: 5,
  numberOfDependants: 2,
  height: 180,
  address: 'No 1, Lagos Street',
  email: 'amaben@gmail.com',
  username: 'amaben',
});

console.log(parsedUser);
