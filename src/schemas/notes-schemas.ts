import Joi from "joi";

export const noteSchema = Joi.object({
  name: Joi.string().required().max(50),
  category: Joi.string().valid("Idea", "Task", "Random Thought").required(),
  content: Joi.string().required().max(1000),
}).required();

export const editedNoteSchema = Joi.object({
  name: Joi.string().max(50),
  category: Joi.string().valid("Idea", "Task", "Random Thought"),
  content: Joi.string().max(1000),
  archived: Joi.boolean(),
}).required();
