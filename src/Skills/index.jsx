import React from "react";
import { FormGroup, Col } from "reactstrap";
import CreatableSelect from "react-select/creatable";

import { skillOptions } from "./constants";
const Skills = () => (
    <Col md={12} className="divider">
        <div className="primary-heading mt-4 mb-3">Skills</div>
        <FormGroup>
            <CreatableSelect
                name="skills"
                isMulti
                placeholder="Enter your skills"
                options={skillOptions}
            />
        </FormGroup>
    </Col>
);

export default Skills;
