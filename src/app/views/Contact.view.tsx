import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../../layouts/Default/Default.layout"

export default function Contact () {
  usePageTitle('Contato')
  return <div>
    <DefaultLayout>Contato</DefaultLayout>
  </div>
}