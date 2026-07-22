import { useState } from "react";

import "./ModelSelection.css";

import PatchParameters from "../../components/models/PatchParameters";
import GNNParameters from "../../components/models/GNNParameters";

function ModelSelection() {

    const [selectedModel, setSelectedModel] = useState("patch");

    return (

        <div className="model-page">

            <h1>Model Selection</h1>

            <p>Select a Deep Learning Model</p>

            <div className="model-buttons">

                <button

                    className={selectedModel==="patch" ? "active" : ""}

                    onClick={()=>setSelectedModel("patch")}

                >

                    Patch Transformer

                </button>

                <button

                    className={selectedModel==="gnn" ? "active" : ""}

                    onClick={()=>setSelectedModel("gnn")}

                >

                    Graph Neural Network

                </button>

            </div>

            <div className="parameter-panel">

                {

                    selectedModel==="patch"

                    ?

                    <PatchParameters/>

                    :

                    <GNNParameters/>

                }

            </div>

        </div>

    );

}

export default ModelSelection;