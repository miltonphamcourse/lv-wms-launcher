# LV-WMS Launcher — trang mở nhanh hệ thống Long Việt

Trang web tĩnh rất nhỏ, đóng vai **"vỏ" ứng dụng**: có đúng icon Long Việt, tên ứng dụng, chạy toàn màn hình khi "Thêm vào màn hình chính", rồi nhúng hệ thống thật vào bên trong.

**Vì sao cần:** Apps Script bọc hệ thống trong khung con nằm trong trang vỏ của Google, nên iPhone/Android không đọc được icon và tên ứng dụng mà mình khai báo. Trang này đặt các thẻ đó ở trang ngoài. Nó cũng cho một **địa chỉ ngắn, luôn sạch** (không có `/u/1/`), tránh lỗi "Rất tiếc, không thể mở tệp".

## Cách dùng

Gửi cho mọi người địa chỉ của trang này (không gửi link `script.google.com` nữa). Trên điện thoại:

- **iPhone:** mở bằng **Safari** → nút Chia sẻ → **Thêm vào Màn hình chính**.
- **Android (Chrome):** menu ⋮ → **Cài đặt ứng dụng** / **Thêm vào màn hình chính**.

Nhớ **xóa biểu tượng cũ** trước khi thêm lại (iPhone nhớ icon lúc thêm lần đầu).

## Đổi hệ thống mà trang này mở

Sửa một dòng `UNG_DUNG` trong `index.html` (địa chỉ `/exec` của Apps Script, hoặc địa chỉ bản Next.js sau này). Icon/tên giữ nguyên, người dùng không phải thêm lại biểu tượng.

## Cấu trúc

| File | Nội dung |
|---|---|
| `index.html` | Trang bọc: khung toàn màn hình + màn hình chờ có logo + đường "Mở thẳng" nếu quá 12 giây |
| `manifest.webmanifest` | Tên, màu, icon (192, 512, maskable) cho Android/Chrome |
| `sw.js` | Service worker rỗng (không lưu đệm), chỉ để Chrome cho phép "Cài đặt" |
| `icons/` | `apple-touch-icon.png` (180), `icon-192`, `icon-512`, `icon-512-maskable`, `favicon-32` — logo trên nền trắng |

## Đăng lên mạng (GitHub Pages)

Repo phải là **public** (GitHub Pages bản miễn phí không chạy với repo private). Trong repo không có bí mật gì: địa chỉ `/exec` vốn công khai, dữ liệu được bảo vệ bằng đăng nhập.

1. GitHub → repo → **Settings → Pages**.
2. **Source:** *Deploy from a branch* → nhánh `main`, thư mục `/ (root)` → **Save**.
3. Đợi ~1–2 phút, địa chỉ có dạng `https://<tài-khoản>.github.io/lv-wms-launcher/`.

## Lưu ý

- Trang này chỉ là vỏ, **không** chứa dữ liệu hay đăng nhập; đăng nhập vẫn do hệ thống bên trong xử lý.
- Trên iPhone, đăng nhập lưu trong khung nhúng có thể bị Safari xóa nếu lâu không dùng (giới hạn chống theo dõi của Safari); khi đó chỉ cần đăng nhập lại.
- Đổi logo: thay file gốc rồi sinh lại các icon trong `icons/` (xem `lv-wms-docs/Image/`).
