const usersInDB = [
  {
    skills: [
      {
        skill: "Software Development",
        yearsOfExperience: 7,
      },
      { skill: "project Management", yearsOfExperience: 4 },
      { skill: "Data Analysis", yearsOfExperience: 2 },
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
        position: "p Manager",
        startDate: "2018-06-01",
        endDate: "2020-12-31",
      },
    ],
    bio: "Experienced professional with a strong background in software development, p management, and data analysis.",
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
  },
  {
    skills: [
      {
        skill: "Frontend Development",
        yearsOfExperience: 7,
      },
      { skill: "UI/UX", yearsOfExperience: 4 },
      { skill: "Programming", yearsOfExperience: 2 },
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
        position: "p Manager",
        startDate: "2018-06-01",
        endDate: "2020-12-31",
      },
    ],
    bio: "Frontend dev",
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
  },
];

function matchesSkillss(skills: string[], text: string) {
  if (text.length) {
    const lowercaseText = text?.toLowerCase();

    for (const skill of skills) {
      const firstWord = skill.split(" ")[0];
      const secondWord = skill.split(" ")[1];
      const isMultipleSkillsText = firstWord && secondWord;

      if (lowercaseText.includes(firstWord)) {
        return true;
      }
      if (lowercaseText.includes(secondWord)) {
        return true;
      }
    }
  }

  return false;
}

const filterUsersBySkills = (items: typeof usersInDB, searchTerm: string) => {
  let matches = false;
  const filteredCandidate = items.filter((candidate) => {
    const candidateSkills = candidate.skills.map((skill) =>
      skill.skill.toLowerCase(),
    );

    if (matchesSkillss(candidateSkills, searchTerm)) {
      matches = true;
    }

    return matches;
  });

  return filteredCandidate;
};

console.log(filterUsersBySkills(usersInDB, "frontend"));
