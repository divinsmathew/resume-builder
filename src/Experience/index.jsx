import React from "react";
import { Button, Row } from "reactstrap";

import Company from "./Company";
import { nanoid } from "nanoid";

const Experience = ({ mode, companyList, onChange }) => {
    const addCompany = () => {
        onChange((companyList) => [
            ...companyList,
            { id: nanoid(), name: "", degree: "", year: "" },
        ]);
    };
    const deleteCompany = (id) => {
        onChange((companyList) =>
            companyList.filter((company) => company.id !== id)
        );
    };

    return (
        <>
            <Row className="divider">
                <span className="primary-heading mt-3">Experience</span>

                {companyList.length > 0 ? (
                    companyList.map((company, index) => (
                        <Company
                            key={company.id}
                            mode={mode}
                            data={company}
                            index={index}
                            deleteCompany={deleteCompany}
                            id={company.id}
                        />
                    ))
                ) : (
                    <div className="no-items">No experience added.</div>
                )}
            </Row>

            {(mode === "edit" || mode === "create") && (
                <Button className="mb-3" onClick={addCompany}>
                    Add Company
                </Button>
            )}
        </>
    );
};

export default Experience;
