import "./Dashboard.css";

import OverviewCard from "../../components/dashboard/OverviewCard";

function Dashboard() {

    return (

        <div className="dashboard">

            <div className="dashboard-title">

                <h1>EEG Research Dashboard</h1>

                <p>

                    Deep Learning Framework for EEG Seizure Detection and Classification

                </p>

            </div>

            <div className="overview-grid">

                <OverviewCard
                    title="Dataset"
                    value="346"
                    subtitle="EEG Recordings"
                />

                <OverviewCard
                    title="Selected Model"
                    value="GNN"
                    subtitle="Graph Neural Network"
                />

                <OverviewCard
                    title="Training Status"
                    value="Idle"
                    subtitle="Ready to Train"
                />

                <OverviewCard
                    title="Accuracy"
                    value="--"
                    subtitle="No Results"
                />

            </div>

        </div>

    );

}

export default Dashboard;