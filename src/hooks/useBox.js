import { useState } from "react";

export const useBox = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleBox = () => {
    setIsOpen((prevState) => !prevState);
  }
  return { isOpen, toggleBox };
}