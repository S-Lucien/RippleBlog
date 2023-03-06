package top.naccl.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import top.naccl.constant.ImageTypeRegex;
import top.naccl.entity.DTO.FileDTO;
import top.naccl.entity.DTO.UploadDTO;
import top.naccl.service.FileUploadService;
import top.naccl.util.Base64ToMultipartFile;
import top.naccl.util.FileUtil;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author : RippleSu
 * @create 2023/3/1 19:24
 */
@Service
public class FileUploadServiceImpl implements FileUploadService {
    private String path;
    private final int maxSize = 1024 * 1024 * 10;

    @Value("${images.dir}")
    public void initPath(String dir){
        this.path = FileUtil.checkSlash(dir);
    }
    @Override
    public List<String> upload(UploadDTO uploadDTO) throws IOException {
        String dir = uploadDTO.getDir();
        List<FileDTO> imgList = uploadDTO.getImgList();
        List<String> errorList = new ArrayList<>();
        for (FileDTO fileDTO : imgList ) {
            // 文件不是图片或超出10MB大小，则不上传
            if(fileDTO.getSize() > maxSize || !fileDTO.getName().toLowerCase().matches(ImageTypeRegex.ALL)){
                errorList.add(fileDTO.getName());
                continue;
            }
            final String[] base64Array = fileDTO.getSrc().split(",");
            MultipartFile multipartFile = new Base64ToMultipartFile(base64Array[1], base64Array[0]);
            saveLocal(multipartFile, path + FileUtil.checkSlash(dir) + fileDTO.getName());
        }
        return errorList;
    }
    private String saveLocal(MultipartFile multipartFile, String path) throws IOException {
        File file=new File(path);
        File dir=file.getParentFile();
        //不存在父路径就创建
        if(!dir.exists())
        {
            dir.mkdirs();
        }
        FileOutputStream outputStream;
        outputStream = new FileOutputStream(path);
        outputStream.write(multipartFile.getBytes());
        outputStream.close();
        return path;
    }
}
