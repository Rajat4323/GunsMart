import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import Data from "@/app/mainpage/Data"
let reqBody: any;
connect();

export async function POST(request: NextRequest) {
  try {
    reqBody = await request.json();

    let userInDatabase = await User.findOne({ username: "Rajat Kumar" });

    if (!userInDatabase) {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    let count = 0;
    let indexing: any;

    userInDatabase.idProduct.forEach((element: any, index: any) => {
      if (element == reqBody) {
        indexing = index;
        count++;
      }
    });

    if (count === 0) {
      await User.findOneAndUpdate(
        { username: "Rajat Kumar" },
        { $push: { idProduct: reqBody, Quantity: 1 } }
      );

      return NextResponse.json({
        message: "Data not found in the database idProduct array. So we added it",
      });
    }

    if (count !== 0) {
      await User.findOneAndUpdate(
        { username: "Rajat Kumar" },
        { $set: { [`Quantity.${indexing}`]: +userInDatabase.Quantity[indexing] + 1 } }
      );

      return NextResponse.json({
        message: "Data found in the database idProduct array. So we added Quantity",
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest){
    try{
        const userFromDatabase = await User.findOne({ username: "Rajat Kumar" });
        var sortedData = userFromDatabase.idProduct.map((cardId:any , index:any) => {
          const item = Data.find((item) => item.id == cardId);
          const quantity = userFromDatabase.Quantity[index] || 0;
          return { ...item, quantity };    })
          var salePriceTotal:any = 0
          var retailPriceTotal:any = 0
          for (let i = 0; i < sortedData.length; i++) {
            const quantity = Number(sortedData[i]?.quantity) || 0;
            const salePrice = Number(sortedData[i]?.salePrice.substring(1)) || 0;
            const retailPrice = Number(sortedData[i]?.retailPrice.substring(1)) || 0;
          
            salePriceTotal += quantity * salePrice;
            retailPriceTotal += quantity * retailPrice;
          }
          salePriceTotal = Number(salePriceTotal.toFixed(2));
          retailPriceTotal = Number(retailPriceTotal.toFixed(2));
        return  NextResponse.json({ message: "Data received successfully" ,
        data : sortedData   , salePriceTotal : salePriceTotal , retailPriceTotal : retailPriceTotal
    });
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}