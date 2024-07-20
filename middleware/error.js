const errorHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json({ meg: err.message });
    } else {
        res.status(500).json({ meg: err.message });
    }
};

export default errorHandler;
