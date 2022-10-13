const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc Get User tickets
// @route  GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Get Tickets' })
})

// @desc Create new Ticket
// @route POST /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'CreateTicket' })
})

module.exports = {
    getTickets, createTicket
}