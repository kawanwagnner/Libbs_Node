/* Nome , Preço e Quantidade -> String */

const validateProduct = (req, res, next) => {
    const  { nome, preco, quantidade } = req.body;

    /* preenchimdo / nao preenchido */
    if (!nome || !preco  || !quantidade) {
        return res.status(400).json({
            msg: "Campos invalidos, revise caro amigo.",
        });
    }


 /* pode avançar */
    return next ();
};

const validateProductId = (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        return res.status(400).json({
            msg: "Parametro faltando",
        });
    }

    /* Pode avançar */
    return next();
};

module.exports = { validateProduct , validateProductId };

