///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Player {
    constructor(name, team) {
        this.name = name;
        this.team = team;
    }

    makeLeader() {
        console.log(`${this.name} has been named as the captain of ${this.team}`);
    }
};

// Create objects of the class Player
player1 = new Player("Rohit Sharma", "India");
player1.makeLeader()


class Batsman extends Player {
    constructor(name, team, skill) {
        super(name, team); // Call the parent class constructor
        this.skill = skill;
    };

    makeOpenerBatsman() {
        console.log(`${this.name} who is a ${this.skill} batsman for ${this.team} is going to open the innigs`);
    }

}

batsman1 = new Batsman("Rohit Sharma", "India", "Right Handed");
batsman1.makeOpenerBatsman()