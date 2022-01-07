import React from "react";
import { Button, FormGroup, Input, Row, Col } from "reactstrap";

const Institute = ({ id, index, deleteInstitute }) => (
    <div className="item-wrapper">
        <div className="item-header">
            <span className="item-heading">Institute {index + 1}</span>
            <Button onClick={() => deleteInstitute(id)} color="danger">
                Delete
            </Button>
        </div>
        <Row>
            <Col md={12}>
                <FormGroup>
                    <Input
                        required
                        id={`institution-${id}`}
                        name={`institution-${id}`}
                        placeholder="Institution Name"
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Input
                        required
                        id={`degree-${id}`}
                        name={`degree-${id}`}
                        placeholder="Degree"
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Input
                        required
                        id={`year-${id}`}
                        name={`year-${id}`}
                        placeholder="Year"
                        type="number"
                    />
                </FormGroup>
            </Col>
        </Row>
    </div>
);

export default Institute;
