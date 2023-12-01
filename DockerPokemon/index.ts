const express = require('express')
const app = express()
app.use(express.json());

const port = 3000

app.listen(port, () => {
  console.log(`Were here obys at http://localhost:${port}`)
  console.log(__dirname)
  console.log(process)
  setInterval(() => {
    console.log(module)
  }, 2000)
})

app.use(express.urlencoded({
  extended:true
}));

app.post('/bar', function(req,res) {
  const body = req.body
  console.log(req.body.foo)
  res.send(req.body.foo)
})

// Need another endpoint for Postgres Caching across server restart
// export class PokemonController {
//   public router = Router();
  
//   constructor(private pokemonService: PokemonService) { // what is a constructor
//     this.setRoutes();                    // How is it possible to use state in the backend?
//   }

//   public setRoutes() {             // what is public
//     this.router.route("/").get(this.sayHello);   // what is router

//     this.router.route("/all").get(this.findAll);  
//   }  
    
//   private sayHello = (_: Request, res: Response) => {   // what is private
//     const welcomeMessage = this.pokemonService.welcomeMessage();
//     res.send(welcomeMessage);
//   };
  
//   private findAll = async (_: Request, res: Response) => {
//     try {
//       const pokemon = await this.pokemonService.findAll();
//       res.send(pokemon);
//     } catch (e) {
//       res.status(500).send(e.message);
//     }
//   };
// }

// app.post('/pokemon/:name', function(req,res) { // how do we take in multiple data, and then do just 1 response
//   const {names} = req.body                // see if we can add Event Listener here
//   const all = []
//   for (const poke in names) {
//     all.push(poke)
//     for (poke[i] in all) {
//       if (i.value == poke[j] || i.value != String) {
//         all.pop[i]
//       }
//     }
    
//   }
  // console.log(all)
  // console.log(names)

  
  // deduplicate names
  // other sanitization
  // other normalization
  // have a Cache layer to combat Rate Limit of PokeAPI
  // Store history of names so that GET /history brings back {}, store in DB

  // var soemthingss = pokemon.something.create({
  //   something: names,
  // });

//   function superman() {
//     console.log("Something")
//   }


//   res.json(req.params.name)
  
// })



// app.get('https://pokeapi.co/api/v2/pokemon/:id', function (req,res) {
//   const { id } = req.params

//   res.json({"foo": "bar"})
// })


