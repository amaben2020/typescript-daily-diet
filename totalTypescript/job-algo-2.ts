type TRole = "COMPANY" | "TALENT";
type TSkills = {
  skill: string;
  yearsOfExperience: number;
};
type TAvailabilityi = "full time" | "contract" | "part time";

type TJob = {
  _id: string;
  company: {
    _id: string;
    email: string;
    role: TRole;
    companyName: string;
    companyInfo: string;
    companyLogo: string;
  };
  skills: TSkills[];
  salaryFrom: number;
  salaryTo: number;
  location: [string];
  availability: TAvailability[];
  jd: string;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const job: TJob = {
  _id: "6546a064e8cd18133b91600d",
  company: {
    _id: "65109845264a47286852ecd6",
    email: "bambutest@mailinator.com",
    role: "COMPANY",
    companyName: "Nigeria ",
    companyInfo: "Hello World",
    companyLogo:
      "https://media.licdn.com/dms/image/C4E0BAQHomU3GepbczQ/company-logo_200_200/0/1649325931269?e=2147483647&v=beta&t=Q_aV0MgkABgZVo6-0CVz8HI-3y7-IZeJDOklpixsOyk",
  },
  skills: [
    {
      skill: "programming languages",
      yearsOfExperience: 1,
    },
    {
      skill: "api development",
      yearsOfExperience: 1,
    },
    {
      skill: "server management",
      yearsOfExperience: 1,
    },
    {
      skill: "database management",
      yearsOfExperience: 1,
    },
  ],
  salaryFrom: 2000,
  salaryTo: 3000,
  location: ["sweden"],
  availability: ["full time"],
  jd: "Software developer Software developer",
  title: "Software developer",
  status: "ACTIVE",
  createdAt: "2023-11-04T19:49:56.993Z",
  updatedAt: "2023-11-04T19:49:56.993Z",
  __v: 0,
};

type TCandidate = {
  diversity: any;
  language: any;
  nationality: any;
  _id: string;
  user_id: {
    _id: string;
    email: string;
    country: string;
    firstName: string;
    lastName: string;
    role: TRole;
  };
  skills: TSkills[];
  pastExperiences: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  }[];
  bio: string;
  certificates: {
    name: string;
    link: string;
    image?: string;
  }[];

  education: {
    schoolName: string;
    certificateType: string;
    graduationDate: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const candidates: TCandidate[] = [
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: "650a9f6adc3af123b5b1d2e9",
    user_id: {
      _id: "650a8863d7074dac7faa62fe",
      email: "soesitsocials8@gmail.com",
      country: "NG",
      firstName: "prince",
      lastName: "chisomaga",
      role: "TALENT",
    },
    skills: [
      {
        skill: "Software Development",
        yearsOfExperience: 7,
      },
      {
        skill: "Project Management",
        yearsOfExperience: 4,
      },
      {
        skill: "Data Analysis",
        yearsOfExperience: 2,
      },
    ],
    pastExperiences: [
      {
        company: "Company XYZ",
        position: "Senior Software Engineer",
        startDate: "2016-01-01",
        endDate: "2022-12-31",
      },
      {
        company: "Company DEF",
        position: "Project Manager",
        startDate: "2018-06-01",
        endDate: "2020-12-31",
      },
    ],
    bio: "Experienced professional with a strong background in software development, project management, and data analysis.",
    certificates: [
      {
        name: "AWS Certified Developer",
        link: "https://example.com/aws-certification",
      },
      {
        name: "Scrum Master Certified",
        link: "https://example.com/scrum-master-certification",
        image:
          "https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk=",
      },
      {
        name: "Google Cloud Certified",
        link: "https://example.com/google-cloud-certification",
      },
    ],
    education: [
      {
        schoolName: "University of ABC",
        certificateType: "Bachelor's Degree in Computer Science",
        graduationDate: "2014-05-31",
      },
      {
        schoolName: "Online Course XYZ",
        certificateType: "Advanced Web Development",
        graduationDate: "2016-09-30",
      },
      {
        schoolName: "Data Science Academy",
        certificateType: "Data Analysis",
        graduationDate: "2018-12-31",
      },
    ],
    createdAt: "2023-09-20T07:29:47.007Z",
    updatedAt: "2023-09-20T07:29:47.007Z",
    __v: 0,
  },
  {
    nationality: [],
    _id: "653eb769857c8da3cd6e03c0",
    user_id: {
      _id: "651bed740c3587d977d304ea",
      email: "talent@gmail.com",
      country: "NG",
      firstName: "prince",
      lastName: "chisomaga",
      role: "TALENT",
    },
    skills: [
      {
        skill: "software development",
        yearsOfExperience: 7,
      },
      {
        skill: "project management",
        yearsOfExperience: 4,
      },
      {
        skill: "data analysis",
        yearsOfExperience: 10,
      },
    ],
    pastExperiences: [
      {
        company: "Company XYZ",
        position: "Senior Software Engineer",
        startDate: "2016-01-01",
        endDate: "2022-12-31",
      },
      {
        company: "Company DEF",
        position: "Project Manager",
        startDate: "2018-06-01",
        endDate: "2020-12-31",
      },
    ],
    bio: "Experienced professional with a strong background in software development, project management, and data analysis.",
    certificates: [
      {
        name: "AWS Certified Developer",
        link: "https://example.com/aws-certification",
      },
      {
        name: "Scrum Master Certified",
        link: "https://example.com/scrum-master-certification",
        image:
          "https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk=",
      },
      {
        name: "Google Cloud Certified",
        link: "https://example.com/google-cloud-certification",
      },
    ],
    education: [
      {
        schoolName: "University of ABC",
        certificateType: "Bachelor's Degree in Computer Science",
        graduationDate: "2014-05-31",
      },
      {
        schoolName: "Online Course XYZ",
        certificateType: "Advanced Web Development",
        graduationDate: "2016-09-30",
      },
      {
        schoolName: "Data Science Academy",
        certificateType: "Data Analysis",
        graduationDate: "2018-12-31",
      },
    ],
    diversity: [
      {
        sex: "female",
      },
    ],
    language: ["English", "French", "Portuguese"],
    createdAt: "2023-10-29T19:50:01.201Z",
    updatedAt: "2023-10-29T20:25:54.727Z",
    __v: 0,
  },
  {
    nationality: [],
    _id: "6541e6d5ccf57716cd61a2f1",
    user_id: {
      _id: "650d4a6958f7b9003850288a",
      email: "adebisi@mailinator.com",
      country: "Bouvet Island",
      firstName: "adebisi ",
      lastName: "bola",
      role: "TALENT",
    },
    skills: [
      {
        skill: "software development",
        yearsOfExperience: 2,
      },
      {
        skill: "programming",
        yearsOfExperience: 9,
      },
      {
        skill: "redux",
        yearsOfExperience: 4,
      },
    ],
    pastExperiences: [
      {
        position: "senior manager",
        company: "bamble",
        startDate: "2222-12-22",
        endDate: "2222-02-22",
      },
      {
        position: "Frontend developer",
        company: "Universe",
        startDate: "1111-11-11",
        endDate: "0111-11-11",
      },
    ],
    bio: "I enjoy programming and historic facts and the ancient Roman empire's glory tale.",
    certificates: [
      {
        name: "AWS Certified Developer",
        link: "https://example.com/aws-certification",
      },
      {
        name: "5212-2",
        link: "http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952248/talent-pdf/pwvosu6frti8umlbxhjw.pdf",
      },
      {
        name: "5212-2",
        link: "http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952386/talent-pdf/fsyb26a770rwuqqpcxm6.pdf",
      },
    ],
    education: [
      {
        schoolName: "Udemy University",
        certificateType: "dsklmmdskkmlsd",
        graduationDate: "2222-12-22",
      },
    ],
    diversity: [
      {
        gender: "male",
        pronoun: "him",
        ethnicity: "Ibo",
      },
    ],
    language: [
      {
        language: "English",
        proficiency: "10",
        nationality: "",
      },
      {
        language: "Igbo",
        proficiency: "10",
        nationality: "",
      },
    ],
    createdAt: "2023-11-01T05:49:09.883Z",
    updatedAt: "2023-11-02T19:17:17.726Z",
    __v: 0,
  },
];

const getBestCandidate = (job: TJob, candidates: Array<TCandidate>) => {
  //1. get best candidate if the job title has any form of relevance to their past experience, core skills, certificate or bio

  //2. get the candidate with the highest certification

  const jobTitle = job.title;

  const talentedCandidates = candidates.filter((candidate) =>
    candidate.user_id.role.includes("TALENT"),
  );

  let matches = false;
  const bestCandidate = talentedCandidates
    .filter((candidate) => {
      const candidateSkills = candidate.skills.map((skill) =>
        skill.skill.toLowerCase(),
      );

      const candidatesPastExperiences = candidate.pastExperiences.map(
        (experience) => experience.position,
      );

      if (matchesSkills(candidateSkills, jobTitle)) {
        matches = true;
      }

      if (matchesSkills(candidatesPastExperiences, jobTitle)) {
        matches = true;
      }

      return matches;
    })
    .slice(0, 2);

  return bestCandidate;
};

// console.log(getBestCandidate(job, candidates));

function matchesSkills(skills: string[], text: string) {
  const lowercaseText = text.toLowerCase();

  for (const skill of skills) {
    const firstWord = skill.split(" ")[0];
    const secondWord = skill.split(" ")[1];
    if (lowercaseText.includes(firstWord.toLowerCase())) {
      return true;
    }
  }

  return false;
}

const getBestCandidate2 = (job: TJob, candidates: TCandidate[]) => {
  // Define weights for different criteria
  const weights = {
    skillMatchWeight: 3,
    certificateMatchWeight: 2,
    experienceMatchWeight: 1,
    bioMatchWeight: 1,
  };

  const jobTitle = job.title.toLowerCase();

  // Filter candidates with the "TALENT" role
  const talentedCandidates = candidates.filter((candidate) =>
    candidate.user_id.role.includes("TALENT"),
  );

  // Calculate a score for each candidate
  const rankedCandidates = talentedCandidates.map((candidate) => {
    const { skills, certificates, pastExperiences, bio } = candidate;

    let score = 0;

    // Check for skill matches
    for (const skill of skills) {
      if (matchesSkills([skill.skill], jobTitle)) {
        score += weights.skillMatchWeight;
      }
    }

    // Check for certificate matches
    for (const certificate of certificates) {
      if (matchesSkills([certificate.name], jobTitle)) {
        score += weights.certificateMatchWeight;
      }
    }

    // Check for past experience matches
    for (const experience of pastExperiences) {
      if (matchesSkills([experience.position], jobTitle)) {
        score += weights.experienceMatchWeight;
      }
    }

    // Check for bio matches
    if (matchesSkills([bio], jobTitle)) {
      score += weights.bioMatchWeight;
    }

    return { candidate, score };
  });

  // Sort candidates by score in descending order
  rankedCandidates.sort((a, b) => b.score - a.score);

  // Return the sorted list of candidates
  return rankedCandidates.map((rankedCandidate) => rankedCandidate.candidate);
};

// console.log("2", getBestCandidate2(job, candidates));

const results: Array<{ name: string; email: string }> = [];

const addDataToArray = (itemToAdd: { name: string; email: string }) => {
  results.push(itemToAdd);

  return results;
};

// addDataToArray({ name: "Ben", email: "amaben@gmail.com" });
// addDataToArray({ name: "Ben2", email: "amaben2@gmail.com" });
// addDataToArray({ name: "Ben3", email: "amaben3@gmail.com" });

// const response = results;

// delete 2 items at same time
// {
//   skills: [skillsProfile],
//   certificates: [certificatesProfile],
// }
//  const deleteCard = (index) => {
//   setCardArray((prevCardArray) => {
//     const updatedCardArray = { ...prevCardArray };

//     if (updatedCardArray.certificates && updatedCardArray.skills) {
//         if (updatedCardArray.certificates[index]) {
//             updatedCardArray.certificates = updatedCardArray.certificates.filter(
//                 (_, i) => i !== index,
//             );
//         }
//         if (updatedCardArray.skills[index]) {
//             updatedCardArray.skills = updatedCardArray.skills.filter((_, i) => i !== index);
//         }
//     }

//     return updatedCardArray;
// });
// };


[
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '650a9f6adc3af123b5b1d2e9',
    user_id: {
      _id: '650a8863d7074dac7faa62fe',
      email: 'soesitsocials8@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'Software Development',
        yearsOfExperience: 7
      },
      { skill: 'Project Management', yearsOfExperience: 4 },
      { skill: 'Data Analysis', yearsOfExperience: 2 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-09-20T07:29:47.007Z',
    updatedAt: '2023-09-20T07:29:47.007Z',
    __v: 0
  },
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '651cd2a52edf8e12d6ad2487',
    user_id: {
      _id: '651bed380c3587d977d304e6',
      email: 'company@gmail.com',
      role: 'COMPANY',
      companyName: 'Bamble',
      companyInfo: 'The best talent market place in the world',
      companyLogo: 
        'https://media.licdn.com/dms/image/C4E0BAQHomU3GepbczQ/company-logo_200_200/0/1649325931269?e=2147483647&v=beta&t=Q_aV0MgkABgZVo6-0CVz8HI-3y7-IZeJDOklpixsOyk'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer 1',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-10-04T02:49:09.023Z',
    updatedAt: '2023-10-12T20:49:00.612Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '653eb769857c8da3cd6e03c0',
    user_id: {
      _id: '651bed740c3587d977d304ea',
      email: 'talent@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    diversity: [ { sex: 'female' } ],
    language: [ 'English', 'French', 'Portuguese' ],
    createdAt: '2023-10-29T19:50:01.201Z',
    updatedAt: '2023-10-29T20:25:54.727Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '6541e6d5ccf57716cd61a2f1',
    user_id: {
      _id: '650d4a6958f7b9003850288a',
      email: 'adebisi@mailinator.com',
      country: 'Bouvet Island',
      firstName: 'adebisi ',
      lastName: 'bola',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 2
      },
      { skill: 'programming', yearsOfExperience: 9 },
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'senior manager',
        company: 'bamble',
        startDate: '2222-12-22',
        endDate: '2222-02-22'
      },
      {
        position: 'Senior Frontend developer',
        company: 'Universe',
        startDate: '1111-11-11',
        endDate: '0111-11-11'
      }
    ],
    bio: 
      'I enjoy programming and historic facts and the ancient Roman empire\'s glory tale.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: '5212-2',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952248/talent-pdf/pwvosu6frti8umlbxhjw.pdf'
      },
      { name: null, link: '' }
    ],
    education: [
      {
        schoolName: 'Udemy University',
        certificateType: 'dsklmmdskkmlsd',
        graduationDate: '2222-12-22'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Ibo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      { language: 'Igbo', proficiency: '10', nationality: '' }
    ],
    createdAt: '2023-11-01T05:49:09.883Z',
    updatedAt: '2023-11-07T15:59:25.721Z',
    __v: 0
  },
  {
    _id: '65486e5a579e0d73fdbe07bf',
    user_id: {
      _id: '6547e9259c196ffd5c5fbde7',
      email: 'test2@gmail.com',
      country: 'Nigeria',
      firstName: 'ben',
      lastName: 'uzochukwu',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'Frontend developer',
        company: 'XYZ',
        startDate: '2021-12-02',
        endDate: '2022-12-02'
      }
    ],
    bio: 'I enjoy programming under the best conditions',
    certificates: [
      {
        name: 'The_React_Conditionals_Cheatsheet',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1699245575/talent-pdf/pa9vtmu1azrnlmnyukdq.pdf'
      }
    ],
    education: [
      {
        schoolName: 'xyz',
        certificateType: 'xyz',
        graduationDate: '1111-10-11'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Igbo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      {
        language: 'Hausa',
        proficiency: '2',
        nationality: 'Nigeria'
      },
      {
        language: 'Igbo',
        proficiency: '8',
        nationality: 'Nigeria'
      },
      {
        language: 'French',
        proficiency: '4',
        nationality: 'Nigeria'
      }
    ],
    nationality: [],
    createdAt: '2023-11-06T04:40:58.639Z',
    updatedAt: '2023-11-06T07:03:02.614Z',
    __v: 0
  }
]
}
20:40:52.183 | +2 min | next.js browser	  
{
data: [
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '650a9f6adc3af123b5b1d2e9',
    user_id: {
      _id: '650a8863d7074dac7faa62fe',
      email: 'soesitsocials8@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'Software Development',
        yearsOfExperience: 7
      },
      { skill: 'Project Management', yearsOfExperience: 4 },
      { skill: 'Data Analysis', yearsOfExperience: 2 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-09-20T07:29:47.007Z',
    updatedAt: '2023-09-20T07:29:47.007Z',
    __v: 0
  },
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '651cd2a52edf8e12d6ad2487',
    user_id: {
      _id: '651bed380c3587d977d304e6',
      email: 'company@gmail.com',
      role: 'COMPANY',
      companyName: 'Bamble',
      companyInfo: 'The best talent market place in the world',
      companyLogo: 
        'https://media.licdn.com/dms/image/C4E0BAQHomU3GepbczQ/company-logo_200_200/0/1649325931269?e=2147483647&v=beta&t=Q_aV0MgkABgZVo6-0CVz8HI-3y7-IZeJDOklpixsOyk'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer 1',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-10-04T02:49:09.023Z',
    updatedAt: '2023-10-12T20:49:00.612Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '653eb769857c8da3cd6e03c0',
    user_id: {
      _id: '651bed740c3587d977d304ea',
      email: 'talent@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    diversity: [ { sex: 'female' } ],
    language: [ 'English', 'French', 'Portuguese' ],
    createdAt: '2023-10-29T19:50:01.201Z',
    updatedAt: '2023-10-29T20:25:54.727Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '6541e6d5ccf57716cd61a2f1',
    user_id: {
      _id: '650d4a6958f7b9003850288a',
      email: 'adebisi@mailinator.com',
      country: 'Bouvet Island',
      firstName: 'adebisi ',
      lastName: 'bola',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 2
      },
      { skill: 'programming', yearsOfExperience: 9 },
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'senior manager',
        company: 'bamble',
        startDate: '2222-12-22',
        endDate: '2222-02-22'
      },
      {
        position: 'Senior Frontend developer',
        company: 'Universe',
        startDate: '1111-11-11',
        endDate: '0111-11-11'
      }
    ],
    bio: 
      'I enjoy programming and historic facts and the ancient Roman empire\'s glory tale.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: '5212-2',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952248/talent-pdf/pwvosu6frti8umlbxhjw.pdf'
      },
      { name: null, link: '' }
    ],
    education: [
      {
        schoolName: 'Udemy University',
        certificateType: 'dsklmmdskkmlsd',
        graduationDate: '2222-12-22'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Ibo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      { language: 'Igbo', proficiency: '10', nationality: '' }
    ],
    createdAt: '2023-11-01T05:49:09.883Z',
    updatedAt: '2023-11-07T15:59:25.721Z',
    __v: 0
  },
  {
    _id: '65486e5a579e0d73fdbe07bf',
    user_id: {
      _id: '6547e9259c196ffd5c5fbde7',
      email: 'test2@gmail.com',
      country: 'Nigeria',
      firstName: 'ben',
      lastName: 'uzochukwu',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'Frontend developer',
        company: 'XYZ',
        startDate: '2021-12-02',
        endDate: '2022-12-02'
      }
    ],
    bio: 'I enjoy programming under the best conditions',
    certificates: [
      {
        name: 'The_React_Conditionals_Cheatsheet',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1699245575/talent-pdf/pa9vtmu1azrnlmnyukdq.pdf'
      }
    ],
    education: [
      {
        schoolName: 'xyz',
        certificateType: 'xyz',
        graduationDate: '1111-10-11'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Igbo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      {
        language: 'Hausa',
        proficiency: '2',
        nationality: 'Nigeria'
      },
      {
        language: 'Igbo',
        proficiency: '8',
        nationality: 'Nigeria'
      },
      {
        language: 'French',
        proficiency: '4',
        nationality: 'Nigeria'
      }
    ],
    nationality: [],
    createdAt: '2023-11-06T04:40:58.639Z',
    updatedAt: '2023-11-06T07:03:02.614Z',
    __v: 0
  }
]
}
20:40:51.419 | +2 min | next.js browser	  
{
data: [
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '650a9f6adc3af123b5b1d2e9',
    user_id: {
      _id: '650a8863d7074dac7faa62fe',
      email: 'soesitsocials8@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'Software Development',
        yearsOfExperience: 7
      },
      { skill: 'Project Management', yearsOfExperience: 4 },
      { skill: 'Data Analysis', yearsOfExperience: 2 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-09-20T07:29:47.007Z',
    updatedAt: '2023-09-20T07:29:47.007Z',
    __v: 0
  },
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '651cd2a52edf8e12d6ad2487',
    user_id: {
      _id: '651bed380c3587d977d304e6',
      email: 'company@gmail.com',
      role: 'COMPANY',
      companyName: 'Bamble',
      companyInfo: 'The best talent market place in the world',
      companyLogo: 
        'https://media.licdn.com/dms/image/C4E0BAQHomU3GepbczQ/company-logo_200_200/0/1649325931269?e=2147483647&v=beta&t=Q_aV0MgkABgZVo6-0CVz8HI-3y7-IZeJDOklpixsOyk'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer 1',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-10-04T02:49:09.023Z',
    updatedAt: '2023-10-12T20:49:00.612Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '653eb769857c8da3cd6e03c0',
    user_id: {
      _id: '651bed740c3587d977d304ea',
      email: 'talent@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    diversity: [ { sex: 'female' } ],
    language: [ 'English', 'French', 'Portuguese' ],
    createdAt: '2023-10-29T19:50:01.201Z',
    updatedAt: '2023-10-29T20:25:54.727Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '6541e6d5ccf57716cd61a2f1',
    user_id: {
      _id: '650d4a6958f7b9003850288a',
      email: 'adebisi@mailinator.com',
      country: 'Bouvet Island',
      firstName: 'adebisi ',
      lastName: 'bola',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 2
      },
      { skill: 'programming', yearsOfExperience: 9 },
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'senior manager',
        company: 'bamble',
        startDate: '2222-12-22',
        endDate: '2222-02-22'
      },
      {
        position: 'Senior Frontend developer',
        company: 'Universe',
        startDate: '1111-11-11',
        endDate: '0111-11-11'
      }
    ],
    bio: 
      'I enjoy programming and historic facts and the ancient Roman empire\'s glory tale.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: '5212-2',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952248/talent-pdf/pwvosu6frti8umlbxhjw.pdf'
      },
      { name: null, link: '' }
    ],
    education: [
      {
        schoolName: 'Udemy University',
        certificateType: 'dsklmmdskkmlsd',
        graduationDate: '2222-12-22'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Ibo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      { language: 'Igbo', proficiency: '10', nationality: '' }
    ],
    createdAt: '2023-11-01T05:49:09.883Z',
    updatedAt: '2023-11-07T15:59:25.721Z',
    __v: 0
  },
  {
    _id: '65486e5a579e0d73fdbe07bf',
    user_id: {
      _id: '6547e9259c196ffd5c5fbde7',
      email: 'test2@gmail.com',
      country: 'Nigeria',
      firstName: 'ben',
      lastName: 'uzochukwu',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'Frontend developer',
        company: 'XYZ',
        startDate: '2021-12-02',
        endDate: '2022-12-02'
      }
    ],
    bio: 'I enjoy programming under the best conditions',
    certificates: [
      {
        name: 'The_React_Conditionals_Cheatsheet',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1699245575/talent-pdf/pa9vtmu1azrnlmnyukdq.pdf'
      }
    ],
    education: [
      {
        schoolName: 'xyz',
        certificateType: 'xyz',
        graduationDate: '1111-10-11'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Igbo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      {
        language: 'Hausa',
        proficiency: '2',
        nationality: 'Nigeria'
      },
      {
        language: 'Igbo',
        proficiency: '8',
        nationality: 'Nigeria'
      },
      {
        language: 'French',
        proficiency: '4',
        nationality: 'Nigeria'
      }
    ],
    nationality: [],
    createdAt: '2023-11-06T04:40:58.639Z',
    updatedAt: '2023-11-06T07:03:02.614Z',
    __v: 0
  }
]
}
20:40:18.168 | +2 min | next.js browser	  
{
data: [
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '650a9f6adc3af123b5b1d2e9',
    user_id: {
      _id: '650a8863d7074dac7faa62fe',
      email: 'soesitsocials8@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'Software Development',
        yearsOfExperience: 7
      },
      { skill: 'Project Management', yearsOfExperience: 4 },
      { skill: 'Data Analysis', yearsOfExperience: 2 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-09-20T07:29:47.007Z',
    updatedAt: '2023-09-20T07:29:47.007Z',
    __v: 0
  },
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '651cd2a52edf8e12d6ad2487',
    user_id: {
      _id: '651bed380c3587d977d304e6',
      email: 'company@gmail.com',
      role: 'COMPANY',
      companyName: 'Bamble',
      companyInfo: 'The best talent market place in the world',
      companyLogo: 
        'https://media.licdn.com/dms/image/C4E0BAQHomU3GepbczQ/company-logo_200_200/0/1649325931269?e=2147483647&v=beta&t=Q_aV0MgkABgZVo6-0CVz8HI-3y7-IZeJDOklpixsOyk'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer 1',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-10-04T02:49:09.023Z',
    updatedAt: '2023-10-12T20:49:00.612Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '653eb769857c8da3cd6e03c0',
    user_id: {
      _id: '651bed740c3587d977d304ea',
      email: 'talent@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    diversity: [ { sex: 'female' } ],
    language: [ 'English', 'French', 'Portuguese' ],
    createdAt: '2023-10-29T19:50:01.201Z',
    updatedAt: '2023-10-29T20:25:54.727Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '6541e6d5ccf57716cd61a2f1',
    user_id: {
      _id: '650d4a6958f7b9003850288a',
      email: 'adebisi@mailinator.com',
      country: 'Bouvet Island',
      firstName: 'adebisi ',
      lastName: 'bola',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 2
      },
      { skill: 'programming', yearsOfExperience: 9 },
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'senior manager',
        company: 'bamble',
        startDate: '2222-12-22',
        endDate: '2222-02-22'
      },
      {
        position: 'Senior Frontend developer',
        company: 'Universe',
        startDate: '1111-11-11',
        endDate: '0111-11-11'
      }
    ],
    bio: 
      'I enjoy programming and historic facts and the ancient Roman empire\'s glory tale.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: '5212-2',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952248/talent-pdf/pwvosu6frti8umlbxhjw.pdf'
      },
      { name: null, link: '' }
    ],
    education: [
      {
        schoolName: 'Udemy University',
        certificateType: 'dsklmmdskkmlsd',
        graduationDate: '2222-12-22'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Ibo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      { language: 'Igbo', proficiency: '10', nationality: '' }
    ],
    createdAt: '2023-11-01T05:49:09.883Z',
    updatedAt: '2023-11-07T15:59:25.721Z',
    __v: 0
  },
  {
    _id: '65486e5a579e0d73fdbe07bf',
    user_id: {
      _id: '6547e9259c196ffd5c5fbde7',
      email: 'test2@gmail.com',
      country: 'Nigeria',
      firstName: 'ben',
      lastName: 'uzochukwu',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'Frontend developer',
        company: 'XYZ',
        startDate: '2021-12-02',
        endDate: '2022-12-02'
      }
    ],
    bio: 'I enjoy programming under the best conditions',
    certificates: [
      {
        name: 'The_React_Conditionals_Cheatsheet',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1699245575/talent-pdf/pa9vtmu1azrnlmnyukdq.pdf'
      }
    ],
    education: [
      {
        schoolName: 'xyz',
        certificateType: 'xyz',
        graduationDate: '1111-10-11'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Igbo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      {
        language: 'Hausa',
        proficiency: '2',
        nationality: 'Nigeria'
      },
      {
        language: 'Igbo',
        proficiency: '8',
        nationality: 'Nigeria'
      },
      {
        language: 'French',
        proficiency: '4',
        nationality: 'Nigeria'
      }
    ],
    nationality: [],
    createdAt: '2023-11-06T04:40:58.639Z',
    updatedAt: '2023-11-06T07:03:02.614Z',
    __v: 0
  }
]
}
20:37:54.392 | +5 min | next.js browser	  
{
data: [
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '650a9f6adc3af123b5b1d2e9',
    user_id: {
      _id: '650a8863d7074dac7faa62fe',
      email: 'soesitsocials8@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'Software Development',
        yearsOfExperience: 7
      },
      { skill: 'Project Management', yearsOfExperience: 4 },
      { skill: 'Data Analysis', yearsOfExperience: 2 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-09-20T07:29:47.007Z',
    updatedAt: '2023-09-20T07:29:47.007Z',
    __v: 0
  },
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '651cd2a52edf8e12d6ad2487',
    user_id: {
      _id: '651bed380c3587d977d304e6',
      email: 'company@gmail.com',
      role: 'COMPANY',
      companyName: 'Bamble',
      companyInfo: 'The best talent market place in the world',
      companyLogo: 
        'https://media.licdn.com/dms/image/C4E0BAQHomU3GepbczQ/company-logo_200_200/0/1649325931269?e=2147483647&v=beta&t=Q_aV0MgkABgZVo6-0CVz8HI-3y7-IZeJDOklpixsOyk'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer 1',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-10-04T02:49:09.023Z',
    updatedAt: '2023-10-12T20:49:00.612Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '653eb769857c8da3cd6e03c0',
    user_id: {
      _id: '651bed740c3587d977d304ea',
      email: 'talent@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    diversity: [ { sex: 'female' } ],
    language: [ 'English', 'French', 'Portuguese' ],
    createdAt: '2023-10-29T19:50:01.201Z',
    updatedAt: '2023-10-29T20:25:54.727Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '6541e6d5ccf57716cd61a2f1',
    user_id: {
      _id: '650d4a6958f7b9003850288a',
      email: 'adebisi@mailinator.com',
      country: 'Bouvet Island',
      firstName: 'adebisi ',
      lastName: 'bola',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 2
      },
      { skill: 'programming', yearsOfExperience: 9 },
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'senior manager',
        company: 'bamble',
        startDate: '2222-12-22',
        endDate: '2222-02-22'
      },
      {
        position: 'Senior Frontend developer',
        company: 'Universe',
        startDate: '1111-11-11',
        endDate: '0111-11-11'
      }
    ],
    bio: 
      'I enjoy programming and historic facts and the ancient Roman empire\'s glory tale.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: '5212-2',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952248/talent-pdf/pwvosu6frti8umlbxhjw.pdf'
      },
      { name: null, link: '' }
    ],
    education: [
      {
        schoolName: 'Udemy University',
        certificateType: 'dsklmmdskkmlsd',
        graduationDate: '2222-12-22'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Ibo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      { language: 'Igbo', proficiency: '10', nationality: '' }
    ],
    createdAt: '2023-11-01T05:49:09.883Z',
    updatedAt: '2023-11-07T15:59:25.721Z',
    __v: 0
  },
  {
    _id: '65486e5a579e0d73fdbe07bf',
    user_id: {
      _id: '6547e9259c196ffd5c5fbde7',
      email: 'test2@gmail.com',
      country: 'Nigeria',
      firstName: 'ben',
      lastName: 'uzochukwu',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'Frontend developer',
        company: 'XYZ',
        startDate: '2021-12-02',
        endDate: '2022-12-02'
      }
    ],
    bio: 'I enjoy programming under the best conditions',
    certificates: [
      {
        name: 'The_React_Conditionals_Cheatsheet',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1699245575/talent-pdf/pa9vtmu1azrnlmnyukdq.pdf'
      }
    ],
    education: [
      {
        schoolName: 'xyz',
        certificateType: 'xyz',
        graduationDate: '1111-10-11'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Igbo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      {
        language: 'Hausa',
        proficiency: '2',
        nationality: 'Nigeria'
      },
      {
        language: 'Igbo',
        proficiency: '8',
        nationality: 'Nigeria'
      },
      {
        language: 'French',
        proficiency: '4',
        nationality: 'Nigeria'
      }
    ],
    nationality: [],
    createdAt: '2023-11-06T04:40:58.639Z',
    updatedAt: '2023-11-06T07:03:02.614Z',
    __v: 0
  }
]
}
20:37:52.822 | +5 min | next.js browser	  
{
data: [
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '650a9f6adc3af123b5b1d2e9',
    user_id: {
      _id: '650a8863d7074dac7faa62fe',
      email: 'soesitsocials8@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'Software Development',
        yearsOfExperience: 7
      },
      { skill: 'Project Management', yearsOfExperience: 4 },
      { skill: 'Data Analysis', yearsOfExperience: 2 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-09-20T07:29:47.007Z',
    updatedAt: '2023-09-20T07:29:47.007Z',
    __v: 0
  },
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '651cd2a52edf8e12d6ad2487',
    user_id: {
      _id: '651bed380c3587d977d304e6',
      email: 'company@gmail.com',
      role: 'COMPANY',
      companyName: 'Bamble',
      companyInfo: 'The best talent market place in the world',
      companyLogo: 
        'https://media.licdn.com/dms/image/C4E0BAQHomU3GepbczQ/company-logo_200_200/0/1649325931269?e=2147483647&v=beta&t=Q_aV0MgkABgZVo6-0CVz8HI-3y7-IZeJDOklpixsOyk'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer 1',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-10-04T02:49:09.023Z',
    updatedAt: '2023-10-12T20:49:00.612Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '653eb769857c8da3cd6e03c0',
    user_id: {
      _id: '651bed740c3587d977d304ea',
      email: 'talent@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    diversity: [ { sex: 'female' } ],
    language: [ 'English', 'French', 'Portuguese' ],
    createdAt: '2023-10-29T19:50:01.201Z',
    updatedAt: '2023-10-29T20:25:54.727Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '6541e6d5ccf57716cd61a2f1',
    user_id: {
      _id: '650d4a6958f7b9003850288a',
      email: 'adebisi@mailinator.com',
      country: 'Bouvet Island',
      firstName: 'adebisi ',
      lastName: 'bola',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 2
      },
      { skill: 'programming', yearsOfExperience: 9 },
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'senior manager',
        company: 'bamble',
        startDate: '2222-12-22',
        endDate: '2222-02-22'
      },
      {
        position: 'Senior Frontend developer',
        company: 'Universe',
        startDate: '1111-11-11',
        endDate: '0111-11-11'
      }
    ],
    bio: 
      'I enjoy programming and historic facts and the ancient Roman empire\'s glory tale.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: '5212-2',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952248/talent-pdf/pwvosu6frti8umlbxhjw.pdf'
      },
      { name: null, link: '' }
    ],
    education: [
      {
        schoolName: 'Udemy University',
        certificateType: 'dsklmmdskkmlsd',
        graduationDate: '2222-12-22'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Ibo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      { language: 'Igbo', proficiency: '10', nationality: '' }
    ],
    createdAt: '2023-11-01T05:49:09.883Z',
    updatedAt: '2023-11-07T15:59:25.721Z',
    __v: 0
  },
  {
    _id: '65486e5a579e0d73fdbe07bf',
    user_id: {
      _id: '6547e9259c196ffd5c5fbde7',
      email: 'test2@gmail.com',
      country: 'Nigeria',
      firstName: 'ben',
      lastName: 'uzochukwu',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'Frontend developer',
        company: 'XYZ',
        startDate: '2021-12-02',
        endDate: '2022-12-02'
      }
    ],
    bio: 'I enjoy programming under the best conditions',
    certificates: [
      {
        name: 'The_React_Conditionals_Cheatsheet',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1699245575/talent-pdf/pa9vtmu1azrnlmnyukdq.pdf'
      }
    ],
    education: [
      {
        schoolName: 'xyz',
        certificateType: 'xyz',
        graduationDate: '1111-10-11'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Igbo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      {
        language: 'Hausa',
        proficiency: '2',
        nationality: 'Nigeria'
      },
      {
        language: 'Igbo',
        proficiency: '8',
        nationality: 'Nigeria'
      },
      {
        language: 'French',
        proficiency: '4',
        nationality: 'Nigeria'
      }
    ],
    nationality: [],
    createdAt: '2023-11-06T04:40:58.639Z',
    updatedAt: '2023-11-06T07:03:02.614Z',
    __v: 0
  }
]
}
20:37:40.392 | +5 min | next.js browser	  
{
data: [
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '650a9f6adc3af123b5b1d2e9',
    user_id: {
      _id: '650a8863d7074dac7faa62fe',
      email: 'soesitsocials8@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'Software Development',
        yearsOfExperience: 7
      },
      { skill: 'Project Management', yearsOfExperience: 4 },
      { skill: 'Data Analysis', yearsOfExperience: 2 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-09-20T07:29:47.007Z',
    updatedAt: '2023-09-20T07:29:47.007Z',
    __v: 0
  },
  {
    diversity: [],
    language: [],
    nationality: [],
    _id: '651cd2a52edf8e12d6ad2487',
    user_id: {
      _id: '651bed380c3587d977d304e6',
      email: 'company@gmail.com',
      role: 'COMPANY',
      companyName: 'Bamble',
      companyInfo: 'The best talent market place in the world',
      companyLogo: 
        'https://media.licdn.com/dms/image/C4E0BAQHomU3GepbczQ/company-logo_200_200/0/1649325931269?e=2147483647&v=beta&t=Q_aV0MgkABgZVo6-0CVz8HI-3y7-IZeJDOklpixsOyk'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer 1',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    createdAt: '2023-10-04T02:49:09.023Z',
    updatedAt: '2023-10-12T20:49:00.612Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '653eb769857c8da3cd6e03c0',
    user_id: {
      _id: '651bed740c3587d977d304ea',
      email: 'talent@gmail.com',
      country: 'NG',
      firstName: 'prince',
      lastName: 'chisomaga',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 7
      },
      { skill: 'project management', yearsOfExperience: 4 },
      { skill: 'data analysis', yearsOfExperience: 10 }
    ],
    pastExperiences: [
      {
        company: 'Company XYZ',
        position: 'Senior Software Engineer',
        startDate: '2016-01-01',
        endDate: '2022-12-31'
      },
      {
        company: 'Company DEF',
        position: 'Project Manager',
        startDate: '2018-06-01',
        endDate: '2020-12-31'
      }
    ],
    bio: 
      'Experienced professional with a strong background in software development, project management, and data analysis.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: 'Scrum Master Certified',
        link: 'https://example.com/scrum-master-certification',
        image: 
          'https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk='
      },
      {
        name: 'Google Cloud Certified',
        link: 'https://example.com/google-cloud-certification'
      }
    ],
    education: [
      {
        schoolName: 'University of ABC',
        certificateType: 'Bachelor\'s Degree in Computer Science',
        graduationDate: '2014-05-31'
      },
      {
        schoolName: 'Online Course XYZ',
        certificateType: 'Advanced Web Development',
        graduationDate: '2016-09-30'
      },
      {
        schoolName: 'Data Science Academy',
        certificateType: 'Data Analysis',
        graduationDate: '2018-12-31'
      }
    ],
    diversity: [ { sex: 'female' } ],
    language: [ 'English', 'French', 'Portuguese' ],
    createdAt: '2023-10-29T19:50:01.201Z',
    updatedAt: '2023-10-29T20:25:54.727Z',
    __v: 0
  },
  {
    nationality: [],
    _id: '6541e6d5ccf57716cd61a2f1',
    user_id: {
      _id: '650d4a6958f7b9003850288a',
      email: 'adebisi@mailinator.com',
      country: 'Bouvet Island',
      firstName: 'adebisi ',
      lastName: 'bola',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'software development',
        yearsOfExperience: 2
      },
      { skill: 'programming', yearsOfExperience: 9 },
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'senior manager',
        company: 'bamble',
        startDate: '2222-12-22',
        endDate: '2222-02-22'
      },
      {
        position: 'Senior Frontend developer',
        company: 'Universe',
        startDate: '1111-11-11',
        endDate: '0111-11-11'
      }
    ],
    bio: 
      'I enjoy programming and historic facts and the ancient Roman empire\'s glory tale.',
    certificates: [
      {
        name: 'AWS Certified Developer',
        link: 'https://example.com/aws-certification'
      },
      {
        name: '5212-2',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1698952248/talent-pdf/pwvosu6frti8umlbxhjw.pdf'
      },
      { name: null, link: '' }
    ],
    education: [
      {
        schoolName: 'Udemy University',
        certificateType: 'dsklmmdskkmlsd',
        graduationDate: '2222-12-22'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Ibo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      { language: 'Igbo', proficiency: '10', nationality: '' }
    ],
    createdAt: '2023-11-01T05:49:09.883Z',
    updatedAt: '2023-11-07T15:59:25.721Z',
    __v: 0
  },
  {
    _id: '65486e5a579e0d73fdbe07bf',
    user_id: {
      _id: '6547e9259c196ffd5c5fbde7',
      email: 'test2@gmail.com',
      country: 'Nigeria',
      firstName: 'ben',
      lastName: 'uzochukwu',
      role: 'TALENT'
    },
    skills: [
      {
        skill: 'frontend development',
        yearsOfExperience: 6
      }
    ],
    pastExperiences: [
      {
        position: 'Frontend developer',
        company: 'XYZ',
        startDate: '2021-12-02',
        endDate: '2022-12-02'
      }
    ],
    bio: 'I enjoy programming under the best conditions',
    certificates: [
      {
        name: 'The_React_Conditionals_Cheatsheet',
        link: 
          'http://res.cloudinary.com/dotcu0ow9/image/upload/v1699245575/talent-pdf/pa9vtmu1azrnlmnyukdq.pdf'
      }
    ],
    education: [
      {
        schoolName: 'xyz',
        certificateType: 'xyz',
        graduationDate: '1111-10-11'
      }
    ],
    diversity: [ { gender: 'male', pronoun: 'him', ethnicity: 'Igbo' } ],
    language: [
      { language: 'English', proficiency: '10', nationality: '' },
      {
        language: 'Hausa',
        proficiency: '2',
        nationality: 'Nigeria'
      },
      {
        language: 'Igbo',
        proficiency: '8',
        nationality: 'Nigeria'
      },
      {
        language: 'French',
        proficiency: '4',
        nationality: 'Nigeria'
      }
    ],
    nationality: [],
    createdAt: '2023-11-06T04:40:58.639Z',
    updatedAt: '2023-11-06T07:03:02.614Z',
    __v: 0
  }
]
} 
