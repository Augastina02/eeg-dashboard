import "./Dataset.css";
import Preprocessing from "./Preprocessing";
function Dataset() {

  return (

    <div className="dataset-page">

      <h1>Dataset Configuration</h1>

      <p>
        Configure EEG dataset and preprocessing parameters.
      </p>

      <div className="dataset-card">

        <div className="form-group">
          <label>Training Dataset</label>
          <input
            type="text"
            placeholder="Select Training Dataset Folder"
          />
        </div>

        <div className="form-group">
          <label>Testing Dataset</label>
          <input
            type="text"
            placeholder="Select Testing Dataset Folder"
          />
        </div>

        <div className="form-group">
          <label>Validation Split</label>

          <select>

            <option>10%</option>
            <option>20%</option>
            <option>30%</option>

          </select>

        </div>

        <div className="form-group">
          <label>Window Length (Seconds)</label>

          <input
            type="number"
            defaultValue="10"
          />

        </div>

        <div className="form-group">
          <label>Window Overlap (Seconds)</label>

          <input
            type="number"
            defaultValue="5"
          />

        </div>

        <div className="form-group">
          <label>Sampling Frequency</label>

          <select>

            <option>250 Hz</option>

            <option>256 Hz</option>

            <option>512 Hz</option>

          </select>

        </div>

        <div className="form-group">
          <label>Normalization</label>

          <select>

            <option>Z-Score</option>

            <option>Min-Max</option>

            <option>None</option>

          </select>

        </div>

        <div className="form-group">

          <label>Channel Configuration</label>

          <select>

            <option>21 Channels</option>

            <option>19 Channels</option>

            <option>Custom</option>

          </select>

        </div>

      </div>

      <button className="save-btn">
        <Preprocessing />

        Save Dataset Configuration

      </button>

    </div>

  );

}

export default Dataset;