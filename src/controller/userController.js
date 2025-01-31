const handleGetAllUsers = async (req, res) => {
    try {
        // Only send the JSON response, no need for res.send()
        return res.status(200).json({
            success: true,
            message: "Get all users successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching users.",
        });
    }
};

module.exports = {
    handleGetAllUsers
};
