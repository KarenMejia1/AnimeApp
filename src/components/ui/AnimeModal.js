import React from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../actions/ui';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const AnimeModal = () => {

    const dispatch = useDispatch();

    const {modalOpen} = useSelector(state =>state.ui)

    const closeModal = () =>{
        dispatch(uiCloseModal())
    }
    

    const handleSubmitAnime = (e) =>{
        e.preventDefault()

        console.log(e)
    }
    return (

        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            overlayClassName='modal-fondo'
        >
            
    {/* Contenido del anime en CARD */}
        

        <form 
        onSubmit={handleSubmitAnime}
        className='modal__container'>

            <div className='modal__img'>
                <img/>
            </div>

            <div className='modal__info'>
                <h1>Titulo aqui</h1>
                <p>Genero</p>
                <p>Episodios</p>
                <p>Rating</p>
                <p>Trailer</p>
            </div>

            <div className='modal__sipnosis'>
                Sipnosis
            </div>

            <div className='modal__guardar'>
                <button type='submit'>Guardar</button>
            </div>

        </form>

        </Modal>

    )
}