module.exports.home = async (req, res)=>{
    try {
        return res.status(200).json({
            message: "This the home page!!",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!!",
            error
        })
    }
}
