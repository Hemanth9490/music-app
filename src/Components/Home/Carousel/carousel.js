import { Link } from "react-router-dom";
import "./carousel.css";

const Carousell = (props) => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="d-flex flex-row justify-content-between">
              <div className="col-3 ml-1">
                <Link to="Butterflies">
                  <img
                    className="imgae-co w-100"
                    src="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
              <div className="col-5">
                <Link to="Genius ft. Sia, Diplo, Labrinth">
                  <img
                    className="imgae-co w-100"
                    src="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
              <div className="col-3 mr-1">
                <Link to="Overdose">
                  <img
                    className="imgae-co w-100"
                    src="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex flex-row justify-content-between">
              <div className="col-3 ml-1">
                <Link to="Nightmare">
                  <img
                    className="imgae-co w-100"
                    src="https://irshad-github.github.io/static/2v.jpg"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
              <div className="col-5">
                <Link to="Cro Magnon Man">
                  <img
                    className="imgae-co w-100"
                    src="https://i.imgur.com/lXvsuBu.png"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
              <div className="col-3 mr-1">
                <Link to="Rag'n'Bone Man">
                  <img
                    className="imgae-co w-100"
                    src="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex flex-row justify-content-between">
              <div className="col-3 ml-1">
                <Link to="Hidden">
                  <img
                    className="imgae-co w-100"
                    src="https://irshad-github.github.io/static/1v.jpg"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
              <div className="col-5">
                <Link to="Blinding Lights">
                  <img
                    className="imgae-co w-100"
                    src="https://irshad-github.github.io/static/4.jpg"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
              <div className="col-3 mr-1">
                <Link to="Road Down Hill">
                  <img
                    className="imgae-co w-100"
                    src="https://irshad-github.github.io/static/5.jpg"
                    alt="carousel-pic"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};
export default Carousell;
