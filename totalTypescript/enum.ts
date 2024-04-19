// enum is used as a way of preventing variable error in TS

enum Colors {
  red = "red",
  black = "black",
}

const color = Colors.red;
console.log("color", color);

const directionEnum = Object.freeze({
  UP: "UP",
  DOWN: "DOWN",
});

console.log(directionEnum); //{ UP: 'UP', DOWN: 'DOWN' }

type TColor = "red" | "green";

const logColor = (color: string) => {
  return color;
};
console.log(logColor(Colors.black));

enum Suit {
  Hearts = "♥", // Red suit
  Diamonds = "♦", // Red suit
  Clubs = "♣", // Black suit
  Spades = "♠", // Black suit
}

enum Rank {
  Ace = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

function getCardValue(rank: Rank): number {
  if (rank <= Rank.Ten) {
    return rank;
  } else {
    return 10;
  }
}

interface Card {
  suit: Suit;
  rank: Rank;
  color: string; // Derived property based on suit
}

function createCard(suit: Suit, rank: Rank): Card {
  return {
    suit,
    rank,
    color: suit === Suit.Hearts || suit === Suit.Diamonds ? "Red" : "Black",
  };
}

// Usage
let card1 = createCard(Suit.Hearts, Rank.Ace);
console.log(`The Ace of Hearts is red: ${card1.color}`); // Output: The Ace of Hearts is red: Red

let card2 = createCard(Suit.Spades, Rank.Queen);
console.log(`The Queen of Spades is black: ${card2.color}`); // Output: The Queen of Spades is black: Black

const validatePassword = (password: string) => {
  const updatedPasswordValidation = [
    { label: "One number", isValid: false },
    { label: "One uppercase letter", isValid: false },
    { label: "One lowercase letter", isValid: false },
    { label: "One symbol", isValid: false },
    { label: "One Latin letter", isValid: false },
    { label: "Use 14-50 characters", isValid: false },
  ]?.map((criteria) => {
    switch (criteria.label) {
      case "One number":
        criteria.isValid = /[0-9]/.test(password);
        break;
      case "One uppercase letter":
        criteria.isValid = /[A-Z]/.test(password);
        break;
      case "One lowercase letter":
        criteria.isValid = /[a-z]/.test(password);
        break;
      case "One symbol":
        criteria.isValid = /[!@#$%^&*]/.test(password);
        break;
      case "One Latin letter":
        criteria.isValid = /[a-zA-Z]/.test(password);
        break;
      case "Use 14-50 characters":
        criteria.isValid = password.length >= 14 && password.length <= 50;
        break;
      default:
        break;
    }
    return criteria;
  });

  console.log(updatedPasswordValidation);
};
