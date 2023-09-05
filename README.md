<h2>배달의 민족 클론코딩 with Next.js</h2>

---

## Index
- [Information](#information)
- [Stacks](#stacks)
- [Screen Layout](#screen-layout)
- [Main Function](#main-function)
- [Trouble Shooting](#trouble-shooting)
- [Refactoring](#refactoring)
- [Structure](#structure)

---

## Information
<h3>Duration</h3>
  2023-06-04 ~ 2023-08-31
  </br>
<h3>Purpose</h3> 
  Next.js 학습과 DB에 대한 이해를 위해, 기획보단 클론 코딩이 다양한 기능을 학습할 수 있다고 판단하여 진행하였습니다.
  </br>
<h3>Project Description</h3>
  이 프로젝트는 "배달의 민족" 앱의 유사한 기능과 디자인을 가진 웹 앱을 개발하는 것이 목표입니다. Next.js와 MongoDB를 활용하여 개발되었으며, 주요 기능은 회원 기능(Next Auth), 주소 등록, 카테고리 검색 및 키워드 검색, 장바구니 등 입니다. 배민의 주요 기능들을 개발해 봄으로써 웹 개발 및 디자인 스킬을 향상시키고 데이터베이스 동작 원리를 더 깊이 이해하기 위해 이 프로젝트를 진행하였습니다.
  </br>
<h3>Deployment URL</h3>
 <a href="https://baemin-web.vercel.app/" target="_blank" style="font-size:20px">baemin-web</a>
  </br>
<h3>Author</h3>
<p>이 프로젝트는 개인 프로젝트 입니다.</p>

---

## Stacks
#### Development
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Next.js](https://img.shields.io/badge/Next13-black?style=for-the-badge&logo=next.js&logoColor=white)</br>

#### DB
![MongoDB](https://img.shields.io/badge/MongoDB-47a248?style=for-the-badge&logo=mongodb&logoColor=white)</br>
  
#### Style
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)</br>

#### Deploy
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Screen Layout
❗️ 모바일 지원 X

---

## Main Function

---

## Trouble Shooting

---

## Refactoring

---

## Structure
### pages / api
```
📦pages
┗ 📂api
┃ ┣ 📂address
┃ ┃ ┣ 📜addAddress.js
┃ ┃ ┣ 📜getAddress.js
┃ ┃ ┣ 📜getSelectedAddress.js
┃ ┃ ┗ 📜selectAddress.js
┃ ┣ 📂auth
┃ ┃ ┣ 📜checkNickname.js
┃ ┃ ┣ 📜signup.js
┃ ┃ ┗ 📜[...nextauth].js
┃ ┣ 📂cart
┃ ┃ ┣ 📜addToCart.js
┃ ┃ ┣ 📜deleteCartItem.js
┃ ┃ ┣ 📜getCart.js
┃ ┃ ┣ 📜isValid.js
┃ ┃ ┗ 📜[item_id].js
┃ ┣ 📂deleteImage
┃ ┃ ┗ 📜delete.js
┃ ┣ 📂delivery
┃ ┃ ┗ 📜getCategory.js
┃ ┣ 📂detail
┃ ┃ ┣ 📜getMenuInfo.js
┃ ┃ ┗ 📜[storeId].js
┃ ┣ 📂imageUpload
┃ ┃ ┗ 📜image.js
┃ ┣ 📂search
┃ ┃ ┗ 📜search.js
┃ ┗ 📂store
┃ ┃ ┗ 📜data.js
```
### src
```
📦src
┣ 📂app
┃ ┣ 📂alarm
┃ ┃ ┗ 📜page.js
┃ ┣ 📂cart
┃ ┃ ┗ 📜page.js
┃ ┣ 📂delivery
┃ ┃ ┣ 📂[category]
┃ ┃ ┃ ┗ 📜page.js
┃ ┃ ┗ 📜page.js
┃ ┣ 📂detail
┃ ┃ ┗ 📂[id]
┃ ┃ ┃ ┣ 📂[menu_id]
┃ ┃ ┃ ┃ ┗ 📜page.js
┃ ┃ ┃ ┗ 📜page.js
┃ ┣ 📂lib
┃ ┃ ┗ 📜registry.js
┃ ┣ 📂login
┃ ┃ ┗ 📜page.js
┃ ┣ 📂mypage
┃ ┃ ┗ 📜page.js
┃ ┣ 📂profile
┃ ┃ ┗ 📜page.js
┃ ┣ 📂search
┃ ┃ ┣ 📂[terms]
┃ ┃ ┃ ┗ 📜page.js
┃ ┃ ┗ 📜page.js
┃ ┣ 📂signUp
┃ ┃ ┗ 📜page.js
┃ ┣ 📜favicon.ico
┃ ┣ 📜globals.css
┃ ┣ 📜layout.js
┃ ┣ 📜loading.js
┃ ┣ 📜loadingStyle.js
┃ ┣ 📜page.js
┃ ┣ 📜page.module.css
┃ ┗ 📜providers.js
┣ 📂components
┃ ┣ 📂address
┃ ┃ ┣ 📜AddrDetailInfo.js
┃ ┃ ┣ 📜addrDetailInfoStyle.js
┃ ┃ ┣ 📜AddressResults.js
┃ ┃ ┣ 📜Guide.js
┃ ┃ ┣ 📜RegisteredAddress.js
┃ ┃ ┣ 📜resultsStyle.js
┃ ┃ ┣ 📜SearchAddress.js
┃ ┃ ┣ 📜searchAddressStyle.js
┃ ┃ ┣ 📜SetAddress.js
┃ ┃ ┗ 📜setAddressStyle.js
┃ ┣ 📂cartpage
┃ ┃ ┣ 📜Cart.js
┃ ┃ ┣ 📜CartItem.js
┃ ┃ ┣ 📜CartStyle.js
┃ ┃ ┣ 📜DeleteBtn.js
┃ ┃ ┣ 📜EmptyCart.js
┃ ┃ ┗ 📜SelectCategories.js
┃ ┣ 📂category
┃ ┃ ┣ 📜Category.js
┃ ┃ ┣ 📜categoryItem.js
┃ ┃ ┗ 📜categoryStyle.js
┃ ┣ 📂deliverypage
┃ ┃ ┣ 📜CategorySection.js
┃ ┃ ┣ 📜Delivery.js
┃ ┃ ┣ 📜DeliveryCategory.js
┃ ┃ ┣ 📜DeliveryHeader.js
┃ ┃ ┣ 📜DeliveryPageBanner.js
┃ ┃ ┣ 📜deliveryStyle.js
┃ ┃ ┣ 📜Recommend.js
┃ ┃ ┗ 📜StoreDataItem.js
┃ ┣ 📂detailpage
┃ ┃ ┣ 📜Detail.js
┃ ┃ ┣ 📜detailStyle.js
┃ ┃ ┣ 📜Information.js
┃ ┃ ┣ 📜MenuDesc.js
┃ ┃ ┣ 📜MenuDetail.js
┃ ┃ ┣ 📜menuDetailStyle.js
┃ ┃ ┣ 📜MenuFooter.js
┃ ┃ ┣ 📜Modal.js
┃ ┃ ┣ 📜modalStyle.js
┃ ┃ ┣ 📜PackingOrder.js
┃ ┃ ┣ 📜Review.js
┃ ┃ ┣ 📜Signature.js
┃ ┃ ┗ 📜Thumbnail.js
┃ ┣ 📂favoritesBar
┃ ┃ ┣ 📜FavoritesBar.js
┃ ┃ ┗ 📜favoritesStyle.js
┃ ┣ 📂footer
┃ ┃ ┣ 📜Footer.js
┃ ┃ ┗ 📜footerStyle.js
┃ ┣ 📂header
┃ ┃ ┣ 📜Header.js
┃ ┃ ┗ 📜headerStyle.js
┃ ┣ 📂loginpage
┃ ┃ ┣ 📜login.js
┃ ┃ ┣ 📜loginStyle.js
┃ ┃ ┣ 📜SocialLogin.js
┃ ┃ ┗ 📜submit.js
┃ ┣ 📂mainContent
┃ ┃ ┣ 📜Banner.js
┃ ┃ ┣ 📜contentStyle.js
┃ ┃ ┗ 📜MainContent.js
┃ ┣ 📂mypage
┃ ┃ ┣ 📜myPage.js
┃ ┃ ┗ 📜myPageStyle.js
┃ ┣ 📂profilepage
┃ ┃ ┣ 📜logoutOnclick.js
┃ ┃ ┣ 📜Profile.js
┃ ┃ ┗ 📜profileStyle.js
┃ ┣ 📂quickDelivery
┃ ┃ ┣ 📜quick.js
┃ ┃ ┣ 📜quickItem.js
┃ ┃ ┗ 📜quickStyle.js
┃ ┣ 📂search
┃ ┃ ┣ 📜PersonalItem.js
┃ ┃ ┣ 📜Personalized.js
┃ ┃ ┣ 📜Ranking.js
┃ ┃ ┣ 📜Search.js
┃ ┃ ┣ 📜SearchResult.js
┃ ┃ ┣ 📜SearchResultItem.js
┃ ┃ ┗ 📜searchStyle.js
┃ ┗ 📂signUppage
┃ ┃ ┣ 📜signUp.js
┃ ┃ ┗ 📜signUpStyle.js
┣ 📂hooks
┃ ┣ 📜useAddressFetch.js
┃ ┣ 📜useDraggable.js
┃ ┣ 📜useImageDelete.js
┃ ┗ 📜useImageUpload.js
┗ 📂util
┃ ┗ 📜database.js


```