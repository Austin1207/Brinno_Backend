import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
    unit: String,
    layers: {},
    grids: {},
    selectedLayer: String,
    groups: {},
    width: Number,
    height: Number,
    meta: {},
    guides: {},
});

const DataMessage = mongoose.model('DataMessage', dataSchema);

export default DataMessage;