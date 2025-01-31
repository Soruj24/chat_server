const handleGetAllUsers = async (req, res) => {
    try {

        res.status(200).send("Get all users successfully");
        
        return res.status(200).json({
            success: true,
            message: "Get all users successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching users.",
        });
    }
};

module.exports = {
    handleGetAllUsers
};
