import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class VuelosDTO{
    @IsNotEmpty()
    @IsString()
   readonly piloto: string;
   @IsNotEmpty()
   @IsString()
   readonly avios:String;
   @IsNotEmpty()
   @IsString()
   readonly ciudadDestino:string;
   @IsNotEmpty()
   @IsDate()
   readonly fechaVuelo:Date;

}