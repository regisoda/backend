import bodyParser from "body-parser"
import cors from "cors"
import express, { Request, Response } from "express"
import { prismaClient } from "./middlewares/connection"

const PORT = "https://keyteambackend.herokuapp.com" || 3000

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/student', function (request: Request, response: Response) {
    prismaClient.student.findMany().then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.get('/teacher', function (request: Request, response: Response) {
    prismaClient.teacher.findMany().then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.get('/course', function (request: Request, response: Response) {
    prismaClient.course.findMany().then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.get('/user', function (request: Request, response: Response) {
    prismaClient.user.findMany().then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.post('/student', function (request: Request, response: Response) {
    const { user_id, name } = request.body
    prismaClient.student.create({
        data: {
            name: name,
            user_id: user_id
        }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.post('/teacher', function (request: Request, response: Response) {
    const { user_id, name } = request.body
    prismaClient.teacher.create({
        data: {
            name: name,
            user_id: user_id
        }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.post('/course', function (request: Request, response: Response) {
    const { title } = request.body
    prismaClient.course.create({
        data: {
            title: title,
        }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.post('/user', function (request: Request, response: Response) {
    const { email, password } = request.body
    prismaClient.user.create({
        data: {
            email: email,
            password: password
        }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.put('/student', function (request: Request, response: Response) {
    const { id, name } = request.body
    prismaClient.student.update({
        where: { id: id },
        data: {
            name: name
        }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.put('/teacher', function (request: Request, response: Response) {
    const { id, name } = request.body
    prismaClient.teacher.update({
        where: { id: id },
        data: {
            name: name
        }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.put('/course', function (request: Request, response: Response) {
    const { id, title } = request.body
    prismaClient.course.update({
        where: { id: id },
        data: {
            title: title
        }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.put('/user', function (request: Request, response: Response) {
    const { id, password } = request.body
    prismaClient.user.update({
        where: { id: id },
        data: {
            password: password
        }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.delete('/student', function (request: Request, response: Response) {
    const { id } = request.body
    prismaClient.student.delete({
        where: { id: id }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.delete('/teacher', function (request: Request, response: Response) {
    const { id } = request.body
    prismaClient.teacher.delete({
        where: { id: id }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.delete('/course', function (request: Request, response: Response) {
    const { id } = request.body
    prismaClient.course.delete({
        where: { id: id }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})

app.delete('/user', function (request: Request, response: Response) {
    const { id } = request.body
    prismaClient.user.delete({
        where: { id: id }
    }).then(
        r => response.json(r)
    ).catch(
        r => response.status(501).json({
            error: r
        })
    )
})


app.listen(PORT)