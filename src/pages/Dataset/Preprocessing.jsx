import "./Preprocessing.css";

function Preprocessing() {
  return (
    <div className="preprocessing-page">

      <h2>EEG Preprocessing Configuration</h2>

      <div className="preprocessing-grid">

        <div className="check-item">
          <input type="checkbox" defaultChecked />
          <label>Bandpass Filter</label>
        </div>

        <div className="check-item">
          <input type="checkbox" defaultChecked />
          <label>Notch Filter (50/60 Hz)</label>
        </div>

        <div className="check-item">
          <input type="checkbox" defaultChecked />
          <label>Z-Score Normalization</label>
        </div>

        <div className="check-item">
          <input type="checkbox" />
          <label>Artifact Removal</label>
        </div>

        <div className="check-item">
          <input type="checkbox" defaultChecked />
          <label>Windowing</label>
        </div>

        <div className="check-item">
          <input type="checkbox" />
          <label>Baseline Correction</label>
        </div>

      </div>

      <div className="parameter-grid">

        <div className="parameter-item">
          <label>Low Cut Frequency (Hz)</label>
          <input type="number" defaultValue="0.5" step="0.1"/>
        </div>

        <div className="parameter-item">
          <label>High Cut Frequency (Hz)</label>
          <input type="number" defaultValue="70"/>
        </div>

        <div className="parameter-item">
          <label>Notch Frequency</label>
          <select>
            <option>50 Hz</option>
            <option>60 Hz</option>
          </select>
        </div>

        <div className="parameter-item">
          <label>Window Size (Seconds)</label>
          <input type="number" defaultValue="10"/>
        </div>

        <div className="parameter-item">
          <label>Window Overlap (Seconds)</label>
          <input type="number" defaultValue="5"/>
        </div>

        <div className="parameter-item">
          <label>Sampling Frequency</label>
          <select>
            <option>250 Hz</option>
            <option>256 Hz</option>
            <option>512 Hz</option>
          </select>
        </div>

      </div>

      <button className="save-btn">
        Save Preprocessing Configuration
      </button>

    </div>
  );
}

export default Preprocessing;