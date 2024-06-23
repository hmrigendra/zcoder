import Profile from "../models/profile.model.js";
import Problem from "../models/problem.model.js";

const createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const updateProfile = async (req, res) => {
    try {
        const { email, ...updateData } = req.body;
        const profile = await Profile.findOneAndUpdate({email: email}, {$set: updateData}, {new: true, runValidators: true});
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getProfile = async (req, res) => {
  try {
    const email = req.params.email;
    const profile = await Profile.find({email: email});
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSavedProblem = async (req, res) => {
  try {
    const { email, saveProblem } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { email: email },
        { $push: { savedProblems: saveProblem} },
      { new: true, runValidators: true }
    );
    res.status(200).json(profile.savedProblems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSavedProblem = async (req, res) => {
  try {
    const { email } = req.params;
    const profile = await Profile.findOne({ email: email });

        if (!profile.savedProblems || profile.savedProblems.length === 0) {
          return res.status(200).json([]); // Return empty array if no saved problems
    }
    
    const savedProblems = await Problem.find({_id: {$in: profile.savedProblems}})
    res.status(200).json(savedProblems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createProfile, updateProfile, getProfile, updateSavedProblem, getSavedProblem };