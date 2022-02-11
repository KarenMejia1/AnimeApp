import React, { useEffect, useState } from 'react';

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

const initEvent = {
    title: '',
}

export const AnimeModal = () => {

    const dispatch = useDispatch();
    const { active: anime } = useSelector(state => state.animes)

    const { modalOpen } = useSelector(state => state.ui)


    const [formValues, setFormValues] = useState(initEvent);

    const { id, title, episodes, rating, img, synopsis, genre } = formValues;


    useEffect(() => {

        if (anime) {
            setFormValues(anime);
        } else {
            setFormValues(initEvent)
        }
    }, [anime, setFormValues])

    const handleInputChange = ({ target }) => {
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
                        <img className='modal__imagen' src={img} />
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

                        <textarea
                            type="text"
                            placeholder="Some awesome title"
                            className=" modal__sipnosis"
                            autoComplete='off'
                            name='sypnosis'
                            value={synopsis}
                            onChange={handleInputChange}
                            disabled
                        />

                        <div className='info_container'>
                            <p>Numero de episodios</p>
                            
                            <input
                                type="text"
                                className="info__title-input"
                                autoComplete='off'
                                name='episodes'
                                value={episodes}
                                onChange={handleInputChange}
                                disabled
                            />
                    <p>Clasificación</p>
                            <input
                                type="text"
                                placeholder="Some awesome title"
                                className="info__title-input"
                                autoComplete='off'
                                name='rating'
                                value={rating}
                                onChange={handleInputChange}
                                disabled
                            />
                        </div>
                    </div>




                </div>

            </Modal>
        </div>

    )
}