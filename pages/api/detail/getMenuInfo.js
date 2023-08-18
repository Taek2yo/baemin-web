import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function getMenuInfoHandler(req, res) {
  const query = req.query;
  const storeId = query.storeId;
  const menuId = query.menuId;
  try {
    const db = (await connectDB).db('baemin');
    
    // 상점 정보 조회
    const storeResult = await db.collection('store').findOne({ _id: new ObjectId(storeId) });
    const { min_delivery_price, title, delivery_time, delivery_tip, menuId: storeMenuId } = storeResult;
    
    // 메뉴 정보 조회
    const menuResult = await db.collection('menu').findOne({_id : new ObjectId(storeMenuId)});
   
    // menuInfoArray에서 menuId에 해당하는 항목 찾기
    const menuInfoArray = menuResult.menu_info;
    const selectedMenuItem = menuInfoArray.find(item => item.id === menuId);
    
    res.status(200).json({
      minDeliveryPrice: min_delivery_price,
      title,
      delivery_time,
      delivery_tip,
      selectedMenuItem
    });
  } catch (error) {
    console.error("API 요청 에러:", error);
    res.status(500).json({ error: "API 요청 에러" });
  }
}
