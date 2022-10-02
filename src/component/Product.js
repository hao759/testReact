import "./Product.scss";
import matTv from "../assets/img/matTv.png";
import tieuviem from "../assets/img/tieu-viem.jpg";
import { useState } from "react"; ///cjs/react.production.min???
import Lightbox from "react-image-lightbox";
const Product = () => {
  const imtys =
    "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_55.jpg";
  const [currentImg, setcurrentImg] = useState(matTv);
  const [isOpen, setisOpen] = useState(false);
  const [photoIndex, setphotoIndex] = useState(0);
  const images = [matTv, tieuviem, imtys];
  const handleClickPreview = () => {
    let index = images.findIndex((item) => item === currentImg);
    setphotoIndex(index);
    setisOpen(true);
  };
  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setisOpen(false)}
          // onCloseRequest={() => setisOpen({ isOpen: false })}
          onMovePrevRequest={() =>
            setphotoIndex((photoIndex + images.length - 1) % images.length)
          }
          animationDuration={600}
          onMoveNextRequest={() =>
            setphotoIndex(
              (photoIndex + 1) % images.length
              //photoIndex: (photoIndex + 1) % images.length,
            )
          }
        />
      )}
      <div className="product-container">
        <div className="content-left">
          <div className="img_up">
            <img
              className="img1"
              src={currentImg}
              onClick={() => handleClickPreview()} //phai co ()    =>onClick={() => {handleClickPreview()}}
            />{" "}
          </div>
          <div className="img_down">
            {" "}
            <img
              className="img2"
              onClick={() => setcurrentImg(matTv)}
              src={matTv}
            />
            <img
              className="img2"
              onClick={() => setcurrentImg(tieuviem)}
              src={tieuviem}
            />
            <img
              className="img2"
              src={imtys}
              onClick={() => setcurrentImg(imtys)}
            />
          </div>
        </div>
        <div className="content-right">
          <div className="title">Giay chay bo nam </div>
          <div className="price">3 tr VND</div>
          <div className="size">Size:</div>
          <div className="action">
            <input className="quantity" type="number" />
            <button className="Buy" type="reset">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
