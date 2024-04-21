import { FC } from "react"

interface StatusBallProps {
  isSelected?: boolean
}

export const StatusBall: FC<StatusBallProps> = ({ isSelected = false }) => {
  return (
    <>
      {isSelected ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#B3DCE8" />
          <circle cx="12" cy="12" r="6" fill="#EFF0F0" />
        </svg>
      ) : (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12" r="12" fill="#EFF0F0" />
          <circle cx="12.5" cy="12" r="6" fill="#B3DCE8" />
        </svg>
      )}
    </>
  )
}
