import ConnectionRequest from "../models/connectionRequest.model.js";

export const sendConnectionRequest = async (req, res) => {
	try {
		const { userId } = req.params;
		const senderId = req.user._id;

		if (senderId.toString() === userId) {
			return res.status(400).json({ message: "You can't send a request to yourself" });
		}

		if (req.user.connections.includes(userId)) {
			return res.status(400).json({ message: "You are already connected" });
		}

		const existingRequest = await ConnectionRequest.findOne({
			sender: senderId,
			recipient: userId,
			status: "pending",
		});

		if (existingRequest) {
			return res.status(400).json({ message: "A connection request already exists" });
		}

		const newRequest = new ConnectionRequest({
			sender: senderId,
			recipient: userId,
		});

		await newRequest.save();

		res.status(201).json({ message: "Connection request sent successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
