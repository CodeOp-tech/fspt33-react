import { Banner } from "./components/Banner";

export const App = () => {
  return (
    <div>
      <Banner title="Hello from Vue" subTitle="Not today!!" />
      <Banner title="Hello from React" subTitle="Yes today!!" />
    </div>
  );
};
