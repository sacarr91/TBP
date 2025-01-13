import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function AboutMe() {
    return (
        <>
            <Container className="py-5">
                <center><img src='/images/about.png' alt="page title image: about me" height="100"></img></center>
                <Row>
                    <Container >
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src="https://media.licdn.com/dms/image/D4E03AQHyucfFlfPM_w/profile-displayphoto-shrink_800_800/0/1716413707355?e=1726704000&v=beta&t=CAgYoBD_AUCXmWG12QJxjvD1c9gzMbkePWetY2fxP9Q" thumbnail />
                            </Col>
                            <Col xs={6} md={8}>
                                <Image src="/images/note.png" className='note' />
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
};

export default AboutMe;