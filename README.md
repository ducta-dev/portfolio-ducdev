# DucTM Portfolio

Website portfolio cá nhân dùng để giới thiệu bản thân, dịch vụ và các dự án đã thực hiện.

## Mục tiêu dự án

Dự án được xây dựng nhằm tạo một website giới thiệu chuyên nghiệp cho freelancer developer, tập trung vào đối tượng người dùng cuối và khách hàng không chuyên kỹ thuật.

Website cho phép:

- Giới thiệu thông tin cá nhân
- Hiển thị danh sách dự án
- Xem chi tiết từng dự án
- Hiển thị gallery hình ảnh
- Viết mô tả dự án bằng Markdown
- Quản lý dự án qua trang Admin
- Gửi yêu cầu tư vấn qua form liên hệ

## Công nghệ sử dụng

- React
- Vite
- Tailwind CSS
- React Router
- Supabase Database
- Supabase Storage
- Supabase Auth
- React Markdown
- Formspree
- Vercel

## Tính năng chính

### Trang chủ

- Hero giới thiệu cá nhân
- Danh sách dự án nổi bật
- Bảng giá tham khảo
- Form liên hệ tư vấn
- Footer

### Trang chi tiết dự án

- Ảnh cover
- Mô tả ngắn
- Nội dung chi tiết dạng Markdown
- Tính năng nổi bật
- Gallery hình ảnh
- Xem ảnh phóng to
- Video demo
- Giá và thời gian triển khai

### Trang Admin

- Đăng nhập bằng Supabase Auth
- Thêm dự án mới
- Sửa dự án
- Xóa dự án
- Upload nhiều hình ảnh
- Tự tạo slug từ tên dự án
- Viết nội dung chi tiết bằng Markdown

## Cấu trúc thư mục

```txt
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProjectSection.jsx
│   ├── ProjectCard.jsx
│   ├── PricingSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── AdminTable.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProjectDetail.jsx
│   ├── Admin.jsx
│   └── Login.jsx
│
├── services/
│   ├── supabase.js
│   ├── projectService.js
│   ├── galleryService.js
│   ├── storageService.js
│   └── authService.js
│
└── utils/
    └── slugify.js
