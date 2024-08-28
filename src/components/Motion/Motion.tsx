import { motion } from "framer-motion"

const Motion = ({
  isExecute,
  motionValue,
}: {
  isExecute: boolean
  motionValue: { stifness: number; damping: number }
}) => {
  const box = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "blue",
  }

  const variants = {
    initial: { x: 0 },
    execute: { x: 100 },
  }

  return (
    <>
      <motion.div
        style={box}
        variants={variants}
        animate={isExecute ? "execute" : "initial"}
        transition={{ type: "spring", ...motionValue }}
      />
    </>
  )
}

export default Motion
