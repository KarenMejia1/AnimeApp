import React, { useState } from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { activeAnime } from '../actions/Anime';
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

export const AnimeModal = ({id, title, episodes, rating, img, synopsis}) => {

    const dispatch = useDispatch();

    const {activeAnime} = useSelector( state => state.animes );
    console.log(activeAnime)

    const {modalOpen} = useSelector(state =>state.ui)
    console.log(modalOpen)


    

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

            <div className='modal__info' >
                <h1 value={title}>{title}titulo</h1>
                <p>Genero</p>
                <p>{episodes}</p>
                <p>{rating}</p>
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