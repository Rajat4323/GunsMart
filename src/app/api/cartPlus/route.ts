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
      
      let indexing: any;
      userInDatabase.idProduct.forEach((element: any, index: any) => {
        if (element == reqBody.plus) {
          indexing = index;
        }
      })

      await User.findOneAndUpdate(
        { username: "Rajat Kumar" },
        { $set: { [`Quantity.${indexing}`]: +userInDatabase.Quantity[indexing] + 1 } }
      );

      return NextResponse.json({
        message: "we subtracted Quantity",
      });

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}