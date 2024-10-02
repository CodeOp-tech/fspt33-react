import { v4 as uuidv4 } from "uuid";
import { Animals } from "./components/Animals";
import { Banner } from "./components/Banner";

export const App = () => {
  const animals = [
    {
      id: uuidv4(),
      name: "Animal 1",
      breed: "Breed 1",
      description: "This is animal 1 of breed 1.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Animal 2",
      breed: "Breed 2",
      description: "This is animal 2 of breed 2.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Animal 3",
      breed: "Breed 3",
      description: "This is animal 3 of breed 3.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Animal 4",
      breed: "Breed 4",
      description: "This is animal 4 of breed 4.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      id: uuidv4(),
      name: "Animal 5",
      breed: "Breed 5",
      description: "This is animal 5 of breed 5.",
      imageUrl: "https://placehold.co/600x400",
    },
  ];

  return (
    <div>
      <Banner />
      <main className="container">
        <Animals animals={animals} />
      </main>
    </div>
  );
};
