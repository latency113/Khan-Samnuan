const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient


exports.getEvent = async (req,res) => {
    const event = await prisma.event.findMany({
        include: {
            camera:true
        }
    })
    res.json(event)
}

exports.getEventId = async (req,res) => {
    const { id } = req.params;
    const event = await prisma.event.findUnique({
        where:{
            id:id
        },
        include: {
            camera:true
        }
    })
    res.json(event)
}

exports.createEvent = async (req,res) => {
    const { amount,camera_id } = req.body;
    const events = await prisma.event.create({
        data: {
            amount:amount,
            camera_id:camera_id,
        },
    })
    res.json(events)
}