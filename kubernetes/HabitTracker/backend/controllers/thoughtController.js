const Thought = require('../models/thoughtModel');

const postThought = async (req, res) => {
  try {
    const { text } = req.body;
    const thought = new Thought({ text });
    await thought.save();
    res.status(201).send({ message: 'Thought saved.', thought });
  } catch (err) {
    res.status(400).send({ error: 'Failed to save thought.', details: err.message });
  }
};

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    if (thoughts.length === 0) {
      return res.status(404).send({ message: 'No thoughts found.' });
    }
    res.send(thoughts);
  } catch (err) {
    res.status(500).send({ error: 'Failed to get thoughts.', details: err.message });
  }
};

module.exports = { postThought, getThoughts };
