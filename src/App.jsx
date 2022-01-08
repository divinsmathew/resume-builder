import "./App.scss";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

import React, { useEffect, useState } from "react";
import { Button, Form, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

function App({ initialMode }) {
    const navigate = useNavigate();
    const [skillList, setSkillList] = useState([]);
    const [mode, setMode] = useState(initialMode);

    const onSkillChange = (value) => setSkillList(value);

    const editResume = () => setMode("edit");

    const viewResume = () => setMode("view");

    useEffect(() => {
        navigate("/" + mode);
    }, [mode]);

    return (
        <Container className="mb-5">
            <div className="App">
                <Header />
                <Form>
                    <PersonalInfo mode={mode} />
                    <Education mode={mode} />
                    <Experience mode={mode} />
                    <Skills
                        mode={mode}
                        skillList={skillList}
                        onChange={onSkillChange}
                    />

                    <div className="button-holder">
                        <Button outline>Create New</Button>
                        <Button
                            onClick={() => {
                                mode === "edit" || mode === "create"
                                    ? viewResume()
                                    : editResume();
                            }}
                            color="primary"
                        >
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
