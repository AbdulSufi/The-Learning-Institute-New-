import React from "react";

export default function Vetting() {
    return (
        <>
            <div className="vetting-container">
                <h1>Our Vetting Process</h1>
                <p>
                    At The Learning Institute, we are dedicated to maintaining the highest
                    standards of education and safety. Our comprehensive vetting process
                    ensures that every tutor and teacher we recruit meets rigorous
                    criteria. Our checks include:
                    
                    This meticulous vetting process ensures that only the most qualified
                    and trustworthy educators join our team, providing a safe and
                    high-quality learning environment for all students.
                </p>
            </div>

            <div className="vettings-items">
                <div className="items">
                    <h1>Step 1</h1>
                    <h3>In-depth Interviews</h3>
                    <p>
                        {" "}
                        We conduct thorough interviews to assess the suitability of
                        candidates for teaching positions.
                    </p>
                </div>

                <div className="items">
                    <h1>Step 2</h1>
                    <h3>DBS Check</h3>
                    <p>
                        {" "}
                        Enhanced DBS certificates, which are valid for one year.
                        Candidates must update their certificate online within 14 days of the Disclosure Date.
                    </p>
                </div>

                <div className="items">
                    <h1>Step 3</h1>
                    <h3>Proof of Identification</h3>
                    <p>
                        {" "}
                        Verification of identity through valid passports and driver's licenses.
                    </p>
                </div>

                <div className="items">
                    <h1>Step 4</h1>
                    <h3>Professional References</h3>
                    <p>
                        {" "}
                        Critical assessment of the two most recent professional references,
                        dated within two years of the registration date.
                    </p>
                </div>
            </div>

            <div className="vettings-items">
                <div className="items">
                    <h1>Step 5</h1>
                    <h3>Proof of Qualifications</h3>
                    <p>
                        {" "}
                        Verification of academic and professional qualifications as per recruitment agency standards.
                    </p>
                </div>

                <div className="items">
                    <h1>Step 6</h1>
                    <h3>Right to Work in the UK</h3>
                    <p>
                        {" "}
                        Confirmation of eligibility to work in the UK, including visa verification.
                    </p>
                </div>

                <div className="items">
                    <h1>Step 7</h1>
                    <h3>Proof of Address</h3>
                    <p>
                        {" "}
                        Submission of two valid proofs of address.
                    </p>
                </div>

                <div className="items">
                    <h1>Step 8</h1>
                    <h3>Safeguarding Training</h3>
                    <p>
                        {" "}
                        We provide in-depth Level 2 safeguarding training to all teachers.
                    </p>
                </div>
            </div>

        </>
    );
}
