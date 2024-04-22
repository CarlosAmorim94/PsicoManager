"use client"

import { Provider } from "react-redux"
import { CustomButton } from "./components/CustomButton"
import { Modal } from "./components/Modal"
import { store } from "./store"

export default function Home() {
  const handleOpenModal = () => {}

  return (
    <Provider store={store}>
      <>
        <Modal />
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#121214",
            position: "relative",
          }}
        >
          <CustomButton
            label={"Abrir Modal"}
            onClick={() => handleOpenModal()}
            variant="secondary"
          />
        </main>
      </>
    </Provider>
  )
}
