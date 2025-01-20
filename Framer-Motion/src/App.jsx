import { motion } from "motion/react";
import "./App.css";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 2, delay: 1 }}
        className="w-[200px] h-[200px] bg-red-400 border rounded-xl"
      >
        Hello
      </motion.div>
    </>
  );
}

export default App;
