import Comment from "../models/comment.model.js";

const createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getComments = async (req, res) => {
  try {
    const comment = await Comment.find({});
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionComments = async (req, res) => {
    try {
      const { questionId } = req.params;
    const comment = await Comment.find({ questionId});
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserComments = async (req, res) => {
  try {
    const { email } = req.params;
    const comment = await Comment.find({ email });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createComment, getComment, getComments, getUserComments, getQuestionComments };