import React, { useState } from "react";
import { Button, FormGroup, Input, Row, Col } from "reactstrap";

const Institute = ({ id, index, deleteInstitute, mode }) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [degree, setDegree] = useState("");

    return (
        <div className="item-wrapper">
            <div className="item-header">
                <span className="item-heading">Institute {index + 1}</span>
                {(mode === "edit" || mode === "create") && (
                    <Button onClick={() => deleteInstitute(id)} color="danger">
                        Delete
                    </Button>
                )}
            </div>
            <Row>
                <Col md={12}>
                    <FormGroup>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id={`institution-${id}`}
                                name={`institution-${id}`}
                                placeholder="Institution Name"
                            />
                        ) : (
                            <>
                                <div className="info-title"> Name</div>
                                <div className="info-field">{name}</div>
                            </>
                        )}
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                id={`degree-${id}`}
                                name={`degree-${id}`}
                                placeholder="Degree"
                            />
                        ) : (
                            <>
                                <div className="info-title"> Degree</div>
                                <div className="info-field">{degree}</div>
                            </>
                        )}
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                id={`year-${id}`}
                                name={`year-${id}`}
                                placeholder="Year"
                                type="number"
                            />
                        ) : (
                            <>
                                <div className="info-title"> Year</div>
                                <div className="info-field">{year}</div>
                            </>
                        )}
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
};
export default Institute;
