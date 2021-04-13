import React, {useState} from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Table from "./Table";

export default function SearchBar ({ onSubmit, result, setResult, videos}){
  const serchBar = React.createRef();
  const heart = React.createRef();
  const fullWidth = React.createRef();
  const showSearch = React.createRef();

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const openModal = () => {
    setShowModal(e => !e)
  }

  const widthFilter = (searchTerm) => {
    onSubmit(searchTerm);
    serchBar.current.setAttribute("class", "default-pressed");
    heart.current.setAttribute("class", "show-heart");
    fullWidth.current.setAttribute("class", "set-width")
    showSearch.current.setAttribute("class", "show-search")
  }  

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      (searchTerm === "") ? console.log("Введите ваш поисковой запрос") : widthFilter(searchTerm);
    }
  }

  return (
  <> 
    <Modal result={result} setResult={setResult} showModal={showModal} setShowModal={setShowModal} liked={liked} setLiked={setLiked} searchTerm={searchTerm}/>
    <Wrapper>
      <div className="default" ref={serchBar}>
        <h1>Поиск видео</h1>
        <div className="input-form" ref={fullWidth}>
          <input
              className="input-wrapper"
              fullWidth
              label="Search..."
              value={searchTerm}
              onChange={handleChange}
              onKeyPress={onKeyPress}
              placeholder="Что хотите посмотреть?"
          />
          <svg onClick={openModal} className="hided-heart" ref={heart} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8401 3.60999C20.3294 3.099 19.7229 2.69364 19.0555 2.41708C18.388 2.14052 17.6726 1.99817 16.9501 1.99817C16.2276 1.99817 15.5122 2.14052 14.8448 2.41708C14.1773 2.69364 13.5709 3.099 13.0601 3.60999L12.0001 4.66999L10.9401 3.60999C9.90843 2.5783 8.50915 1.9987 7.05012 1.9987C5.59109 1.9987 4.19181 2.5783 3.16012 3.60999C2.12843 4.64169 1.54883 6.04096 1.54883 7.49999C1.54883 8.95903 2.12843 10.3583 3.16012 11.39L4.22012 12.45L12.0001 20.23L19.7801 12.45L20.8401 11.39C21.3511 10.8792 21.7565 10.2728 22.033 9.60535C22.3096 8.93789 22.4519 8.22248 22.4519 7.49999C22.4519 6.77751 22.3096 6.0621 22.033 5.39464C21.7565 4.72718 21.3511 4.12075 20.8401 3.60999V3.60999Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Table liked={liked} setLiked={setLiked} />
          <button className="sm-button" onClick={() => {(searchTerm === "") ? console.log("Введите ваш поисковой запрос") : widthFilter(searchTerm);}}>Найти</button>
        </div>
        <h3 ref={showSearch}>Видео по запросу «{searchTerm}»</h3>
      </div>
    </Wrapper>
  </>
  );
}

const Wrapper = styled.div`
  .default-pressed{
    height: auto;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0 200px 0 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

  h1{
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
    margin-top: 40px;
    }
  .input-form{
    width: 100%;
    margin-top: 12px;
    height: 52px;
    border: 1px solid rgba(23, 23, 25, 0.2);
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    }
  }
  .show-heart{
    margin: auto;
    margin-right: 15px;
    width: 24px;
    height: 24px;
    display: block;
  }
  .hided-heart{
    margin: auto;
    margin-right: 15px;
    width: 24px;
    height: 24px;
    display: none;
  }
  .default{
    height: 50vh;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0 177px 0 177px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
  }

  h1{
    margin-bottom: 40px;
  }
  h3{
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    display: none;
    align-items: center;
    color: #000000;
  }
  .show-search{
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    display: flex;
    align-items: center;
    color: #000000;
  }
  .input-form{
    max-width: 686px;
    margin-top: 40px;
    height: 52px;
    border: 1px solid rgba(23, 23, 25, 0.2);
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
  }
  .input-wrapper{
    justify-content: flex-start;
    width: 80%;
    outline: none;
    height: 100%;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #272727;
    opacity: 0.3;
    padding-left: 15px;
  }
  .set-width{
    width: 686px;
    margin-top: 40px;
    height: 52px;
    border: 1px solid rgba(23, 23, 25, 0.2);
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
  }
  .sm-button{
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: #1390E5;
    border-radius: 0px 5px 5px 0px;
    border: none;
    width: 20%;
  }
  .sm-button:focus{
    border: none;
  }
`

