import { children, createSignal } from "solid-js";
import EditTaskModalContent from "./EditTaskModalContent";
import MobileSidebar from "./MobileSideBar";
import EditTask from "./EditTask";
import CreateTask from "./CreateTask";
import EditBoard from "./EditBoard";
import CreateBoard from "./CreateBoard";
import DeleteBoard from "./DeleteBoard";
import { activeModal, setActiveModal } from "../../context/ModalsManager";
import { Match, Switch } from "solid-js";

const Modal = (props) => {
  console.log(props);
  const c = children(() => props.children);
  return (
    <div
      class={`fixed inset-0 bg-black duration-500 bg-opacity-50 flex justify-center items-start z-50 `}
      aria-labelledby="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={() => setActiveModal("")}
    >
      <div
        class={`w-full mx-4 sm:m-14  dark:bg-gray-dark bg-white mt-20 rounded-lg py-4`}
        onClick={(e) => e.stopPropagation()}
      >
        {c()}
      </div>
    </div>
  );
};

const Modals = () => {
  console.log(activeModal());

  return (
    <Switch fallback={null}>
      <Match when={activeModal() === "createBoard"}>
        <Modal>
          <CreateBoard />
        </Modal>
      </Match>
      <Match when={activeModal() === "editBoard"}>
        <Modal>
          <EditBoard />
        </Modal>
      </Match>
      <Match when={activeModal() === "deleteBoard"}>
        <Modal>
          <DeleteBoard />
        </Modal>
      </Match>
      <Match when={activeModal() === "editTask"}>
        <Modal>
          <EditTask />
        </Modal>
      </Match>
      <Match when={activeModal() === "editTaskContent"}>
        <Modal>
          <EditTaskModalContent />
        </Modal>
      </Match>
      <Match when={activeModal() === "mobileSidebar"}>
        <Modal>
          <MobileSidebar />
        </Modal>
      </Match>
      <Match when={activeModal() === "createNewTask"}>
        <Modal>
          <CreateTask />
        </Modal>
      </Match>
      <Match when={activeModal() === "deleteTask"}>
        <Modal>
          <CreateTask />
        </Modal>
      </Match>
    </Switch>
  );
};

export default Modals;
