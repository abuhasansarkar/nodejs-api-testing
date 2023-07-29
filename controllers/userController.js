import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

/** ==============
 * @DESC Get all users Data
 * @ROUTE /api/v1/user
 * @Method GET
 * @access public
 */

export const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();

  if (users.length === 0) {
    return res.status(404).json({ message: 'User data is not found !' });
  }

  res.status(200).json(users);
});

/** ==============
 * @DESC Get Single users Data
 * @ROUTE /api/v1/user/:id
 * @Method GET
 * @access public
 */

export const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: 'User data is not found !' });
  }

  res.status(200).json(user);
});

/** ==============
 * @DESC Create users Data
 * @ROUTE /api/v1/user
 * @Method POST
 * @access public
 */

export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, gender } = req.body;

  if (!name || !email || !password || !phone || !gender) {
    return res.status(400).json({ message: 'All Fields are Required' });
  }

  const user = User.create({ name, email, password, phone, gender });

  res.status(200).json(user);
});

/** ==============
 * @DESC Update users Data
 * @ROUTE /api/v1/user
 * @Method PUT/ PATCH
 * @access public
 */

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, password, phone, gender } = req.body;

  if (!name || !email || !password || !phone || !gender) {
    return res.status(400).json({ message: 'All Fields are Required' });
  }

  const user = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      password,
      phone,
      gender,
    },
    {
      new: true,
    }
  );

  res.status(200).json(user);
});

/** ==============
 * @DESC Delete users Data
 * @ROUTE /api/v1/user/:id
 * @Method GET
 * @access public
 */

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  res.status(200).json(user);
});
