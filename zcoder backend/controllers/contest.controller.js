import Contest from "../models/contest.model.js"

const createContest = async (req, res) => {
    try {

        const contest = await Contest.create(req.body);
        res.status(200).json(contest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getContest = async (req, res) => {
  try {
    const contest = await Contest.find({});
    res.status(200).json(contest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createContest, getContest };