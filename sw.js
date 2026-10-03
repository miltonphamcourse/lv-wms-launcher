// Service worker rỗng: chỉ để trình duyệt coi trang là "ứng dụng cài được". KHÔNG lưu đệm, KHÔNG chặn yêu cầu nào.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* để trình duyệt tự xử lý, luôn lấy bản mới nhất */ });
