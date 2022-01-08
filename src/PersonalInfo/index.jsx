import React, { useState } from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

const PersonalInfo = ({ mode }) => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        ) : (
                            <div className="info-field">{firstName}</div>
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
                                value={secondName}
                                onChange={(e) => setSecondName(e.target.value)}
                            />
                        ) : (
                            <div className="info-field">{secondName}</div>
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        ) : (
                            <div className="info-field">{email}</div>
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
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        ) : (
                            <div className="info-field">{phone}</div>
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
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        ) : (
                            <div className="info-field">{address}</div>
                        )}
                    </FormGroup>
                </Col>
            </Row>
        </Row>
    );
};

export default PersonalInfo;
