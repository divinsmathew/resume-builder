import React, { useState } from "react";
import { Button, Row } from "reactstrap";

import Company from "./Company";
import { nanoid } from "nanoid";

const Experience = () => {
    const [companyList, setCompanyList] = useState([]);
    const addCompany = () => {
        setCompanyList((companyList) => [
            ...companyList,
            { id: nanoid(), name: "", degree: "", year: "" },
        ]);
    };
    const deleteCompany = (id) => {
        setCompanyList((companyList) =>
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
                            data={company}
                            key={company.id}
                            index={index}
                            deleteCompany={deleteCompany}
                            id={company.id}
                        />
                    ))
                ) : (
                    <div className="no-items">No items added.</div>
                )}
            </Row>

            <Button className="mb-3" onClick={addCompany}>
                Add Company
            </Button>
        </>
    );
};

export default Experience;
