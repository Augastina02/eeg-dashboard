const gnnConfig = {

  graphConstruction: [

    {
      label: "Graph Type",
      key: "graph_type",
      type: "select",
      options: [
        "Learned Graph",
        "Fixed Adjacency Matrix"
      ],
      default: "Learned Graph"
    },

    {
      label: "Edge Construction",
      key: "edge_method",
      type: "select",
      options: [
        "Correlation",
        "KNN",
        "Distance",
        "Fully Connected"
      ],
      default: "Correlation"
    },

    {
      label: "Edge Threshold",
      key: "edge_threshold",
      type: "number",
      default: 0.70,
      step: 0.01
    },

    {
      label: "Graph Normalization",
      key: "graph_normalization",
      type: "boolean",
      default: true
    }

  ],

  architecture: [

    {
      label: "Hidden Channels",
      key: "hidden_dim",
      type: "number",
      default: 128
    },

    {
      label: "Graph Layers",
      key: "n_layers",
      type: "number",
      default: 3
    },

    {
      label: "Pooling Method",
      key: "pooling",
      type: "select",
      options: [
        "Global Mean",
        "Global Max",
        "Global Sum",
        "Attention Pooling"
      ],
      default: "Global Mean"
    },

    {
      label: "Activation",
      key: "activation",
      type: "select",
      options: [
        "ReLU",
        "GELU",
        "ELU",
        "LeakyReLU"
      ],
      default: "ReLU"
    }

  ],

  training: [

    {
      label: "Epochs",
      key: "epochs",
      type: "number",
      default: 50
    },

    {
      label: "Batch Size",
      key: "batch_size",
      type: "number",
      default: 32
    },

    {
      label: "Learning Rate",
      key: "learning_rate",
      type: "number",
      default: 0.001
    },

    {
      label: "Optimizer",
      key: "optimizer",
      type: "select",
      options: [
        "Adam",
        "AdamW",
        "SGD",
        "RMSProp"
      ],
      default: "Adam"
    },

    {
      label: "Scheduler",
      key: "scheduler",
      type: "select",
      options: [
        "None",
        "StepLR",
        "CosineAnnealing",
        "ReduceLROnPlateau"
      ],
      default: "None"
    }

  ],

  regularization: [

    {
      label: "Dropout",
      key: "dropout",
      type: "number",
      default: 0.30
    },

    {
      label: "Weight Decay",
      key: "weight_decay",
      type: "number",
      default: 0.0001
    },

    {
      label: "Early Stopping Patience",
      key: "patience",
      type: "number",
      default: 10
    },

    {
      label: "Mixed Precision",
      key: "amp",
      type: "boolean",
      default: true
    }

  ]

};

export default gnnConfig;