import usePageTitle from "../../core/hooks/usePageTitle";
import PostsList from "../features/PostsList";
import DefaultLayout from "../../app/layouts/Default/Default.layout";
import UserMetrics from "../features/UserMetrics";
import UserTopTags from "../features/UserTopTags";

export default function Home() {
  usePageTitle("Home");
  return (
    <DefaultLayout>
      <UserTopTags />
      <UserMetrics />
      <PostsList />
    </DefaultLayout>
  );
}
