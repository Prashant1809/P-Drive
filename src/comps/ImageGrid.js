
import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid ">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whitehover={{ opacity: 1 }}
            className="img-wrap "
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
