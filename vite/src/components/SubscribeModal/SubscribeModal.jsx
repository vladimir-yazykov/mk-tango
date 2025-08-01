import { Modal } from "../Modal/Modal";
import { useSelector } from "react-redux";
import { selectModalShown } from "../../store/features/subscribe";

export function SubscribeModal() {
  const show = useSelector(selectModalShown);
  return <Modal show={show}>Спасибо за регистрацию!</Modal>;
}
