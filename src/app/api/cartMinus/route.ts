import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
let reqBody: any;
connect();

export async function POST(request: NextRequest){
    try {
       reqBody = await request.json() ;
       let userInDatabase = await User.findOne({ username: "Rajat Kumar" });
       if (!userInDatabase) {
        return NextResponse.json({ error: "User does not exist" }, { status: 400 });
      }
      
      let indexingMinus: any;      
      if(reqBody.minus){
      userInDatabase.idProduct.forEach((element: any, index: any) => {
        if (element == reqBody.minus) {
          indexingMinus = index;
        }
      });
      if (userInDatabase.Quantity[indexingMinus] == 1) {
        await User.findOneAndUpdate({ username: "Rajat Kumar" },
          {
            $unset: {
              [`idProduct.${indexingMinus}`]: 1,
              [`Quantity.${indexingMinus}`]: 1,
            },
          }
        );
        await User.findOneAndUpdate(
          { username: "Rajat Kumar" },
          {
            $pull: { idProduct: null, Quantity: null },
          }
        );
      }else{
      await User.findOneAndUpdate(
        { username: "Rajat Kumar" },
        { $set: { [`Quantity.${indexingMinus}`]: +userInDatabase.Quantity[indexingMinus] - 1 } }
      );
    }
      return NextResponse.json({
        message: "we subtracted Quantity",
      });
      }

      let indexingRemove: any;
      if(reqBody.remove){
        userInDatabase.idProduct.forEach((element: any, index: any) => {
          if (element == reqBody.remove) {
            indexingRemove = index;
          }
        });
          await User.findOneAndUpdate({ username: "Rajat Kumar" },
            {
              $unset: {
                [`idProduct.${indexingRemove}`]: 1,
                [`Quantity.${indexingRemove}`]: 1,
              },
            }
          );
          await User.findOneAndUpdate(
            { username: "Rajat Kumar" },
            {
              $pull: { idProduct: null, Quantity: null },
            }
          )
      
        return NextResponse.json({
          message: "we subtracted Quantity",
        });
        }
      
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}