package top.naccl.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import top.naccl.service.FileUploadService;
import top.naccl.service.RandomImageService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;

/**
 * @Author : RippleSu
 * @create 2023/2/27 22:37
 */
@Controller
public class RandomImageController {
    @Autowired
    RandomImageService randomImageService;
    @Autowired
    FileUploadService fileUploadService;

    @GetMapping("/random")
    @CrossOrigin(origins = "*")
    @ResponseBody
    public String randomImage(@RequestParam(value = "dir",required = false,defaultValue = "") String dir,
                              @RequestParam(value = "method",required = false,defaultValue = "simple") String method,
                              HttpServletResponse response) {
        try {
            // 图片的二进制流
            byte[] fileByte = randomImageService.randomImageHandler(dir, method);
            response.setContentType("image/png");
            OutputStream os = response.getOutputStream();
            os.write(fileByte);
            os.flush();
            os.close();
        } catch (IOException e) {
            e.printStackTrace();
            return "随机图片获取异常";
        }
        return "success";
    }

//    @PostMapping("/uploadImages")
//    @ResponseBody
//    public Result imagesUpload(@RequestBody UploadDTO param, HttpServletResponse response){
//        String password = param.getPassword();
//        if(password != null && password.equals("admin")){
//            try {
//                return Result.ok(fileUploadService.upload(param));
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//        return Result.fail("password error");
//    }
//    @GetMapping("/upload")
//    public String upload(){
//        return "/upload.html";
//    }
}
