const asyncHandler = require('express-async-handler')
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require('./students-service')

const handleGetAllStudents = asyncHandler(async (req, res) => {
  const students = await getAllStudents()

  res.json({ students })
})

const handleAddStudent = asyncHandler(async (req, res) => {
  const { name, email, class_name, section_name, roll } = req.body
  const result = await addNewStudent({
    name,
    email,
    class_name,
    section_name,
    roll,
  })

  res.json(result)
})

const handleUpdateStudent = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { name, email, class_name, section_name, roll } = req.body
  const payload = { id, name, email, class_name, section_name, roll }
  const result = await updateStudent(payload)

  res.json(result)
})

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  const { id } = req.params
  const result = await getStudentDetail(id)

  res.json(result)
})

const handleStudentStatus = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { reviewerId, status } = req.body
  const result = await setStudentStatus({ id, reviewerId, status })

  res.json(result)
})

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
}
