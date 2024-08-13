//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow{
    constructor(title, runTime, episodes, seasons, animated){
        this.title = title
        this.runTime = runTime
        this.episodes = episodes
        this.seasons = seasons
        this.animated = animated
    }
    time = 0
    timer(){
        this.time++
    }
    play(){
        console.log(`${this.title} has begun playing`)
        let playTime = setTimeout(this.timer, 1000)
        return playTime
    }

    pause(){
        clearTimeout(this.timer)
        console.log(`you have ${this.runTime - this.playTime} remaining`)
    }

    getEpisodes(){
        console.log(`because you didn't watch this show within the first 6 seconds of us streaming it, ${this.title} has only ${this.seasons} containing ${this.episodes} total`)
    }
}

const bojack = new NetflixShow('BoJack Horseman', 1800, 52, 6, true)
