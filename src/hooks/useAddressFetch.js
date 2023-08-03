import { useState, useEffect } from "react";

const useAddressFetch = (status, encodedEmail) => {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    if (status === "authenticated" && encodedEmail) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/address/getAddress?email=${encodedEmail}`);
          const result = await response.json();
          // isSelected가 true인 주소만 필터링합니다.
          const selectedAddresses = result[0].address.filter((item) => item.isSelected === true);

          setAddress(selectedAddresses);
        } catch (error) {
          console.error("데이터 가져오기 에러:", error);
        }
      };
      fetchData();
    }
  }, [status, encodedEmail]);

  return address;
};

export default useAddressFetch;