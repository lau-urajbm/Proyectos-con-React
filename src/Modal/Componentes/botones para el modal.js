import openModal, { openModalAccount } from './openModal';

export default function BotonesParaElModal(){
    function handleOpenModal(){
        openModal()
      }
      function handleOpenModal2(){
        openModalAccount()
      }

    return<div>
        <button onClick={handleOpenModal}>Abrir modal</button>
    <button onClick={handleOpenModal2}>Abrir modal</button>
    </div>
}