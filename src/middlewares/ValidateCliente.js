/* Nome , Preço e Quantidade -> String */

const validateCliente = (req, res, next) => {
    const  { nome, cpf, rg } = req.body;

    /* preenchimdo / nao preenchido */
    if (!nome || !cpf  || !rg) {
        return res.status(400).json({
            msg: "Campos invalidos, revise caro amigo.",
        });
    }


 /* pode avançar */
    return next ();
};

const validateClientetId = (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        return res.status(400).json({
            msg: "Parametro faltando",
        });
    }

    /* Pode avançar */
    return next();
};

module.exports = { validateCliente , validateClientetId };

