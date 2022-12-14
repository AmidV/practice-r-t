import React from 'react';

interface ModalProps {
    children: React.ReactNode,
    title: string,
    onClose: () => void
}

export default function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
        <div
            style={{
                position: 'fixed', 
                background: 'black', 
                opacity: '45%', 
                top: '0',
                right: '0', 
                bottom: '0', 
                left: '0' 
            }}
            onClick={onClose}
        />

        <div
            style={{
                width: '500px',
                background: 'white',
                padding: '20px',
                borderRadius: '3px',
                position: 'fixed',
                top: '100px',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center'
            }}
        >   <h1 style={{
            fontSize: '20px', 
            textAlign: 'center', 
            marginBottom: '20px' 
            }}
        >{ title }</h1>
            { children }</div>
    
    </>
  )
}
