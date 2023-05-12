import React from 'react';
import './styles.css';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div className="modal_window" onClick={onClose}></div>
      <div className="modal">
        <h1 className="text-2xl text-center mb-2">{title}</h1>

        {children}
      </div>
    </>
  );
}
