import React from "react";
import { FormGroup, Col } from "reactstrap";
import CreatableSelect from "react-select/creatable";

import { skillOptions } from "./constants";

const Skills = ({ onChange, skillList, mode }) => (
    <Col md={12} className="divider">
        <div className="primary-heading mt-4 mb-3">Skills</div>
        <FormGroup>
            {mode === "edit" ? (
                <CreatableSelect
                    name="skills"
                    isMulti
                    placeholder="Enter your skills"
                    options={skillOptions}
                    onChange={onChange}
                    value={skillList}
                />
            ) : (
                <div className="info-field">
                    {skillList.map((skill) => skill.label).join(", ")}
                </div>
            )}
        </FormGroup>
    </Col>
);

export default Skills;
