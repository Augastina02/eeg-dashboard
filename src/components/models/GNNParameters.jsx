import "./GNNParameters.css";

import ConfigurationToolbar from "./ConfigurationToolbar";

import ParameterSection from "../common/ParameterSection";

import gnnConfig from "../../config/gnnConfig";

function GNNParameters() {

    return (

        <div className="parameter-container">

            <h2 className="parameter-title">

                Graph Neural Network Configuration

            </h2>

            <ConfigurationToolbar />

            <ParameterSection

                title="Graph Construction"

                parameters={gnnConfig.graphConstruction}

            />

            <ParameterSection

                title="Architecture"

                parameters={gnnConfig.architecture}

            />

            <ParameterSection

                title="Training"

                parameters={gnnConfig.training}

            />

            <ParameterSection

                title="Regularization"

                parameters={gnnConfig.regularization}

            />

            <div className="save-section">

                <button className="save-button">

                    Save GNN Configuration

                </button>

            </div>

        </div>

    );

}

export default GNNParameters;