import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio"; // state

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import state from "../store";

function Home() {
  const snap = useSnapshot(state);

  return <AnimatePresence>Home page</AnimatePresence>;
}

export default Home;
