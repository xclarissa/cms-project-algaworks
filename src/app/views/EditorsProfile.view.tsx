import EditorProfile from '../features/EditorProfile'
import DefaultLayout from '../layouts/Default/Default.layout'

export default function EditorsProfileView() {
  return (
    <DefaultLayout> 
      <EditorProfile hidePersonalData />
    </DefaultLayout>
  )
}
