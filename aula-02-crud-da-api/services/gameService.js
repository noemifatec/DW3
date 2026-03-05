import Game from "../models/Games.js";

class gameService {
    // Buscar todos
    async getAll() {
        try {
            const games = await Game.find();
            return games;
        } catch (error) {
            console.log(error);
        }
    }

    // Criar novo
    async Create(title, platform, year, price) {
        try {
            const newGame = new Game({
                title,
                platform,
                year,
                price
            });
            await newGame.save(); // Apenas uma vez com await
            return newGame; // É uma boa prática retornar o que foi criado
        } catch (error) {
            console.log(error);
        }
    }

    // Deletar
    async Delete(id) {
        try {
            // Correção: Usar o Model 'Game' e não a classe 'gameService'
            await Game.findByIdAndDelete(id); 
            console.log(`Game ${id} foi deletado`);
        } catch (error) {
            console.log(error);
        }
    }
} // Fechamento da classe que estava faltando

// Método para alterar um jogo
async Update(id, title, platform, year, price) {
    try {
        await Game.findByIdAndUpdate(id,{
            title,
            platform,
            year,
            price
       } )
       console.log(error)
    }

}
export default new gameService();