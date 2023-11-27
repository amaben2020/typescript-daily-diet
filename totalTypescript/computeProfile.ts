//@ts-nocheck

const profile = {
  _id: "65486e5a579e0d73fdbe07bf",
  user_id: "6547e9259c196ffd5c5fbde7",
  skills: [
    {
      skill: "frontend development",
      yearsOfExperience: 6,
    },
  ],
  pastExperiences: [
    {
      position: "Frontend developer",
      company: "XYZ",
      startDate: "2021-12-02",
      endDate: "2022-12-02",
    },
  ],
  bio: "I enjoy programming under the best conditions",
  certificates: [
    {
      name: "The_React_Conditionals_Cheatsheet",
      link: "http://res.cloudinary.com/dotcu0ow9/image/upload/v1699245575/talent-pdf/pa9vtmu1azrnlmnyukdq.pdf",
    },
  ],
  education: [
    {
      schoolName: "xyz",
      certificateType: "xyz",
      graduationDate: "1111-10-11",
    },
  ],
  diversity: [
    {
      gender: "male",
      pronoun: "him",
      ethnicity: "Igbo",
    },
  ],
  language: [
    {
      language: "English",
      proficiency: "10",
      nationality: "",
    },
    {
      language: "Hausa",
      proficiency: "2",
      nationality: "Nigeria",
    },
    {
      language: "Igbo",
      proficiency: "8",
      nationality: "Nigeria",
    },
    {
      language: "French",
      proficiency: "4",
      nationality: "Nigeria",
    },
  ],
  nationality: [],
  createdAt: "2023-11-06T04:40:58.639Z",
  updatedAt: "2023-11-06T07:03:02.614Z",
  __v: 0,
};

const computeProfileComplete = [profile].reduce((acc: any, cv: any) => {
  if (cv.skills.length > 0) {
    acc += 20;
  }

  if (cv.language.length > 0) {
    acc += 10;
  }
  if (cv.certificates.length > 0) {
    acc += 10;
  }

  if (cv.diversity.length > 0) {
    acc += 10;
  }

  if (cv.bio.length > 0) {
    acc += 10;
  }

  if (cv.education.length > 0) {
    acc += 20;
  }
  if (cv.pastExperiences.length > 0) {
    acc += 20;
  }

  return acc;
}, 0);

console.log(computeProfileComplete);
