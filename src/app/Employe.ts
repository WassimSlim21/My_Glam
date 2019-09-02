export default class Employe {
    id: Number;
    fName: String;
    lName: String;
    num:Number;
    constructor(fName: string, lName: string, num:Number, id: Number) {
        this.id = id;
        this.lName=lName;
        this.fName=fName;
        this.num=num;  
    }
    public get fname():String
    {
        return this.fName;
    }
 
    public set fname(value:String)
    {
        this.fName = value;
    }
    
    public get lname():String
    {
        return this.lName;
    }
 
    public set lname(value:String)
    {
        this.lName = value;
    }
    
    // public get id():Number
    // {
    //     return this.id;
    // }
 
    // public set id(value:Number)
    // {
    //     this.id = value;
    // }

    // public get num():Number
    // {
    //     return this.num;
    // }
 
    // public set num(value:Number)
    // {
    //     this.num = value;
    // }

}