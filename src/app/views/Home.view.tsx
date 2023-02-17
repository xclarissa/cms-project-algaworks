import usePageTitle from "../../core/hooks/usePageTitle";
import PostsList from "../features/PostsList";
import DefaultLayout from "../../app/layouts/Default/Default.layout";
import UserPerformance from "../features/UserPerformance";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";

export default function Home() {
  usePageTitle("Home");
  return (
    <DefaultLayout>
      <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr', alignItems: 'center', gap: '32px' }}>
        <UserTopTags />
        <UserEarnings />
      </div>
      <UserPerformance />
      <PostsList />
    </DefaultLayout>
  );
}
