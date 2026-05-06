//Importando o Service
import gameService from "../services/gameService.js";

import {objectId} from 'mongodb';

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
    // função para deletar um jogo
const deleteGame = async (req,res) =>{
    try{
        const id = req.params.id
        if(Object.isValid(id)){
            await gameService.Delete(id)
            res.status(204).json({message:'O jogo foi excluído com sucesso!'})
                        //cod. 204 (no content)
        }else {
            res.status(400).json({Error: 'Ocorreu um erro na validação do ID.' })
        }

    }catch (error){
      console.log(error)
      ResizeObserver.status(500).json({ERROR: 'Erro interno do servidor'})
}

}

export default { getAllGames, createGame, deleteGame}

