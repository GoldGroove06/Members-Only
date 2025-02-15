async function getSignin(req, res) {
    try{
              const {gameID} = req.params
              console.log(gameID  )
              const game = await db.getGame(gameID);
              if (!game[0]) res.render("not-found")
              console.log("Usernames: ", game);
              res.render("game", {game: game[0]})
         } catch{
              console.log("error in Sigin")
         }
}

module.exports = {getSignin}