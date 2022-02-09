import React, { useEffect, useRef, useState } from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useFetchTopAnime } from '../../hooks/useFetchTopAnime';
import { useForm } from '../../hooks/useForm';
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

const initEvent = {
    title:'',
}

export const AnimeModal = () => {

    const dispatch = useDispatch();
    const { active: anime } = useSelector(state => state.animes)

    const { modalOpen } = useSelector(state => state.ui)

    
    const [formValues, setFormValues ] = useState(initEvent);

    const {id, title, episodes, rating, img, synopsis, genre} = formValues;


    useEffect(() => {

        if(anime){
            setFormValues(anime);
        }else{
            setFormValues(initEvent)
        }
    }, [anime, setFormValues])

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }


    const closeModal = () => {
        dispatch(uiCloseModal())
    }


    return (


        <div >
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                overlayClassName='modal-fondo'
            >

                <div className='modal__container'>

                    <div className='modal__img'>
                        <img className='modal__imagen' src={img}/>
                    </div>

                    <div className='modal__info' >
                        <input
                            type="text"
                            className="notes__title-input"
                            autoComplete='off'
                            name='title'
                            value={title}
                            onChange={handleInputChange}
                            disabled
                        />

                        <input
                            type="text"
                            className="modal__title-input"
                            autoComplete='off'
                            name='episodes'
                            value={episodes}
                            onChange={handleInputChange}
                            disabled
                        />

                        <input
                            type="text"
                            placeholder="Some awesome title"
                            className="modal__title-input"
                            autoComplete='off'
                            name='rating'
                            value={rating}
                            onChange={handleInputChange}
                        />

                        {/* <h1 value={title}>{title}titulo</h1> */}
                        {/* <p>{episodes}</p>
                <p>{rating}</p>
                <p>Trailer</p>
                <p>{genere}</p> */}
                    </div>

                    <div className='modal__sipnosis'>
                        Sipnosis
                    </div>

                    <div className='modal__guardar'>
                        <button type='submit'>Guardar</button>
                    </div>

                </div>

            </Modal>
        </div>

    )
}