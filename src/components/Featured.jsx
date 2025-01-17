 import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    // Heading Section
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl tracking-tight">Featured Projects</h1>
      </div>

      {/* //Cards Section */}
      <div className="px-20">
        <div className="cards flex gap-10 mt-10 w-full">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="inline-block text-[1.3vw] mb-5 ml-1">• FYDE</h1>
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold tracking-tight leading-none text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  className="inline-block"
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="inline-block text-[1.3vw] mb-5 ml-1">• VISE</h1>
            <h1 className="absolute overflow-hidden flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold tracking-tight leading-none text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  className="inline-block"
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          
        </div>


        <div className="cards flex gap-10 mb-11 mt-[20vh] w-full">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="inline-block text-[1.3vw] mb-5 ml-1">• TRAWA</h1>
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold tracking-tight leading-none text-[#CDEA68]">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  className="inline-block"
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="inline-block text-[1.3vw] mb-5 ml-1">• PREMIUN</h1>
            <h1 className="absolute overflow-hidden flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold tracking-tight leading-none text-[#CDEA68]">
              {"PREMIUN".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  className="inline-block"
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

export default Featured;
