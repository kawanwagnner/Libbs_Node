/* Nome , Email e senha -> String */

const validateUser = (req, res, next) => {
    const  { nome, email, senha } = req.body;

    /* preenchimdo / nao preenchido */
    if (!nome || !email  || !senha) {
        return res.status(400).json({
            msg: "Campos invalidos, revise caro amigo.",
        });
    }


 /* pode avançar */
    return next ();
};

const validateUserId = (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        return res.status(400).json({
            msg: "Parametro faltando",
        });
    }

    return next();
};

module.exports = { validateUser , validateUserId };

