const patchTransformerConfig = {

  architecture: [

    {
      label: "Patch Size",
      key: "patch_size",
      type: "number",
      default: 50,
      min: 10,
      max: 200
    },

    {
      label: "Embedding Dimension",
      key: "d_model",
      type: "number",
      default: 128
    },

    {
      label: "Attention Heads",
      key: "n_heads",
      type: "number",
      default: 8
    },

    {
      label: "Transformer Layers",
      key: "n_layers",
      type: "number",
      default: 6
    },

    {
      label: "Feed Forward Expansion",
      key: "ffn_expansion",
      type: "number",
      default: 4
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
      default: 0.0001
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
      default: 0.10
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
      label: "Gradient Clipping",
      key: "gradient_clip",
      type: "number",
      default: 1.0
    }

  ],

  advanced: [

    {
      label: "Activation Function",
      key: "activation",
      type: "select",
      options: [
        "GELU",
        "ReLU",
        "ELU",
        "LeakyReLU"
      ],
      default: "GELU"
    },

    {
      label: "LayerNorm Epsilon",
      key: "layernorm_eps",
      type: "text",
      default: "1e-6"
    },

    {
      label: "Mixed Precision",
      key: "amp",
      type: "boolean",
      default: true
    }

  ]

};

export default patchTransformerConfig;