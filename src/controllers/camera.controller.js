const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient


exports.getCamera = async (req,res) => {
    const camaras = await prisma.camera.findMany({
        include: {
            event:true
        },
    })
    res.json(camaras)
}

exports.getCameraId = async (req,res) => {
    const { id } = req.params;
    const cameras = await prisma.camera.findUnique({
        where: {
            id:id
        },
        include: {
            event:true
        }
    })
    res.json(cameras)
}

exports.getCameraIp = async (req,res) => {
    const { ip } = req.params;
    const cameras = await prisma.camera.findMany({
        where: {
            ip_address:ip
        },
        include: {
            event:true
        },
    })
    res.json(cameras)
}

exports.createCamera = async (req,res) => {
    const { ip_address,name,location } = req.body;
    const cameras = await prisma.camera.create({
        data: {
            ip_address: ip_address,
            name:name,
            location:location
        },
    })
    res.json(cameras)
}