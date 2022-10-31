import {useState} from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
const Home = () => {
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(true);
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setVisible(false);
    };

    return (
        <div>
            <Container>
                {visible ? (
                    <Row>
                        <Form onSubmit={handleSubmit}>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="username"
                                >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={handleName}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Form>
                    </Row>
                ) : (
                    <div className="text-center">
                        <h1>Hello {name}</h1>
                        <p>
                            This site created with Eng / Mohamed Ahmed click to
                            create link above to start creating your site
                        </p>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Home;
