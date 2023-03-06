package top.naccl.entity.DTO;

import java.util.List;

/**
 * @Author : RippleSu
 * @create 2023/3/1 17:39
 */
public class UploadDTO {
    private String dir;
    private String password;
    private List<FileDTO> imgList;

    public String getDir() {
        return dir;
    }

    public void setDir(String dir) {
        this.dir = dir;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<FileDTO> getImgList() {
        return imgList;
    }

    public void setImgList(List<FileDTO> imgList) {
        this.imgList = imgList;
    }
}
