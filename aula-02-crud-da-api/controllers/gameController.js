//Importando o Service
import gameService from "../services/gameService.js";


const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({games : games})

    }catch (error) {
        console.log(error)
        res.status(500).json({error : 'Erro interno do servidor'})
    }
}

//Função para tratar a requisição de cadastrar um jogo
const createGame = async(req,res) => {
    try{

        const {title, platform, year, price} = req.body
        //coletando os dados do corpo da requisição
        await gameService.Create(title, platform, year, price)
        res.status(201).json({message: 'O jogo foi cadastrado com sucesso!'})
        //cod. 201 -CREATED - um novo recurso foi criado no servidor

    }catch(error) {
        console.log(error)
        res.status(500).json({error:'Erro interno...'})
    }
}



export default { getAllGames, createGame }

