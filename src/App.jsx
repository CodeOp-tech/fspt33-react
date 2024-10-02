import { v4 as uuidv4 } from "uuid";
import { Animals } from "./components/Animals";
import { Banner } from "./components/Banner";

export const App = () => {
  const catAnimals = [
    {
      id: uuidv4(),
      name: "Cat 1",
      breed: "Breed 1",
      description: "This is cat 1 of breed 1.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Cat 2",
      breed: "Breed 2",
      description: "This is cat 2 of breed 2.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Cat 3",
      breed: "Breed 3",
      description: "This is cat 3 of breed 3.",
      imageUrl: "https://placehold.co/600x400",
    },
  ];

  const dogAnimals = [
    {
      id: uuidv4(),
      name: "Dog 1",
      breed: "Breed 1",
      description: "This is dog 1 of breed 1.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Dog 2",
      breed: "Breed 2",
      description: "This is dog 2 of breed 2.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Dog 3",
      breed: "Breed 3",
      description: "This is dog 3 of breed 3.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Dog 4",
      breed: "Breed 4",
      description: "This is dog 4 of breed 4.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Dog 5",
      breed: "Breed 5",
      description: "This is dog 5 of breed 5.",
      imageUrl: "https://placehold.co/600x400",
    },
  ];

  return (
    <div>
      <Banner />
      <main className="container">
        <Animals catAnimals={catAnimals} dogAnimals={dogAnimals} />
      </main>
    </div>
  );
};
