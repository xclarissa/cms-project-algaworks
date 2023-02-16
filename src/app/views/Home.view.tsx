import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../../layouts/Default/Default.layout";
// import DefaultLayoyt from "../layouts/Default"

export default function Home() {
  usePageTitle("Home");
  return (
    <DefaultLayout>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est pariatur, beatae eveniet neque aut officia laudantium molestias omnis ratione, voluptatum molestiae tempora maxime veritatis nam temporibus minima, labore doloribus!</p>
    </DefaultLayout>
  );
}
