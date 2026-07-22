function DynamicParameter({ parameter }) {

    if (!parameter) return null;

    switch (parameter.type) {

        case "number":

            return (

                <div className="parameter-item">

                    <label>{parameter.label}</label>

                    <input

                        type="number"

                        defaultValue={parameter.default}

                        min={parameter.min}

                        max={parameter.max}

                        step={parameter.step || 1}

                    />

                </div>

            );

        case "text":

            return (

                <div className="parameter-item">

                    <label>{parameter.label}</label>

                    <input

                        type="text"

                        defaultValue={parameter.default}

                    />

                </div>

            );

        case "select":

            return (

                <div className="parameter-item">

                    <label>{parameter.label}</label>

                    <select defaultValue={parameter.default}>

                        {(parameter.options || []).map(option => (

                            <option

                                key={option}

                                value={option}

                            >

                                {option}

                            </option>

                        ))}

                    </select>

                </div>

            );

        case "boolean":

            return (

                <div className="parameter-item">

                    <label>{parameter.label}</label>

                    <input

                        type="checkbox"

                        defaultChecked={parameter.default}

                    />

                </div>

            );

        default:

            return null;

    }

}

export default DynamicParameter;