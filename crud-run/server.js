const express = require('express'); 
const app = express();
const port = 3000;
const cors = require('cors');

class Theme{
    constructor(name, image, strength, weakness, sprite, weapon){
        this.name = name;
        this.image = image;
        this.strength = strength;
        this.weakness = weakness;
        this.sprite = sprite;
        this.weapon = weapon;
    }

    addTheme(){
        themes.push(this);
    }
}

const themes = [];

const luffy = new Theme('Monkey D. Luffy', 
                        '/images/luffy.webp', 
                        ['determination', 'loyalty', 'rubber-man'], 
                        ['aloofness', 'lack of intelligence', 'lack of discipline'], 
                        'sprites/luffy.png', 
                        'gum-gum-anything').addTheme();

const zoro = new Theme('Roronoa Zoro', 
                        '/images/zoro.jpg', 
                        ['determination', 'loyalty', 'three-sword-style'], 
                        ['sense of direction', 'lack of intelligence'], 
                        'sprites/zoro.png', 
                        'Wado Ichimonji, Sandai Kitetsu, and Enma').addTheme();
        
const sanji = new Theme('Vinsmoke Sanji', 
                        '/images/sanji.jpg', 
                        ['chivalry', 'cooking', 'kicking'], 
                        ['familial issues', 'any attractive woman'], 
                        'sprites/sanji.png', 
                        'never hands, always feet').addTheme();

const usopp = new Theme('God King Usopp', 
                        '/images/usopp.jpg', 
                        ['sharp-shooter', 'quick-thinking', 'hard-working'], 
                        ['cowardice', 'brazenness'], 
                        'sprites/usopp.png', 
                        'Slingshot and Kabuto').addTheme();

const robin = new Theme('Nico Robin', 
                        '/images/robin.jpg', 
                        ['determination', 'survivor', 'knowledge of ancient history'], 
                        ['feels undeserving', 'long-wanted by the marines'], 
                        'sprites/robin.png', 
                        'Flower Flower Fruit').addTheme();

const nami = new Theme('Nami', 
                        '/images/nami.webp', 
                        ['survivor', 'eye for profit', 'navigation'], 
                        ['greed', 'self-interest'], 
                        'sprites/nami.png', 
                        'Clima-Tact').addTheme();

const jimbei = new Theme('Jimbei', 
                        '/images/jimbei.webp', 
                        ['honor', 'fish-man', 'jujutsu'], 
                        ['honor-bound', 'loyal to many'], 
                        'sprites/jimbei.png', 
                        'Fish-Man Karate').addTheme();

const franky = new Theme('Cyborg Franky', 
                        '/images/franky.webp', 
                        ['mechanic', 'shipwrite', 'kind-hearted'], 
                        ['childish', 'aloofness'], 
                        'sprites/franky.png', 
                        `He's a cyborg`).addTheme();

const chopper = new Theme('Tony Tony Chopper', 
                        '/images/chopper.png', 
                        ['medicine', 'kind-hearted', 'transformative'], 
                        ['scares easily', 'cotton candy'], 
                        'sprites/chopper.png', 
                        'Rumble Balls').addTheme();

const brook = new Theme('Soul King Brook', 
                        '/images/brook.jpg', 
                        ['singing', 'entertainment', 'swordplay'], 
                        ['0 grace', 'scares easily'], 
                        'sprites/brook.png', 
                        'Shikomizue and Music').addTheme();

app.use(cors());

app.get('/', (req, res) => {
    console.log(themes)
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || port, () => {
    console.log(`listening on port ${port}`);
});