import React from "react";
import { Button, FormGroup, Input, Row, Col } from "reactstrap";

const Company = ({ id, index, deleteCompany }) => (
    <div className="item-wrapper">
        <div className="item-header">
            <span className="item-heading">Company {index + 1}</span>
            <Button onClick={() => deleteCompany(id)} color="danger">
                Delete
            </Button>
        </div>
        <Row>
            <Col md={12}>
                <FormGroup>
                    <Input
                        required
                        id={`company-${id}`}
                        name={`company-${id}`}
                        placeholder="Company Name"
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Input
                        required
                        id={`designation-${id}`}
                        name={`designation-${id}`}
                        placeholder="Designation"
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

export default Company;
