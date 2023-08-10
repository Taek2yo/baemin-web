import MenuDetail from "@/components/detailpage/MenuDetail"
export default function MenuDetailPage(props){
    const storeId = props.params.id;
    return(
        <MenuDetail storeId={storeId}/>
    )
}