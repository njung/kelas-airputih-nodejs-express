### Web server dengan beberapa route

Route-route di aplikasi web ini ditangani oleh fungsi `.get()`, `.post()` dan lainnya. Parameter pertama dari fungsi tersebut adalah path dari route.

```
app.get('/about', ...
```

Potongan kode di atas menangani route `localhost:3000/about` saat diakses oleh pengguna.
