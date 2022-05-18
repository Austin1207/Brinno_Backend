import DataMessage from "../models/dataMessage.js";

export const getDatas = async (req, res) => {
    try {
        const dataMessages = await DataMessage.find();

        res.status(200).json(dataMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createData = async (req, res) => {
    const data = req.body;
    const newData = new DataMessage(data);

    try {
        await newData.save();

        res.status(201).json(newData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//待加入user_id
// export const putData = async (req, res) => {
//     const data = req.body;
//     const newData = new DataMessage(data);

//     try {
//         await newData.save();

//         res.status(201).json(newData);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

// export const deleteData = async (req, res) => {
//     const data = req.body;
//     const newData = new DataMessage(data);

//     try {
//         await newData.save();

//         res.status(201).json(newData);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }
