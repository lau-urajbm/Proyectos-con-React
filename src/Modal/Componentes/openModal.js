import React, {Suspense, lazy} from 'react';
import {createRoot} from 'react-dom/client'
import ModalLoading from './modalLoading';

export default function openModal(){

    const Modal = lazy(()=> import('./modalSettings'))
    const modalDiv = document.createElement('div')

    modalDiv.id = 'modal';
    document.body.appendChild(modalDiv)

    const root = createRoot(modalDiv)

    root.render(
    <Suspense fallback={<div>cargando...</div>}>
        <Modal root={root} title={'modal de configuraciones'}>
         Contenido de modal
        </Modal>
    </Suspense>
    
    
    )
    
}

export  function openModalAccount(){

    const Modal = lazy(()=> import('./modalAccount'))
    const modalDiv = document.createElement('div')

    modalDiv.id = 'modal';
    document.body.appendChild(modalDiv)

    const root = createRoot(modalDiv)

    root.render(
    <Suspense fallback={<ModalLoading/>}>
        <Modal root={root} title={'modal de tu cuenta'}>
         Contenido de modal
        </Modal>
    </Suspense>
    
    
    )
    
}