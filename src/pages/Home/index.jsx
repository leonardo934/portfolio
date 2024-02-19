import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import style from './Home.module.css'

function Home() {
    return (
        <>
            <Header />
            <Container>
                <section className={style.home}>
                    <div className='apresentacao'>
                        <p>
                            olá, sou <br />
                            <span>Leonardo Cave</span> <br />
                            Dev  Aprendiz
                        </p>
                        <Link to="sobre" className={`${style.btn} ${style.btn_red}`}>
                            Saiba mais sobre mim
                        </Link>
                    </div>
                    <figure>
                        <img className={style.img_home} src="/developer-red.svg" alt="Imagem de Home" />
                    </figure>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Home;