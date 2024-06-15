import Problem from "../models/problem.model.js";

const createProblem = async (req, res) => {
  try {
    const problem = await Problem.create(req.body);
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProblems = async (req, res) => {
  try {
      const problem = await Problem.find({});
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPublicProblems = async (req, res) => {
  try {
      const problem = await Problem.find({ public: true});
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyProblems = async (req, res) => {
    try {
        const { email } = req.params;
    const problem = await Problem.find({ email });
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProblem = async(req, res) => {
    try {
        const { id } = req.params;
        const problem = await Problem.findById(id);
        res.status(200).json(problem);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export { createProblem, getProblem, getPublicProblems, getMyProblems, getProblems };
