import React, { useState } from "react";

function StudentReg() {
    const [data, setData] = useState({ name: "", tel: "", email: "" });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name == "" || data.tel == "" || data.email == "") {
            alert("Please fill all the fields");
        } else {
            alert(`Form submitted successfully by ${data.name}!`);
        }
        setData({ name: "", tel: "", email: "" });
    };

    return (
        <div>
            <h1>Student Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required value={data.name} /><br /><br />

                <label htmlFor="name">Mobile:</label>
                <input type="tel" id="tel" name="tel" required value={data.tel} /><br /><br />

                <label htmlFor="name">Email:</label>
                <input type="email" id="email" name="email" required value={data.email} /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default StudentReg;
