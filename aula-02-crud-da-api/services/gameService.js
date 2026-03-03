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
    //Método para cadastrar um game
    async Create(title, platform, year,price) {
        try{
            const newGame = new Game({
                //Desestruturação (title : title)
                title,
                platform,
                year,
                price
            })
            //gravando no banco
            await newGame.save()
            newGame.save() //.save() método do mongoose para cadastrar no BD


        }catch(error){
            console.log(error)
        }
    }
}
//Exportando a classe
export default new gameService()