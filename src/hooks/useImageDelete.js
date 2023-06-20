const useImageDelete = () => {
  const deleteProfileImage = async () => {
    try {
      const response = await fetch('/api/deleteImage/delete', {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('이미지 삭제 실패');
      }
    } catch (error) {
      throw new Error('이미지 삭제 요청 실패');
    }
  };

  return {
    deleteProfileImage,
  };
};

export default useImageDelete;
