import { Section } from "rbx";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Scoreboard from "../components/Scoreboard";
import Patching from "../components/Patching";

const Fade = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Home = () => {
  const [sidebar, setSidebar] = useState("scoreboard");

  const tesHandler = useCallback(
    (e) => {
      if (e.target.name !== sidebar) {
        setSidebar(e.target.name);
      }
    },
    [sidebar]
  );

  return (
    <Section>
      <Sidebar clicked={tesHandler} isActive={sidebar}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={sidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0 }}
          >
            {sidebar === "scoreboard" ? <Scoreboard /> : null}
            {sidebar === "patching" ? <Patching /> : null}
          </motion.div>
        </AnimatePresence>
      </Sidebar>
    </Section>
  );
};

export default Home;
