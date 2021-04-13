import React, {useState, useRef, useEffect, useCallback} from 'react';
import { useSpring, animated} from 'react-spring';
import {RangeStepInput} from 'react-range-step-input'
import styled from 'styled-components';

export default function Modal ({ showModal, setShowModal, searchTerm, result, setResult, liked, setLiked }){
  const modalRef = useRef();
  const [value, setValue] = useState("none") //это лист
  const [favs, setFavs] = useState([])
  const [fav, setFav] = useState({
    id: "",
    searchTerm: "",
    name: "",
    result: result,
  })

  const LOCAL_STORAGE_KEY = "SIBDEV_ACCEPT_MY_OFFER"

  const handleSubmit = (e) => {
    e.preventDefault();
    addFav({...fav, id: Date.now(), searchTerm: searchTerm})
    setFav({...fav, name: "", result: 8}) 
    setShowModal(prev => !prev)
    showLiked()
    setTimeout(showLiked, 5000);
  }

  const showLiked = () => {
    setLiked(prev => !prev)
  }

  const addFav = (fav) => {
    setFavs([fav, ...favs])
  }

  useEffect(() => {
    const storageFavs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageFavs){
      setFavs(storageFavs)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favs))
  }, [favs])

  const handleCountInputChange = (e) => {
    setResult(e.target.value)
    setFav({...fav, result: result});
  }

// ------------------- modal animation & some event listners ---------------
  
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
    
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <h3>Сохранить запрос</h3>
              <ModalContent>
                <a>Запрос</a>
                <div className="searched">
                  <p>{searchTerm}</p>
                </div>
              </ModalContent>
              <ModalContent>
                <div>
                  <a style={{color: '#FF0000', marginRight: 3}}>*</a>
                  <a>Название</a>
                </div>
                <input onChange={(e) => setFav({...fav, name: e.target.value})} className="form" placeholder="Укажите название" />
              </ModalContent>
              <ModalContent>
                <a>Сортировать по:</a>
                <select value={value} onChange={(e) => setValue(e.target.value)} className="form">
                  <option value="none">Без сортировки</option>
                  <option value="like">По лайкам</option>
                  <option value="views">По просмотрам</option>
                </select>
              </ModalContent>
              <ModalContent style={{marginBottom: 36}}>
                <a>Максимальное количество</a>
                <div style={{display: 'flex', justifyContent: 'space-between'}} >
                  <RangeStepInput value={result} onChange={handleCountInputChange} min={1} max={50} style={{width: 310}} />
                  <input value={result} onChange={handleCountInputChange} className="form" style={{width: 100, textAlign: 'center', color: '#272727'}}/>
                </div>
              </ModalContent>
              <div className="footer">
                <button className="btn-left" onClick={() => setShowModal(prev => !prev)}>Не сохранять</button>
                <button className="btn-right" onClick={handleSubmit}>Сохранить</button>
              </div>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #75C7FF;
  opacity: 1;
  position: fixed;
  display: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 88;
`;

const ModalWrapper = styled.div`
  width: 510px;
  height: 573px;
  background: #FFFFFF;
  box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
  border-radius: 10px;
  color: #000;
  display: relative;
  z-index: 100;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 113px;
  text-align: center;
  padding: 36px 40px 36px 40px;
  box-sizing: border-box;
  a:hover{
    border: none;
  }
  h3{
    margin-bottom: 36px;
  }
  .footer{
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-left{
    width: 210px;
    height: 52px;
    border: 1px solid #1390E5;
    background: #fff;
    color: #1390E5;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .btn-right{
    width: 210px;
    height: 52px;
    background: #1390E5;
    border-radius: 5px;
  }
`;

const ModalContent = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.8;
  color: #141414;
  margin-bottom: 24px;
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #272727;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  div{
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a{
      height: 22px;
    }
  }
  .searched{
    width: 100%;
    height: 48px;
    background: #FAFAFA;
    border: 1px solid rgba(23, 23, 25, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 15px;
  }
  p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #272727;
    opacity: 0.3;
  }
  .form{
    border: 1px solid rgba(23, 23, 25, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    padding: 12px 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #272727;
    opacity: 0.3;
  }
`;
