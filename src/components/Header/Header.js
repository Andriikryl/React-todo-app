import React from "react";
import { Col, Row } from "react-bootstrap";
import s from "./Header.module.css"

function Header(){
    return (
        <Row>
            <Col>
                        <div className={s.root}>Todo List</div>
            </Col>
        </Row>
    )
}

export default Header