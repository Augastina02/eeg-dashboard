import "./ConfigurationToolbar.css";

function ConfigurationToolbar() {

    return (

        <div className="config-toolbar">

            <button className="primary-btn">

                💾 Save Configuration

            </button>

            <button>

                📂 Load Configuration

            </button>

            <button>

                📤 Export JSON

            </button>

            <button>

                📥 Import JSON

            </button>

            <button className="danger-btn">

                🔄 Reset Defaults

            </button>

        </div>

    );

}

export default ConfigurationToolbar;