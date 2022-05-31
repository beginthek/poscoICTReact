import "./BootstrapLogin.css";
import {Container , Row , Col, Button, Form} from "reactstrap"

const BootstrapLogin =
    () => {
        return (
            <div className="LoginPage">
                <Container className="bg-light border">
                    <Row
                        style={{
                            rowGap: "1em",
                            padding:
                                "3em",
                        }}
                    >
                        <Col
                            xl={
                                12
                            }
                        >
                            <img
                                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                                alt="Logo"
                            ></img>
                        </Col>

                        <Col
                            xl={
                                12
                            }
                        >
                            <Form className="LoginForm">
                                <input
                                    type="text"
                                    placeholder="ID"
                                    name="id"
                                ></input>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                ></input>
                                <Button
                                    type={
                                        "submit"
                                    }
                                    color="primary"
                                    block
                                >
                                    로그인
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light border">
                    <Row
                        style={{
                            padding:
                                "1em",
                            textAlign:
                                "center",
                        }}
                    >
                        <p>
                            계정이
                            없으신가요?
                            <a href="g"></a>
                        </p>
                    </Row>
                </Container>
            </div>
        )
    }

export default BootstrapLogin