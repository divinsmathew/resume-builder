import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

const PersonalInfo = ({ mode, data, onChange }) => {
    return (
        <Row className="mb-2" form>
            <div className="primary-heading mb-2">Personal Info</div>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                id="first_name"
                                name="first_name"
                                placeholder="First Name"
                                value={data.firstName}
                                onChange={(e) =>
                                    onChange({
                                        ...data,
                                        firstName: e.target.value,
                                    })
                                }
                            />
                        ) : (
                            <div className="info-field">{data.firstName}</div>
                        )}
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="second_name">Second Name</Label>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                id="second_name"
                                name="second_name"
                                placeholder="Second Name"
                                value={data.secondName}
                                onChange={(e) =>
                                    onChange({
                                        ...data,
                                        secondName: e.target.value,
                                    })
                                }
                            />
                        ) : (
                            <div className="info-field">{data.secondName}</div>
                        )}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    onChange({ ...data, email: e.target.value })
                                }
                            />
                        ) : (
                            <div className="info-field">{data.email}</div>
                        )}
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                type="number"
                                value={data.phone}
                                onChange={(e) =>
                                    onChange({ ...data, phone: e.target.value })
                                }
                            />
                        ) : (
                            <div className="info-field">{data.phone}</div>
                        )}
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                id="address"
                                name="text"
                                placeholder="Address"
                                type="textarea"
                                value={data.address}
                                onChange={(e) =>
                                    onChange({
                                        ...data,
                                        address: e.target.value,
                                    })
                                }
                            />
                        ) : (
                            <div className="info-field">{data.address}</div>
                        )}
                    </FormGroup>
                </Col>
            </Row>
        </Row>
    );
};

export default PersonalInfo;
