package top.naccl.entity.DTO;

/**
 * @Author : RippleSu
 * @create 2023/3/1 19:16
 */
public class FileDTO {
    private String src;
    private String name;
    private int size;

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
