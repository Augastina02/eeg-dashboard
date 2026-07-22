import { useState } from "react";
import DynamicParameter from "./DynamicParameter";
import "./ParameterSection.css";

function ParameterSection({ title, parameters = [] }) {

    const [open, setOpen] = useState(true);

    return (

        <div className="parameter-card">

            <div
                className="parameter-header"
                onClick={() => setOpen(!open)}
            >

                <h3>{title}</h3>

                <span className="arrow">

                    {open ? "▼" : "▶"}

                </span>

            </div>

            {

                open && (

                    <div className="parameter-body">

                        <div className="parameter-grid">

                            {

                                parameters.map(parameter => (

                                    <DynamicParameter

                                        key={parameter.key}

                                        parameter={parameter}

                                    />

                                ))

                            }

                        </div>

                    </div>

                )

            }

        </div>

    );

}

export default ParameterSection;