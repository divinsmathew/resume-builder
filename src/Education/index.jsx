import React, { useState } from "react";
import { Button, Row } from "reactstrap";

import Institute from "./Institute";
import { nanoid } from "nanoid";

const Education = () => {
    const [institutionList, setInstitutionList] = useState([]);

    const addInstitute = () => {
        setInstitutionList((institutionList) => [
            ...institutionList,
            { id: nanoid() },
        ]);
    };
    const deleteInstitute = (id) => {
        setInstitutionList((institutionList) =>
            institutionList.filter((institute) => institute.id !== id)
        );
    };
    return (
        <>
            <Row className="divider">
                <div className="primary-heading mt-3">Education</div>

                {institutionList.length > 0 ? (
                    institutionList.map((institution, index) => (
                        <Institute
                            data={institution}
                            key={institution.id}
                            index={index}
                            deleteInstitute={deleteInstitute}
                            id={institution.id}
                        />
                    ))
                ) : (
                    <div className="no-items">No items added.</div>
                )}
            </Row>

            <Button className="mb-3" onClick={addInstitute}>
                Add Institute
            </Button>
        </>
    );
};

export default Education;
