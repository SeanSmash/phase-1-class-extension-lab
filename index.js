// Your code here

class Polygon{
    constructor(array){
        this.sides = array
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((pVal, cVal) => pVal +cVal)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.sides[0] + this.sides[1] < this.sides[2]){
            return false
        } else if(this.sides[1] + this.sides[2] < this.sides[0]){
            return false
        } else if(this.sides[0] + this.sides[2] < this.sides[1]){
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.sides[0] === this.sides[1]){
            if(this.sides[1] === this.sides[2]){
                if(this.sides[2] === this.sides[3]){
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    }
    get area(){
        return this.sides[0]**2
    }
}