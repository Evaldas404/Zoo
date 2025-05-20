import type { AnimalType, ZebraType, ElephantType, TigerType } from "./types";

export class Animal {
  name: AnimalType["name"];
  age: AnimalType["age"];

  constructor({ name, age }: AnimalType) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log(`${this.name} sounds`);
  }
}

export class FirstGroup extends Animal {
  sleep(): void {}
  walk(): void {}
}
export class SecondGroup extends Animal {
  jump(): void {}
  run(): void {}
}
export class ThirdGroup extends Animal {
  swim(): void {}
  hunt(): void {}
}



export class Zebra extends SecondGroup {
  maxSpeed: ZebraType["maxSpeed"];
  origin: ZebraType["origin"];

  constructor({ name, age, maxSpeed, origin }: ZebraType) {
    super({ name, age });
    this.maxSpeed = maxSpeed;
    this.origin = origin;
  }
  jump() {
    console.log(`${this.name} jumps over a hole`);
  }
  run() {
    console.log(`${this.name} runs away`);
  }
}

export class Elephant extends FirstGroup {
  weight: ElephantType["weight"];

  constructor({ name, age, weight }: ElephantType) {
    super({ name, age });
    this.weight = weight;
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
  walk() {
    console.log(`${this.name} walks away`);
  }
}

export class Tiger extends ThirdGroup {
  wasOutsideInThePast8h: TigerType["wasOutsideInThePast8h"];

  constructor({ name, age, wasOutsideInThePast8h }: TigerType) {
    super({ name, age });
    this.wasOutsideInThePast8h = wasOutsideInThePast8h;
  }

  status(): void {
    const tigerStatus = this.wasOutsideInThePast8h ? "was out" : "wasnt out";
    console.log(`${this.name} ${tigerStatus} from the cage in the past 8h`);
  }

  swim() {
    console.log(`${this.name} is swiming`);
  }
  hunt() {
    console.log(`${this.name} is hunting`);
  }
}