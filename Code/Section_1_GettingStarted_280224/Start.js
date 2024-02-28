======================================================================================================================================================
                            Setting Angular
======================================================================================================================================================

1)Có nhiều lúc bảo mật powershell không cho phép chạy các file script trên hệ thống 
    => Thay đổi cấu hình Execution Policy -> chạy lệnh Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

2) Ctrl C để dừng máy chủ angular (ng serve)
3) {{...}} ở file app.component.html  là biến sự kiện và nó được config ở file app.component.ts
4) muốn gọi [(ngModel)] thì bạn phải import
5) cài bootstrap vào dự án bằng lệnh npm install --save bootstrap@3 =>> 3 là phiên bản 

/**
 * * 6) muốn [(ngModel)] với thẻ input 
 * ! import { FormsModule } from '@angular/forms'; vào file app.module.ts đồng thời config "FormsModule"
 @NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
 */