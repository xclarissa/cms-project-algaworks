import ErrorBoundary from "../components/ErrorBoundary";
import EditorProfile from "../features/EditorProfile";
import DefaultLayout from "../layouts/Default/Default.layout";

export default function EditorsProfileView() {
  return (
    <DefaultLayout>
      <ErrorBoundary>
        <EditorProfile hidePersonalData />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
