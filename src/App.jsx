import "./App.scss";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

import React from "react";
import { Button, Form, Container } from "reactstrap";

function App() {
    return (
        <Container className="mb-5">
            <div className="App">
                <Header />

                <Form>
                    <PersonalInfo />
                    <Education />
                    <Experience />
                    <Skills />

                    <Button color="primary" className="create-button">
                        Create!
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default App;
