import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

const PersonalInfo = () => {
    return (
        <Row className="mb-2" form>
            <div className="primary-heading mb-2">Personal Info</div>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input
                            required
                            id="first_name"
                            name="first_name"
                            placeholder="First Name"
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="second_name">Second Name</Label>
                        <Input
                            required
                            id="second_name"
                            name="second_name"
                            placeholder="Second Name"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            required
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input
                            required
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="number"
                        />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input
                            id="address"
                            name="text"
                            placeholder="Address"
                            type="textarea"
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Row>
    );
};

export default PersonalInfo;
