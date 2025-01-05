const express = require('express'); 
const app = express();
const port = 3000;
const cors = require('cors');

class Theme{
    constructor(name, image, strength, weakness, sprite, weapon, states){
        this.name = name;
        this.image = image;
        this.strength = strength;
        this.weakness = weakness;
        this.sprite = sprite;
        this.weapon = weapon;
        this.states = states;
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
                        'sprites/robin-trans.png', 
                        'Flower Flower Fruit'
                        [
                            {class: 'sprite-one', position: '-14px -964px', height: '65px', width: '36px'},
                            {class: 'sprite-two', position: '-119px -951px', height: '78px', width: '39px'},
                            {class: 'sprite-three', position: '-172px -958px', height: '72px', width: '89px'},
                            {class: 'sprite-four', position: '-470px -965px', height: '65px', width: '44px'}
                        ]).addTheme();

const nami = new Theme('Nami', 
                        '/images/nami.webp', 
                        ['survivor', 'eye for profit', 'navigation'], 
                        ['greed', 'self-interest'], 
                        'sprites/nami-trans.png', 
                        'Clima-Tact'
                        [
                            {class: 'sprite-one', position: '-529px -102px', height: '70px', width: '37px'},
                            {class: 'sprite-two', position: '-140px -87px', height: '85px', width: '105px'},
                            {class: 'sprite-three', position: '-250px -100px', height: '72px', width: '108px'},
                            {class: 'sprite-four', position: '-363px -117px', height: '55px', width: '92px'}
                        ]).addTheme();

const jimbei = new Theme('Jimbei', 
                        '/images/jimbei.webp', 
                        ['honor', 'fish-man', 'jujutsu'], 
                        ['honor-bound', 'loyal to many'], 
                        'sprites/jimbei-trans.png', 
                        'Fish-Man Karate',
                        [
                            {class: 'sprite-one', position: '-160px -2106px', height: '60px', width: '75px'},
                            {class: 'sprite-two', position: '-236px -2096px', height: '62px', width: '120px'},
                            {class: 'sprite-three', position: '-357px -2096px', height: '62px', width: '114px'},
                            {class: 'sprite-four', position: '-472px -2103px', height: '62px', width: '93px'}
                        ]).addTheme();

const franky = new Theme('Cyborg Franky', 
                        '/images/franky.webp', 
                        ['mechanic', 'shipwrite', 'kind-hearted'], 
                        ['childish', 'aloofness'], 
                        'sprites/franky-trans.png', 
                        `He's a cyborg`
                        [
                            {class: 'sprite-one', position: '-111px -376px', height: '73px', width: '103px'},
                            {class: 'sprite-two', position: '-219px -390px', height: '59px', width: '96px'},
                            {class: 'sprite-three', position: '-320px -388px', height: '61px', width: '109px'},
                            {class: 'sprite-four', position: '-676px -378px', height: '71px', width: '58px'}
                        ]).addTheme();

const chopper = new Theme('Tony Tony Chopper', 
                        '/images/chopper.png', 
                        ['medicine', 'kind-hearted', 'transformative'], 
                        ['scares easily', 'cotton candy'], 
                        'sprites/chopper-trans.png', 
                        'Rumble Balls',
                        [
                            {class: 'sprite-one', position: '-160px -2106px', height: '60px', width: '75px'},
                            {class: 'sprite-two', position: '-236px -2096px', height: '62px', width: '120px'},
                            {class: 'sprite-three', position: '-357px -2096px', height: '62px', width: '114px'},
                            {class: 'sprite-four', position: '-472px -2103px', height: '62px', width: '93px'}
                        ]).addTheme();

const brook = new Theme('Soul King Brook', 
                        '/images/brook.jpg', 
                        ['singing', 'entertainment', 'swordplay'], 
                        ['0 grace', 'scares easily'], 
                        'sprites/brook-trans.png', 
                        'Shikomizue and Music'
                        [
                            {class: 'sprite-one', position: '-3px -112px', height: '79px', width: '63px'},
                            {class: 'sprite-two', position: '-152px -120px', height: '71px', width: '121px'},
                            {class: 'sprite-three', position: '-897px -112px', height: '79px', width: '97px'},
                            {class: 'sprite-four', position: '-1010px -103px', height: '88px', width: '36px'}
                        ]).addTheme();

app.use(cors());

app.get('/', (req, res) => {
    console.log(themes)
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || port, () => {
    console.log(`listening on port ${port}`);
});