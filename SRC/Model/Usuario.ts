import { prop } from "@typegoose/typegoose";

class KittenClass {
    @prop()
    public name?: string;
    @prop()
    public username?:  string;
    @prop()
    public password?:string;
  }
