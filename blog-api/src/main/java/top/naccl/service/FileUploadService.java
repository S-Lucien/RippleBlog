package top.naccl.service;

import top.naccl.entity.DTO.UploadDTO;

import java.io.IOException;
import java.util.List;

/**
 * @Author : RippleSu
 * @create 2023/3/1 19:23
 */
public interface FileUploadService {
    /**
     * 上传图片至服务器
     * @param uploadDTO
     * @return
     */
    List<String> upload(UploadDTO uploadDTO) throws IOException;
}
