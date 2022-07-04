import Alert from "../Alert";
import Backdrop from "../Backdrop";
import useFeedback from "../../utility/hooks/useFeedback";

export default function Feedback() {
  const { alert, alertVisible, backdropVisible } = useFeedback()

  return <>
    <Alert type={alert.type} message={alert.message} visible={alertVisible}/>
    <Backdrop visible={backdropVisible}/>
  </>
}