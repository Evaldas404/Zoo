import { Animal } from "./Animals";
import { Logger } from "./logger";
import { Employees, Animals, Zookeper } from "./worker";

const employeesDB = new Employees();
const animalsDB = new Animals();

const empForm = document.getElementById("employeeForm") as HTMLFormElement;
const animalForm = document.getElementById("animalForm") as HTMLFormElement;
const output = document.getElementById("output") as HTMLElement;

empForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = (document.getElementById("empName") as HTMLInputElement).value;
  const emp = new Zookeper(name);
  emp.takeSafetyTrainings(new Date());
  emp.enterZoo();
  employeesDB.addEmployee(emp);
  Logger.getInstance().log(`Zookeeper ${name} created.`);
  empForm.reset();
});

animalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = (document.getElementById("animalName") as HTMLInputElement)
    .value;
  const age = parseInt(
    (document.getElementById("animalAge") as HTMLInputElement).value
  );
  const newAnimal = new Animal({ name, age });
  animalsDB.addAnimal(newAnimal);
  Logger.getInstance().log(`Animal ${name} (age ${age}) added.`);
  animalForm.reset();
});

document.getElementById("logEmployees")?.addEventListener("click", () => {
  output.textContent =
    "Employees:\n" +
    employeesDB.employee
      .map((e) => {
        const z = e as Zookeper;
        return `- ${
          z.name
        }, Trained: ${z.safetyTrainingCompletionDate.toLocaleDateString()}`;
      })
      .join("\n");
});

document.getElementById("logAnimals")?.addEventListener("click", () => {
  output.textContent =
    "Animals:\n" +
    animalsDB.animal
      .map((a: Animal) => `- ${a.name}, Age: ${a.age}`)
      .join("\n");
});
