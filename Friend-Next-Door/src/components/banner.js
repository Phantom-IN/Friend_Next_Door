import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import animation from "../assets/img/ami2.json";
import Lottie from "lottie-react";
import 'animate.css';
import { useHistory } from "react-router-dom";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const history = useHistory();
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Friend", "Counselor", "Colleague" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>{`Hi I'm Your - `} <span className="txt-rotate" dataPeriod="900" data-rotate='[ "Friend", "Counselor", "Colleague" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Welcome to our AI-powered mental health platform. Connect with empathetic 3D avatars to discuss your concerns in a safe, private space. Get tailored guidance on anxiety, stress, depression, and more. Your well-being matters, and our avatars are here to make a difference. Join us today!</p>
                                    <button type="button" class="btn btn-primary btn-lg" onClick={() => history.push('/pick')} > Let’s Get Started  <ArrowRightCircle size={35} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div style={{ width: "100%" }}>
                            <Lottie loop={true} animationData={animation} />
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
