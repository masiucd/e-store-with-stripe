import styled from "@emotion/styled"
import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"

interface drawerProps {
  isOn: boolean
  setOnToFalse: () => void
}

const DrawWrapper = styled(motion.div)`
  position: fixed;
  height: calc(100% - 13rem);
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
`

const DrawerSection = styled(motion.div)`
  height: calc(100vh + 400px);
  padding-bottom: 400px;
  z-index: 21;
  background: var(--background);
  position: relative;
  box-shadow: var(--sh-xl);
  border-radius: var(--border-radius-m);
  border-top: 1px solid var(--highlight);
  position: relative;
  padding: 2rem;
  button {
    position: absolute;
    right: 1rem;
    top: -2rem;
    font-size: 2rem;
    background-color: var(--white);
    padding: 0.3rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    border: var(--highlight) 2px solid;
    transition: var(--transition-s);
    &:hover {
      background-color: var(--p);
      color: var(--background);
    }
  }
`
const Shadow = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 5;
  cursor: pointer;
`

const Drawer: FC<drawerProps> = ({ isOn, setOnToFalse, children }) => {
  return (
    <AnimatePresence>
      {isOn && (
        <>
          <DrawWrapper
            drag="y"
            dragConstraints={{ top: 10, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y >= 300) {
                setOnToFalse()
              }
            }}
          >
            <motion.div
              exit={{ opacity: 0.5, y: "110%" }}
              initial={{ opacity: 0.5, y: "110%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ damping: 25, type: "spring" }}
            >
              <DrawerSection>
                <button className="btn-reset" onClick={setOnToFalse}>
                  &#x2715;
                </button>
                {children}
              </DrawerSection>
            </motion.div>
          </DrawWrapper>
          <Shadow
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={setOnToFalse}
          />
        </>
      )}
    </AnimatePresence>
  )
}
export default Drawer
