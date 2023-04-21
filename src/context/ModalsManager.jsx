// import { createContext, useContext, useState } from "react";
import { createSignal } from "solid-js";

// export const ModalsManagerContext = createContext(null);

export const [activeModal, setActiveModal] = createSignal("");
