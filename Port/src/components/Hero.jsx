import { Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <Row>
      <Col md="6" lg="6">
        <div className="text-center">
        <h1 className='title mb-3'>Nice to meet you,<br/>I'm Vipin Raj</h1>
        <h4 className='sub-title text-white'>Front End Developer</h4>

        <p>Expert in developing responsive & interactive website.expert in c</p>

        </div>
      </Col>
    </Row>
  );
};

export default Hero;