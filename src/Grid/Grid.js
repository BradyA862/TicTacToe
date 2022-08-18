import {Button, Col, Container, Row} from "react-bootstrap";
import {useState} from "react";


export default function Grid() {

    const [turn, setTurn] = useState("X")

    const [box1, setBox1] = useState("")
    const [box2, setBox2] = useState("")
    const [box3, setBox3] = useState("")
    const [box4, setBox4] = useState("")
    const [box5, setBox5] = useState("")
    const [box6, setBox6] = useState("")
    const [box7, setBox7] = useState("")
    const [box8, setBox8] = useState("")
    const [box9, setBox9] = useState("")


    function chooseBox1() {
        if (turn === "X") {
            setBox1("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox1("O")
            setTurn("X")
        }
    }

    function chooseBox2() {
        if (turn === "X") {
            setBox2("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox2("O")
            setTurn("X")
        }
    }

    function chooseBox3() {
        if (turn === "X") {
            setBox3("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox3("O")
            setTurn("X")
        }
    }

    function chooseBox4() {
        if (turn === "X") {
            setBox4("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox4("O")
            setTurn("X")
        }
    }

    function chooseBox5() {
        if (turn === "X") {
            setBox5("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox5("O")
            setTurn("X")
        }
    }

    function chooseBox6() {
        if (turn === "X") {
            setBox6("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox6("O")
            setTurn("X")
        }
    }

    function chooseBox7() {
        if (turn === "X") {
            setBox7("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox7("O")
            setTurn("X")
        }
    }

    function chooseBox8() {
        if (turn === "X") {
            setBox8("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox8("O")
            setTurn("X")
        }
    }

    function chooseBox9() {
        if (turn === "X") {
            setBox9("X")
            setTurn("O")
        } else if (turn === "O") {
            setBox9("O")
            setTurn("X")
        }
    }

    function handleReset() {
        setBox1("")
        setBox2("")
        setBox3("")
        setBox4("")
        setBox5("")
        setBox6("")
        setBox7("")
        setBox8("")
        setBox9("")
    }

    if (box1 === box2 && box1 === box3 && box1 !== "") {
        return (<>
                <h1>{box1} wins</h1>
                <Button onClick={handleReset} style={{
                    background: "red",
                    outlineColor: "red"
                }}>Reset</Button>
            </>
        )
    } else if (box1 === box4 && box1 === box7 && box1 !== "") {
        return (<>
                <h1>{box1} wins</h1>
                <Button onClick={handleReset} style={{
                    background: "red",
                    outlineColor: "red"
                }}>Reset</Button>
            </>
        )
    } else if (box1 === box5 && box1 === box9 && box1 !== "") {
        return (<>
                <h1>{box1} wins</h1>
                <Button onClick={handleReset} style={{
                    background: "red",
                    outlineColor: "red"
                }}>Reset</Button>
            </>
        )
    } else if (box4 === box5 && box4 === box6 && box4 !== "") {
        return (<>
                <h1>{box4} wins</h1>
                <Button onClick={handleReset} style={{
                    background: "red",
                    outlineColor: "red"
                }}>Reset</Button>
            </>
        )
    } else if (box2 === box5 && box2 === box8 && box2 !== "") {
        return (<>
                <h1>{box2} wins</h1>
                <Button onClick={handleReset} style={{
                    background: "red",
                    outlineColor: "red"
                }}>Reset</Button>
            </>
        )
    } else if (box3 === box5 && box3 === box7 && box3 !== "") {
        return (<>
                <h1>{box3} wins</h1>
                <Button onClick={handleReset} style={{
                    background: "red",
                    outlineColor: "red"
                }}>Reset</Button>
            </>
        )
    } else if (box7 === box8 && box7 === box9 && box7 !== "") {
        return (<>
                <h1>{box7} wins</h1>
                <Button onClick={handleReset} style={{
                    background: "red",
                    outlineColor: "red"
                }}>Reset</Button>
            </>
        )
    } else if (box3 === box6 && box3 === box9 && box3 !== "") {
        return (<>
                <h1>{box3} wins</h1>
                <Button onClick={handleReset} style={{
                    background: "red",
                    outlineColor: "red"
                }}>Reset</Button>
            </>
        )
    } else {
        return (<>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <h1>Turn: {turn}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Button onClick={handleReset} style={{
                            background: "red",
                            outlineColor: "red"
                        }}>Reset</Button>
                    </Col>
                </Row>
                <hr/>
                <Container style={{
                    height: 600,
                    width: 600
                }}>
                    <Row style={{
                        height: 200,
                        width: 600
                    }}>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200
                        }}>
                            <Button onClick={chooseBox1}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box1" className="text-black" disabled={box1 !== ""}>
                                {box1}
                            </Button>
                        </Col>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200
                        }}>
                            <Button onClick={chooseBox2}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box2" className="text-black" disabled={box2 !== ""}>
                                {box2}
                            </Button>
                        </Col>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200,
                        }}>
                            <Button onClick={chooseBox3}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box3" className="text-black" disabled={box3 !== ""}>
                                {box3}
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{
                        height: 200,
                        width: 600
                    }}>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200
                        }}>
                            <Button onClick={chooseBox4}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box4" className="text-black" disabled={box4 !== ""}>
                                {box4}
                            </Button>
                        </Col>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200
                        }}>
                            <Button onClick={chooseBox5}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box5" className="text-black" disabled={box5 !== ""}>
                                {box5}
                            </Button>
                        </Col>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200,
                        }}>
                            <Button onClick={chooseBox6}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box6" className="text-black" disabled={box6 !== ""}>
                                {box6}
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{
                        height: 200,
                        width: 600
                    }}>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200
                        }}>
                            <Button onClick={chooseBox7}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box7" className="text-black" disabled={box7 !== ""}>
                                {box7}
                            </Button>
                        </Col>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200
                        }}>
                            <Button onClick={chooseBox8}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box8" className="text-black" disabled={box8 !== ""}>
                                {box8}
                            </Button>
                        </Col>
                        <Col className="square border border-dark d-flex justify-content-center" style={{
                            height: 200,
                            width: 200,
                        }}>
                            <Button onClick={chooseBox9}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        background: "transparent",
                                        fontSize: "8rem"
                                    }} id="box9" className="text-black" disabled={box9 !== ""}>
                                {box9}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}