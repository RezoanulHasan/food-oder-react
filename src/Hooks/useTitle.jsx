import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `  ${title}-pti`;
  }, [title]);
};

export default useTitle;
