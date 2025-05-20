import { Animal } from "./Animals";

export abstract class Employee {
  protected isEmployeeAtZoo!: boolean;
  safetyTrainingCompletionDate!: Date;

  enterZoo(): void {
    if ((this.isEmployeeAtZoo = true)) {
      console.log("Employee is at zoo");
    }
  }
  abstract leaveZoo(): void;
  takeSafetyTrainings(date: Date): void {
    this.safetyTrainingCompletionDate = date;
  }
}

export class Zookeper extends Employee {
  public name: string;
  fedAnimals: { animal: string; time: Date }[] = [];

  constructor(name: string) {
    super();
    this.name = name;
  }

  leaveZoo(): void {
    console.log(`${this.name} left the zoo.`);
  }

  feedAnimal(animalName: string): void {
    const now = new Date();
    this.fedAnimals.push({ animal: animalName, time: now });
    console.log(`Fed ${animalName} at ${now.toLocaleTimeString()}`);
  }

  getFeedingLog(): void {
    if (this.fedAnimals.length === 0) {
      console.log("No animals have been fed yet.");
      return;
    }
    this.fedAnimals.forEach((log) =>
      console.log(`${log.animal} was fed at ${log.time.toLocaleTimeString()}`)
    );
  }
}

export class Employees {
  static employee: any;
  static addEmployee(_emp: Zookeper) {
    throw new Error("Method not implemented.");
  }
  employee: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employee.push(employee);
  }
}

export class Animals {
  static animal: any;
  static addAnimal(_newAnimal: Animal) {
    throw new Error("Method not implemented.");
  }
  animal: Animal[] = [];

  addAnimal(animal: Animal): void {
    this.animal.push(animal);
  }
}