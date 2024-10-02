import { CarCard } from "./components/CarCard";

export const App = () => {
  return (
    <div>
      <CarCard
        imageUrl="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Car 1"
        summary="This is a summary of car 1"
        isSold={true}
      />
      <CarCard
        imageUrl="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Car 1"
        summary="This is a summary of car 1"
        isSold={false}
      />
    </div>
  );
};
