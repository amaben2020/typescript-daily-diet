// https://upmostly.com/typescript/mastering-the-builder-pattern-in-typescript#0

type CharType = "healer" | "attacker" | "tank";

type Weapon = {
  bestClass: CharType;
  attack: number;
};

class Character {
  type: CharType;
  weapon: Weapon;
  health = 100;
  defense = 10;
  attack = 10;
}

class CharacterBuilder {
  private char: Character;

  setType(newType: CharType) {
    this.char.type = newType;
  }

  setWeapon(weapon: Weapon) {
    this.char.weapon = weapon;
  }

  setHealth(health: number) {
    this.char.health = health;
  }

  setDefense(defense: number) {
    this.char.defense = defense;
  }

  setAttack(attack: number) {
    this.char.attack = attack;
    if (this.char.type === "healer" && attack > 20) attack = 20;
  }

  constructor() {
    this.char = new Character();
  }

  getCharacter() {
    return this.char;
  }
}
