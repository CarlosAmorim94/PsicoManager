"use client"

import { FC } from "react"
import { SteepProps } from "../Modal"
import { Checked } from "../SVG/Checked"
import { StatusBall } from "../SVG/StatusBall"
import { HorizontalLine, InternalContainer, Steeps } from "./styles"

interface SteepsStatusProps {
  steep: SteepProps | string
}

export const SteepsStatus: FC<SteepsStatusProps> = ({ steep = "userData" }) => {
  return (
    <InternalContainer>
      <Steeps isSelected={steep === "userData"}>
        {steep === "messages" || steep === "payment" ? (
          <Checked />
        ) : (
          <StatusBall isSelected={steep === "userData"} />
        )}
      </Steeps>
      <HorizontalLine
        isSelected={steep === "messages" || steep === "payment"}
      />
      <Steeps isSelected={steep === "messages"}>
        {steep === "payment" ? (
          <Checked />
        ) : (
          <StatusBall isSelected={steep === "messages"} />
        )}
      </Steeps>
      <HorizontalLine isSelected={steep === "payment"} />
      <Steeps isSelected={steep === "payment"}>
        <StatusBall isSelected={steep === "payment"} />
      </Steeps>
    </InternalContainer>
  )
}
