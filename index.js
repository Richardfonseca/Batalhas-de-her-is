
import  express from 'express';
const app = express();
const port = 3000;

// Arrays para armazenar heróis e vilões
let herois = [];
let viloes = [];
//  cadastrar um herói
app.post('/cadastrar-heroi', (req, res) => {
    const novoHeroi = req.body;
    herois.push(novoHeroi);
    res.status(201).send({ message: 'Herói cadastrado com sucesso', heroi: novoHeroi });
});

// cadastrar um vilão
app.post('/cadastrar-vilao', (req, res) => {
    const novoVilao = req.body;
    viloes.push(novoVilao);
    res.status(201).send({ message: 'Vilão cadastrado com sucesso', vilao: novoVilao });
});

// batalhar
app.post('/batalhar', (req, res) => {
    const idHeroi = req.body.idHeroi;
    const idVilao = req.body.idVilao;

    const heroi = herois.find(hero => hero.id === idHeroi);
    const vilao = viloes.find(vilao => vilao.id === idVilao);

    if (!heroi || !vilao) {
        res.status(404).json({ message: 'Herói ou vilão não encontrado' });
        return;
    }

    if (heroi.pontosDePoder > vilao.pontosDePoder) {
        res.status(200).json({ message: `${heroi.nome} venceu ${vilao.nome}` });
    } else if (vilao.pontosDePoder > heroi.pontosDePoder) {
        res.status(200).json({ message: `${vilao.nome} venceu ${heroi.nome}` });
    } else {
        res.status(200).json({ message: 'A batalha terminou em empate' });
    }
});
// batalha
app.post('/batalhar', (req, res) => {
    const idHeroi = req.body.idHeroi;
    const idVilao = req.body.idVilao;
  
    const heroi = herois.find(hero => hero.id === idHeroi);
    const vilao = viloes.find(vilao => vilao.id === idVilao);
  
    if (!heroi || !vilao) {
      res.status(404).json({ message: 'Herói ou vilão não encontrado' });
      return;
    }
  
    if (heroi.pontosDePoder > vilao.pontosDePoder) {
      res.status(200).json({ message: `${heroi.nome} venceu ${vilao.nome}` });
    } else if (vilao.pontosDePoder > heroi.pontosDePoder) {
      res.status(200).json({ message: `${vilao.nome} venceu ${heroi.nome}` });
    } else {
      res.status(200).json({ message: 'A batalha terminou em empate' });
    }
  });

// saída
app.listen(port, () => {
    console.log(`Servidor  rodando ${port}`);
});
