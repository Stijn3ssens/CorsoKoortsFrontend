export class Score
{
    name: string;
    price: number;
    participants: number;
    points: number;
    year: number;
    color: string;

    constructor(name: string, price: number, participants: number, points: number, year: number)
    {
        this.name = name;
        this.price = price;
        this.participants = participants;
        this.points = points;
        this.year = year;
        this.color = this.getColorBasedOnScore();
    }

    getColorBasedOnScore() : string
    {
        if (this.price == 1) { return "first_place"; }
        if (this.price == 2) { return "second_place"; }
        else if (this.price == 3) { return "third_place"; }
        else if (this.price <= this.participants / 2) { return "best_half"; }
        else if (this.price == this.participants) { return "last_place"; }
        else { return "low_place"; }
    }
}