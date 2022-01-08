import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Row, Col } from "reactstrap";

const Company = ({ id, index, deleteCompany, mode }) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [designation, setDesignation] = useState("");

    return (
        <div className="item-wrapper">
            <div className="item-header">
                <span className="item-heading">Company {index + 1}</span>

                {mode === "edit" && (
                    <Button onClick={() => deleteCompany(id)} color="danger">
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
                                id={`company-${id}`}
                                name={`company-${id}`}
                                placeholder="Company Name"
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
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                id={`designation-${id}`}
                                name={`designation-${id}`}
                                placeholder="Designation"
                            />
                        ) : (
                            <>
                                <div className="info-title">Designation</div>
                                <div className="info-field">{designation}</div>
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
                                <div className="info-title">Year</div>
                                <div className="info-field">{year}</div>
                            </>
                        )}
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
};

export default Company;
