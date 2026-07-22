import "./PatchParameters.css";

import ConfigurationToolbar from "./ConfigurationToolbar";

import ParameterSection from "../common/ParameterSection";

import patchTransformerConfig from "../../config/patchTransformerConfig";

function PatchParameters() {

    return (

        <div className="parameter-container">

            <h2 className="parameter-title">

                Patch Transformer Configuration

            </h2>

            <ConfigurationToolbar />

            <ParameterSection

                title="Architecture"

                parameters={patchTransformerConfig.architecture}

            />

            <ParameterSection

                title="Training"

                parameters={patchTransformerConfig.training}

            />

            <ParameterSection

                title="Regularization"

                parameters={patchTransformerConfig.regularization}

            />

            <ParameterSection

                title="Advanced"

                parameters={patchTransformerConfig.advanced}

            />

            <div className="save-section">

                <button className="save-button">

                    Save Patch Transformer Configuration

                </button>

            </div>

        </div>

    );

}

export default PatchParameters;