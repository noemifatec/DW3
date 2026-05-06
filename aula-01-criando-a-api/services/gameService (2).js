//importando o Model
import Game from "../models/Games.js";

class gameService {
   // Método para buscar todos os registros no banco

    async getAll() {
    try{
        const games = await Game.find()
        return games
    } catch (error) {
        console.log(error)
    }
    }
}
//Exportando a classe
export default new gameService()