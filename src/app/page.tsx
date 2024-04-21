"use client"
import { useState } from "react"
import { CustomButton } from "./components/CustomButton"
import { Modal } from "./components/Modal"

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <Modal isOpen={openModal} setIsOpen={setOpenModal} />
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
  )
}
