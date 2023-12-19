<h2>배달의 민족 클론코딩 with Next.js</h2>

---

## Index

- [Information](#information)
- [Guide](#guide)
- [Stacks](#stacks)
- [Architecture](#architecture)
- [Sequence Diagram](#sequence-diagram)
- [Page Previews](#page-previews)
- [Main Features](#main-features)
- [Trouble Shooting](#trouble-shooting)

---

## Information

<h3>Duration</h3>
  2023-06-04 ~ 2023-08-31
  </br>
<h3>Purpose</h3> 
단순히 다른 앱을 따라치는 것이 아닌, 기존 앱의 기능과 UI를 분석하고, 그 과정에서 어떻게 이 기능을 구현했는가 어떻게 효율적으로 동작하는 것에 대한 깊은 이해를 얻고자 하는 목적에서 진행했고, 이를 통해 문제 해결 능력 또한 기를 수 있다고 판단해서 진행한 프로젝트 입니다.
  </br>

<h3>Deployment URL</h3>
 <a href="https://baemin-web.vercel.app/" target="_blank" style="font-size:20px">baemin-web</a>
  </br>
<h3>Author</h3>
<p>개인 프로젝트</p>

---

## Guide

### Requirements

- Next.js 13.4.3
- Node.js v18.16.0
- Npm 8.16.0

### Installation

```
$ git clone https://github.com/Taek2yo/baemin-web.git
$ cd baemin-web
```

---

## Stacks

#### Development

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Next.js](https://img.shields.io/badge/Next13-black?style=for-the-badge&logo=next.js&logoColor=white)</br>

#### DB

![MongoDB](https://img.shields.io/badge/MongoDB-47a248?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS S3](https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=green)

#### Style

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)</br>

#### Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Architecture

![아키텍처](https://velog.velcdn.com/images/taek2yo/post/1e00ccc4-b46c-40b0-8c19-9efd64fd729a/image.png)

---

## Sequence Diagram

![시퀀스 다이어그램](https://velog.velcdn.com/images/taek2yo/post/6cee767c-8015-4fd7-8290-8babc0438058/image.png)

---

## Page Previews

❗️ 모바일 지원 X
| 메인 페이지 | 검색 페이지 |
| :-------------------------------------------: | :------------: |
| <img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/5bfc5e36-e0f2-44b2-88a1-245a20307e11"/>|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/9f881e4b-bdda-4a95-aa86-25659b414b09"/> |  
| 검색 결과 | 배달 페이지 |  
| <img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/24379fd4-8c59-4769-b0f5-cfb330d6608c"/> | <img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/235a6057-ade2-4f72-82d7-87f7ffc1eb4e"/> |
| 카테고리 페이지 | 주소 설정 |  
|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/aec05138-e6aa-4f4b-9338-307dbc402718"/>|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/892387ce-8bc4-41a3-8d6d-abbbee55a045"/>|
| 주소 검색 | 주소 관리 |  
|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/a16ce381-afdc-4956-b16c-efaa9c32f114"/>|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/61c885ff-37ac-48d1-b69d-65c27c9cae9c"/>|
| 마이 페이지 | 프로필 관리 |  
|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/879fa211-a3fc-43e2-b48c-73283073e9dc"/>|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/a4e22c0c-8c42-4f68-b919-4a6d6f0a8dfe"/>|
| 가게 페이지 |  
|<img width="150px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/d19269d7-e095-4f4c-a6dd-62aa036f3d79"/>|<img width="150px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/19b5823a-410a-4fe0-a0a8-2cf294f87a61"/>|
| 메뉴 상세 페이지 | 장바구니 페이지 |
|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/1fa657be-6436-4004-a20d-4cef1f8e7a8c"/>|<img width="300px" src="https://github.com/Taek2yo/baemin-web/assets/110080748/6bd89acb-ef7b-4df8-9e73-affbe65977c6"/> |

---

## Main Features

### 1. 회원 기능

> OAuth + Session 방식의 회원 기능 구현

- OAuth를 통해 소셜 로그인 지원, 세션을 사용하여 로그인 상태를 유지.
- 회원 프로필 이미지 저장 : 사용자가 프로필 이미지를 업로드하면 AWS S3 클라우드 스토리지에 이미지를 저장.

### 2. 주소 기능

> 도로명 주소 기반 주소 검색

- 주소기반 산업지원서비스의 Open API를 활용하여 사용자가 도로명 주소를 검색하고 저장할 수 있는 기능.
- 추후 현재 위치 기능 추가 예정

### 3. 검색 기능

> 키워드 검색

- 가게와 메뉴에 포함된 키워드를 사용하여 사용자가 원하는 내용을 검색할 수 있음.
  > 최근 검색어 기능
- 로컬 스토리지를 활용하여 사용자의 최근 검색어 기능을 구현하여 UX를 높임.
  > 카테고리 분할
- 가게 및 메뉴를 카테고리 별로 분할.

### 4. 가게 및 메뉴 상세 페이지

> 상세 정보 제공

- 가게의 주소, 연락처, 운영 시간 등과 같은 상세 정보를 제공. 메뉴 상세 페이지에서는 가격, 설명, 옵션 등을 제공.
  > 옵션 선택 기능 (radio btn, checkbox 활용)
- 사용자는 메뉴 상세 페이지에서 옵션을 선택할 수 있음.

### 5. 장바구니 기능

> 장바구니 저장

- 사용자가 메뉴를 선택한 후 장바구니에 담기를 클릭하면 이를 사용자의 회원 정보 데이터베이스의 Cart 필드에 저장하여 구현.

---

## Trouble Shooting

### 1. [검색기능](./TroubleShooting/search.md)

### 2. [컴포넌트 드래그](./TroubleShooting/drag.md)

### 3. [배포](./TroubleShooting/deploy.md)

---
