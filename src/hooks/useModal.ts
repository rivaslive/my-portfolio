import { useCallback, useState } from 'react';

export default function useModal(initialState = false) {
  // State
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  // Handlers
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((s) => !s);
  }, []);

  return {
    isOpen,
    openModal: open,
    closeModal: close,
    toggleModal: toggle,
  };
}
