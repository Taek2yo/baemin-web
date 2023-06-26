import Detail from "@/components/detailpage/Detail";

export default function detailPage(props) {
  const storeId = props.params.id;
  return <Detail storeId={storeId} />;
}
