import { NextRequest ,NextResponse } from "next/server"
var reqBody:any ;
export async function POST(request: NextRequest){
    try {
       reqBody = await request.json() ;    
        return NextResponse.json({ message: "Data received successfully" , data: reqBody
     });
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
export async function GET(request: NextRequest){
    try{
        
        return NextResponse.json({ message: "Data received successfully" , data: reqBody
    });
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}