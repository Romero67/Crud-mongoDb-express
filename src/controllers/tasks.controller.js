const Task = require('../models/Task');

export const renderTasks = async(req, res) =>{
 const tasks = await Task.find().lean();
 res.render('index.hbs', {tasks});
}

export const createTask = async(req, res) =>{
 try {
  const task = Task(req.body);
  await task.save();
  res.redirect('/');
 } catch (error) {
  console.log(error)
 }
}

export const renderTaskEdit = async(req, res) =>{
 try {
  const task = await Task.findById(req.params.id).lean();
  console.log(task);
  res.render("edit.hbs", {task});
 } catch (error) {
  console.log(error.message);
 }
}

export const editTask = async (req, res) =>{
 try {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
 } catch (error) {
  console.log(error.message);
 }
}

export const deleteTask = async (req, res) =>{
 try {
  await Task.findByIdAndDelete(req.params.id, req.body);
  res.redirect('/');
 } catch (error) {
  console.log(error.message);
 }
}

export const taskToggleDone = async (req, res) =>{
 try {
  const task = await Task.findById(req.params.id);
  task.done = !task.done;
  task.save();
  res.redirect('/');
 } catch (error) {
  console.log(error.message);
 }
}