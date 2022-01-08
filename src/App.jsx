import "./App.scss";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

import React, { useEffect, useState } from "react";
import { Button, Form, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { defaultPersonalInfo } from "./constants";

function App({ initialMode }) {
    const navigate = useNavigate();
    const [skillList, setSkillList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [institutionList, setInstitutionList] = useState([]);
    const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
    const [mode, setMode] = useState(initialMode);

    const onSkillChange = (value) => setSkillList(value);

    const editResume = () => setMode("edit");

    const viewResume = () => setMode("view");

    const createNew = () => {
        clearForm();
        setMode("create");
    };
    const clearForm = () => {
        setPersonalInfo(defaultPersonalInfo);
        setCompanyList([]);
        setInstitutionList([]);
        setSkillList([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mode === "edit" || mode === "create" ? viewResume() : editResume();
    };

    useEffect(() => navigate("/" + mode), [mode]);

    return (
        <Container className="mb-5 mt-2">
            <div className="App">
                <Header />
                <Form onSubmit={handleSubmit}>
                    <PersonalInfo
                        data={personalInfo}
                        onChange={setPersonalInfo}
                        mode={mode}
                    />

                    <Education
                        institutionList={institutionList}
                        onChange={setInstitutionList}
                        mode={mode}
                    />
                    <Experience
                        companyList={companyList}
                        onChange={setCompanyList}
                        mode={mode}
                    />
                    <Skills
                        mode={mode}
                        skillList={skillList}
                        onChange={onSkillChange}
                    />

                    <div className="divider mt-4"></div>

                    <div className="button-holder">
                        <Button onClick={createNew} type="reset" outline>
                            Create New
                        </Button>
                        <Button type="submit" color="primary">
                            {mode === "edit" || mode === "create"
                                ? "Save"
                                : "Edit"}
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default App;
