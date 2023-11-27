const generateAvatar = (
  fullName: string,
): {
  text: string;
  background: string;
} => {
  const colors = ["#4F6BED", "#750B1C", "#0B6A0B", "#8E562E"];

  const names = fullName.toUpperCase().split(" ");

  const firstName = names[0].slice(0, 1);
  const lastName = names[1].slice(0, 1);

  const firstNameChar = firstName.charCodeAt(0);
  const lastNameChar = lastName.charCodeAt(0);

  const computeBackgroundColor =
    (Number(firstNameChar) * Number(lastNameChar)) % colors.length;

  const bg = colors[computeBackgroundColor];

  return {
    text: firstName + lastName,
    background: bg,
  };
};

console.log(generateAvatar("benneth uzor"));
