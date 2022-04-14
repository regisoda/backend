"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const connection_1 = require("./middlewares/connection");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get('/student', function (request, response) {
    connection_1.prismaClient.student.findMany().then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.get('/teacher', function (request, response) {
    connection_1.prismaClient.teacher.findMany().then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.get('/course', function (request, response) {
    connection_1.prismaClient.course.findMany().then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.get('/user', function (request, response) {
    connection_1.prismaClient.user.findMany().then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.post('/student', function (request, response) {
    const { user_id, name } = request.body;
    connection_1.prismaClient.student.create({
        data: {
            name: name,
            user_id: user_id
        }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.post('/teacher', function (request, response) {
    const { user_id, name } = request.body;
    connection_1.prismaClient.teacher.create({
        data: {
            name: name,
            user_id: user_id
        }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.post('/course', function (request, response) {
    const { title } = request.body;
    connection_1.prismaClient.course.create({
        data: {
            title: title,
        }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.post('/user', function (request, response) {
    const { email, password } = request.body;
    connection_1.prismaClient.user.create({
        data: {
            email: email,
            password: password
        }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.put('/student', function (request, response) {
    const { id, name } = request.body;
    connection_1.prismaClient.student.update({
        where: { id: id },
        data: {
            name: name
        }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.put('/teacher', function (request, response) {
    const { id, name } = request.body;
    connection_1.prismaClient.teacher.update({
        where: { id: id },
        data: {
            name: name
        }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.put('/course', function (request, response) {
    const { id, title } = request.body;
    connection_1.prismaClient.course.update({
        where: { id: id },
        data: {
            title: title
        }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.put('/user', function (request, response) {
    const { id, password } = request.body;
    connection_1.prismaClient.user.update({
        where: { id: id },
        data: {
            password: password
        }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.delete('/student', function (request, response) {
    const { id } = request.body;
    connection_1.prismaClient.student.delete({
        where: { id: id }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.delete('/teacher', function (request, response) {
    const { id } = request.body;
    connection_1.prismaClient.teacher.delete({
        where: { id: id }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.delete('/course', function (request, response) {
    const { id } = request.body;
    connection_1.prismaClient.course.delete({
        where: { id: id }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.delete('/user', function (request, response) {
    const { id } = request.body;
    connection_1.prismaClient.user.delete({
        where: { id: id }
    }).then(r => response.json(r)).catch(r => response.status(501).json({
        error: r
    }));
});
app.listen(PORT, () => {
    console.log("Loading...");
});
